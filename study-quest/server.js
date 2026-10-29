// StudyQuest - TASK-02 Web Server
// Author: Мөнхбаяр
// Pure Node.js (Zero dependencies) with REST API & SPA Routing

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.PORT || 3000;
const DATA_DIR = path.join(__dirname, 'data');
const PUBLIC_DIR = path.join(__dirname, 'public');

const COURSES_FILE = path.join(DATA_DIR, 'courses.json');
const QUESTIONS_FILE = path.join(DATA_DIR, 'questions.json');

// MIME types for static assets
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

// Helper to read JSON file
function readJson(filePath) {
  try {
    const raw = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading file:', filePath, err);
    return null;
  }
}

// Helper to write JSON file
function writeJson(filePath, data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error('Error writing file:', filePath, err);
    return false;
  }
}

// Send JSON response
function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  });
  res.end(JSON.stringify(data));
}

// Parse request body
function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
      if (body.length > 1e6) { // 1MB limit
        req.destroy();
        reject(new Error('Payload too large'));
      }
    });
    req.on('end', () => {
      if (!body) return resolve({});
      try {
        resolve(JSON.parse(body));
      } catch (err) {
        reject(new Error('Invalid JSON format'));
      }
    });
    req.on('error', reject);
  });
}

// Main HTTP request handler
const server = http.createServer(async (req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = parsedUrl.pathname;
  const method = req.method.toUpperCase();

  // Handle CORS preflight
  if (method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
    return res.end();
  }

  // -------------------------------------------------------------
  // API ROUTE 1: GET /api/courses/practice
  // -------------------------------------------------------------
  if (method === 'GET' && pathname === '/api/courses/practice') {
    const coursesData = readJson(COURSES_FILE);
    if (!coursesData) {
      return sendJson(res, 500, { error: 'Хичээлийн мэдээлэл уншихад алдаа гарлаа' });
    }
    return sendJson(res, 200, coursesData);
  }

  // -------------------------------------------------------------
  // API ROUTE 2: GET /api/quiz/:unitId
  // -------------------------------------------------------------
  const quizMatch = pathname.match(/^\/api\/quiz\/([^/]+)$/);
  if (method === 'GET' && quizMatch) {
    const unitId = quizMatch[1];
    const numericUnitId = parseInt(unitId, 10);
    const questions = readJson(QUESTIONS_FILE) || [];
    
    // Filter questions for this unit or fallback to active questions
    let unitQuestions = questions.filter(q => q.unitId === numericUnitId || String(q.unitId) === unitId);
    if (unitQuestions.length === 0) {
      // If no questions found for this specific unit, provide default unit questions
      unitQuestions = questions.filter(q => q.unitId === 2);
    }

    const quizResponse = {
      unitId: numericUnitId || unitId,
      unitTitle: `${numericUnitId || unitId}-р нэгж: Компонент суурь`,
      courseTitle: 'Веб систем ба технологи',
      rewardXp: 50,
      character: {
        name: 'StudyQuest хөтөч',
        speechBubble: 'Жижиг хэсэг, том боломж! Чи үүнийг чадна.'
      },
      totalQuestions: unitQuestions.length,
      questions: unitQuestions
    };

    return sendJson(res, 200, quizResponse);
  }

  // -------------------------------------------------------------
  // API ROUTE 3: POST /api/admin/questions (CRUD 1)
  // -------------------------------------------------------------
  if (method === 'POST' && pathname === '/api/admin/questions') {
    try {
      const body = await parseBody(req);
      const errors = [];

      if (!body.question || body.question.trim().length < 3) {
        errors.push('Асуултын нэр хамгийн багадаа 3 тэмдэгт байна.');
      }
      if (!Array.isArray(body.options) || body.options.length < 2) {
        errors.push('Хариултын сонголт хамгийн багадаа 2 байх ёстой.');
      } else {
        const emptyOptions = body.options.filter(opt => !opt || !opt.trim());
        if (emptyOptions.length > 0) {
          errors.push('Хариултын бүх сонголтыг бөглөнө үү.');
        }
      }
      if (body.correctOptionIndex === undefined || body.correctOptionIndex === null ||
          body.correctOptionIndex < 0 || (body.options && body.correctOptionIndex >= body.options.length)) {
        errors.push('Зөв хариултын сонголтыг заавал заана уу.');
      }

      if (errors.length > 0) {
        return sendJson(res, 400, {
          success: false,
          message: `${errors.length} алдаа байна.`,
          errors
        });
      }

      const questions = readJson(QUESTIONS_FILE) || [];
      const newId = questions.length > 0 ? Math.max(...questions.map(q => q.id || 0)) + 1 : 1;

      const newQuestion = {
        id: newId,
        unitId: parseInt(body.unitId, 10) || 2,
        unitTitle: body.unitTitle || `НЭГЖ ${body.unitId || 2}: Компонент суурь`,
        courseTitle: body.courseTitle || 'Веб систем ба технологи',
        type: body.type || 'single_choice',
        typeLabel: body.type === 'true_false' ? 'ҮНЭН ЭСВЭЛ ХУДАЛ' :
                   body.type === 'code' ? 'КОДЫН ДҮРСЛЭЛ' : 'НЭГ ХАРИУЛТ СОНГОХ',
        question: body.question.trim(),
        subtitle: body.subtitle ? body.subtitle.trim() : 'Хамгийн зөв тайлбарыг сонгоорой.',
        codeLanguage: body.codeLanguage || (body.type === 'code' ? 'jsx' : null),
        codeSnippet: body.codeSnippet ? body.codeSnippet.trim() : null,
        options: body.options.map(o => o.trim()),
        correctOptionIndex: parseInt(body.correctOptionIndex, 10),
        explanation: body.explanation ? body.explanation.trim() : 'Зөв хариуллаа!',
        points: parseInt(body.points, 10) || 15,
        status: body.status === 'draft' ? 'draft' : 'published',
        createdAt: new Date().toISOString()
      };

      questions.unshift(newQuestion); // New questions show first
      writeJson(QUESTIONS_FILE, questions);

      return sendJson(res, 201, {
        success: true,
        message: 'Асуулт амжилттай хадгалагдаж, нийтлэгдлээ.',
        question: newQuestion
      });
    } catch (err) {
      console.error('POST /api/admin/questions error:', err);
      return sendJson(res, 500, { success: false, message: 'Серверт алдаа гарлаа: ' + err.message });
    }
  }

  // -------------------------------------------------------------
  // API ROUTE 4: PUT /api/admin/questions/:id (CRUD 1)
  // -------------------------------------------------------------
  const adminPutMatch = pathname.match(/^\/api\/admin\/questions\/([^/]+)$/);
  if (method === 'PUT' && adminPutMatch) {
    try {
      const qId = parseInt(adminPutMatch[1], 10);
      const body = await parseBody(req);
      const questions = readJson(QUESTIONS_FILE) || [];
      const index = questions.findIndex(q => q.id === qId);

      if (index === -1) {
        return sendJson(res, 404, { success: false, message: 'Асуулт олдсонгүй.' });
      }

      const errors = [];
      if (!body.question || body.question.trim().length < 3) {
        errors.push('Асуултын нэр хамгийн багадаа 3 тэмдэгт байна.');
      }
      if (!Array.isArray(body.options) || body.options.length < 2) {
        errors.push('Хариултын сонголт хамгийн багадаа 2 байх ёстой.');
      }
      if (body.correctOptionIndex === undefined || body.correctOptionIndex === null ||
          body.correctOptionIndex < 0 || (body.options && body.correctOptionIndex >= body.options.length)) {
        errors.push('Зөв хариултын сонголтыг заавал заана уу.');
      }

      if (errors.length > 0) {
        return sendJson(res, 400, {
          success: false,
          message: `${errors.length} алдаа байна.`,
          errors
        });
      }

      const existing = questions[index];
      const updatedQuestion = {
        ...existing,
        unitId: body.unitId !== undefined ? parseInt(body.unitId, 10) : existing.unitId,
        unitTitle: body.unitTitle || existing.unitTitle,
        type: body.type || existing.type,
        typeLabel: (body.type || existing.type) === 'true_false' ? 'ҮНЭН ЭСВЭЛ ХУДАЛ' :
                   (body.type || existing.type) === 'code' ? 'КОДЫН ДҮРСЛЭЛ' : 'НЭГ ХАРИУЛТ СОНГОХ',
        question: body.question.trim(),
        subtitle: body.subtitle !== undefined ? body.subtitle.trim() : existing.subtitle,
        codeSnippet: body.codeSnippet !== undefined ? (body.codeSnippet ? body.codeSnippet.trim() : null) : existing.codeSnippet,
        options: body.options.map(o => o.trim()),
        correctOptionIndex: parseInt(body.correctOptionIndex, 10),
        explanation: body.explanation !== undefined ? body.explanation.trim() : existing.explanation,
        points: body.points !== undefined ? parseInt(body.points, 10) : existing.points,
        status: body.status || existing.status,
        updatedAt: new Date().toISOString()
      };

      questions[index] = updatedQuestion;
      writeJson(QUESTIONS_FILE, questions);

      return sendJson(res, 200, {
        success: true,
        message: 'Асуулт амжилттай шинэчлэгдлээ.',
        question: updatedQuestion
      });
    } catch (err) {
      console.error('PUT /api/admin/questions error:', err);
      return sendJson(res, 500, { success: false, message: 'Серверт алдаа гарлаа: ' + err.message });
    }
  }

  // -------------------------------------------------------------
  // API ROUTE 5: GET /api/admin/questions (List with search/filter)
  // -------------------------------------------------------------
  if (method === 'GET' && pathname === '/api/admin/questions') {
    let questions = readJson(QUESTIONS_FILE) || [];
    const qQuery = (parsedUrl.searchParams.get('q') || '').trim().toLowerCase();
    const unitQuery = parsedUrl.searchParams.get('unitId');
    const statusQuery = parsedUrl.searchParams.get('status');

    if (qQuery) {
      questions = questions.filter(q =>
        q.question.toLowerCase().includes(qQuery) ||
        (q.explanation && q.explanation.toLowerCase().includes(qQuery))
      );
    }
    if (unitQuery && unitQuery !== 'all') {
      questions = questions.filter(q => String(q.unitId) === String(unitQuery));
    }
    if (statusQuery && statusQuery !== 'all') {
      questions = questions.filter(q => q.status === statusQuery);
    }

    return sendJson(res, 200, {
      total: questions.length,
      questions
    });
  }

  // -------------------------------------------------------------
  // API ROUTE 6: DELETE /api/admin/questions/:id
  // -------------------------------------------------------------
  const adminDelMatch = pathname.match(/^\/api\/admin\/questions\/([^/]+)$/);
  if (method === 'DELETE' && adminDelMatch) {
    const qId = parseInt(adminDelMatch[1], 10);
    let questions = readJson(QUESTIONS_FILE) || [];
    const index = questions.findIndex(q => q.id === qId);

    if (index === -1) {
      return sendJson(res, 404, { success: false, message: 'Асуулт олдсонгүй.' });
    }

    const deleted = questions.splice(index, 1)[0];
    writeJson(QUESTIONS_FILE, questions);

    return sendJson(res, 200, {
      success: true,
      message: 'Асуулт амжилттай устгагдлаа.',
      question: deleted
    });
  }

  // -------------------------------------------------------------
  // STATIC FILE SERVING & SPA FALLBACK
  // -------------------------------------------------------------
  let safePath = path.normalize(pathname).replace(/^(\.\.[\/\\])+/, '');
  let filePath = path.join(PUBLIC_DIR, safePath);

  // If path is a directory, look for index.html
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  // If file exists, serve it
  if (fs.existsSync(filePath) && !fs.statSync(filePath).isDirectory()) {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    return fs.createReadStream(filePath).pipe(res);
  }

  // SPA fallback: for frontend routes (/practice, /quiz/:unitId, /admin/questions), serve index.html
  const isSpaRoute = pathname === '/' ||
                     pathname === '/practice' ||
                     pathname.startsWith('/quiz/') ||
                     pathname === '/admin/questions';

  if (isSpaRoute) {
    const indexPath = path.join(PUBLIC_DIR, 'index.html');
    if (fs.existsSync(indexPath)) {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      return fs.createReadStream(indexPath).pipe(res);
    }
  }

  // 404 Not Found
  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('404 Not Found');
});

// Start listening if run directly
if (require.main === module) {
  server.listen(PORT, '0.0.0.0', () => {
    console.log(`=======================================================`);
    console.log(` StudyQuest TASK-02 Web Server running at:`);
    console.log(` http://localhost:${PORT}/practice`);
    console.log(` http://localhost:${PORT}/quiz/2`);
    console.log(` http://localhost:${PORT}/admin/questions`);
    console.log(`=======================================================`);
  });
}

module.exports = server;

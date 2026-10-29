// StudyQuest Automated Test Suite
// Verifies all required endpoints and behavior for TASK-02 (Мөнхбаяр)

const http = require('http');
const server = require('./server');

const PORT = 3000;
const BASE_URL = `http://127.0.0.1:${PORT}`;

function request(method, path, body = null) {
  return new Promise((resolve, reject) => {
    const url = new URL(path, BASE_URL);
    const options = {
      method,
      hostname: '127.0.0.1',
      port: PORT,
      path: url.pathname + url.search,
      headers: {}
    };

    let postData = null;
    if (body) {
      postData = JSON.stringify(body);
      options.headers['Content-Type'] = 'application/json';
      options.headers['Content-Length'] = Buffer.byteLength(postData);
    }

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        let json = null;
        try { json = JSON.parse(data); } catch (e) {}
        resolve({ status: res.statusCode, headers: res.headers, body: json || data });
      });
    });

    req.on('error', reject);
    if (postData) req.write(postData);
    req.end();
  });
}

async function runTests() {
  console.log('--- Starting StudyQuest TASK-02 Automated Tests ---');
  let passed = 0;
  let failed = 0;

  function assert(condition, testName) {
    if (condition) {
      console.log(`[PASS] ${testName}`);
      passed++;
    } else {
      console.error(`[FAIL] ${testName}`);
      failed++;
    }
  }

  // Ensure server is listening
  await new Promise((resolve) => {
    server.listen(PORT, '127.0.0.1', () => {
      resolve();
    });
  });

  try {
    // 1. GET /api/courses/practice
    const resPractice = await request('GET', '/api/courses/practice');
    assert(resPractice.status === 200, 'GET /api/courses/practice returns 200 OK');
    assert(resPractice.body.courses && resPractice.body.courses.length >= 3, 'Practice courses array has 3+ courses');
    assert(resPractice.body.currentChapter && resPractice.body.currentChapter.units.length >= 2, 'Chapter units structure returned');

    // 2. GET /api/quiz/2
    const resQuiz = await request('GET', '/api/quiz/2');
    assert(resQuiz.status === 200, 'GET /api/quiz/2 returns 200 OK');
    assert(resQuiz.body.questions && resQuiz.body.questions.length >= 3, 'Quiz contains questions for Unit 2');
    assert(resQuiz.body.character && resQuiz.body.character.speechBubble, 'Quiz contains character mascot speech bubble');

    // 3. POST /api/admin/questions (CRUD 1)
    const newQuestionPayload = {
      unitId: 2,
      type: 'single_choice',
      question: 'Тестийн автомат асуулт: React дээр хуудас хэрхэн шинэчлэгддэг вэ?',
      subtitle: 'Хамгийн зөв сонголтыг сонгоно уу.',
      options: [
        'State эсвэл props өөрчлөгдөхөд виртуал DOM-оор шинэчлэгдэнэ',
        'Бүх HTML хуудсыг дахин серверээс ачаална',
        'Шинэчлэгдэх боломжгүй',
        'Зөвхөн хөтөчийг refresh хийх үед'
      ],
      correctOptionIndex: 0,
      explanation: 'React нь Virtual DOM diffing алгоритм ашиглан зөвхөн өөрчлөгдсөн хэсгийг дахин дүрсэлдэг.',
      points: 20,
      status: 'published'
    };

    const resPost = await request('POST', '/api/admin/questions', newQuestionPayload);
    assert(resPost.status === 201, 'POST /api/admin/questions returns 201 Created');
    assert(resPost.body.success === true, 'POST response success flag is true');
    const createdId = resPost.body.question?.id;
    assert(typeof createdId === 'number', `Created question ID: ${createdId}`);

    // 4. PUT /api/admin/questions/:id (CRUD 1)
    const updatePayload = {
      ...newQuestionPayload,
      question: 'Зассан асуулт: React дээр хуудас хэрхэн шинэчлэгддэг вэ? (Шинэчилсэн)',
      points: 25,
      status: 'draft'
    };
    const resPut = await request('PUT', `/api/admin/questions/${createdId}`, updatePayload);
    assert(resPut.status === 200, `PUT /api/admin/questions/${createdId} returns 200 OK`);
    assert(resPut.body.question.points === 25, 'PUT updated points to 25');
    assert(resPut.body.question.status === 'draft', 'PUT updated status to draft');

    // 5. GET /api/admin/questions (Search & Filter)
    const resAdminList = await request('GET', '/api/admin/questions?q=Зассан');
    assert(resAdminList.status === 200, 'GET /api/admin/questions returns 200 OK');
    assert(resAdminList.body.questions.some(q => q.id === createdId), 'Admin search query finds updated question');

    // 6. DELETE /api/admin/questions/:id
    const resDelete = await request('DELETE', `/api/admin/questions/${createdId}`);
    assert(resDelete.status === 200, `DELETE /api/admin/questions/${createdId} returns 200 OK`);

    // 7. Test SPA Routes fallback
    const resSpa1 = await request('GET', '/practice');
    assert(resSpa1.status === 200 && resSpa1.body.includes('<!DOCTYPE html>'), 'GET /practice serves SPA index.html');

    const resSpa2 = await request('GET', '/quiz/2');
    assert(resSpa2.status === 200 && resSpa2.body.includes('<!DOCTYPE html>'), 'GET /quiz/2 serves SPA index.html');

    const resSpa3 = await request('GET', '/admin/questions');
    assert(resSpa3.status === 200 && resSpa3.body.includes('<!DOCTYPE html>'), 'GET /admin/questions serves SPA index.html');

    console.log(`\n========================================`);
    console.log(`All Tests Completed: ${passed} passed, ${failed} failed.`);
    console.log(`========================================`);

    server.close(() => {
      process.exit(failed > 0 ? 1 : 0);
    });
  } catch (err) {
    console.error('Test execution error:', err);
    server.close(() => process.exit(1));
  }
}

runTests();

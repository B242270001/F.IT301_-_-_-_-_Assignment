/* ------------------------------------------------------------------
   API давхарга. Backend (Node) шаардахгүй — хүсэлтүүдийг browser дотор
   дууриана, өгөгдлийг localStorage-д хадгална.
   Endpoint-ууд нь хүснэгтэнд заасантай яг ижил:
     GET  /api/courses/practice
     GET  /api/quiz/:unitId
     GET/POST /api/admin/questions      PUT/DELETE /api/admin/questions/:id
   Жинхэнэ backend холбохдоо USE_REAL_BACKEND = true болго.
------------------------------------------------------------------- */
const USE_REAL_BACKEND = true;
const API_BASE = 'http://localhost:3001';

// JSON файлуудын өгөгдлийг SEED болгон нэгтгэв
const SEED = {
  nextId: 100,
  // users.json -> U05 (Б. Тэмүүлэн)
  student: { id: 'U05', name: 'Б. Тэмүүлэн', xp: 2480, streak: 7 },
  // courses.json
  courses: [
    { id: 'C01', title: 'Веб систем ба технологи', icon: 'code', topicsDone: 3, topicsTotal: 6, progress: 50, lastViewed: 'React Components', lessonsDone: 3, lessonsTotal: 6, chapter: 'Frontend суурь', path: 'React үндэс', nextUnitId: 'UN06' },
    { id: 'C02', title: 'Үйлдлийн систем', icon: 'network', topicsDone: 0, topicsTotal: 3, progress: 0, lastViewed: null, lessonsDone: 0, lessonsTotal: 3, chapter: 'OS суурь', path: 'Процесс менежмент', nextUnitId: 'UN07' },
    { id: 'C03', title: 'Өгөгдлийн сан', icon: 'sigma', topicsDone: 0, topicsTotal: 2, progress: 0, lastViewed: null, lessonsDone: 0, lessonsTotal: 2, chapter: 'DB суурь', path: 'SQL үндэс', nextUnitId: 'UN09' },
  ],
  // units.json
  units: {
    'UN06': { id: 'UN06', courseId: 'C01', title: 'React үндэс', xp: 50, minutes: 5, chapter: 'Frontend суурь · React үндэс' },
    'UN07': { id: 'UN07', courseId: 'C02', title: 'Процесс менежмент', xp: 50, minutes: 4, chapter: 'OS суурь · Процесс менежмент' },
    'UN09': { id: 'UN09', courseId: 'C03', title: 'SQL үндэс', xp: 50, minutes: 6, chapter: 'DB суурь · SQL үндэс' },
  },
  // quiz-questions.json
  questions: [
    { id: 'Q01', unitId: 'UN06', text: 'React-д JSX гэж юу вэ?', hint: 'JavaScript XML — HTML-тэй төстэй синтакс', options: ['JavaScript XML — HTML-тэй төстэй синтакс', 'CSS framework', 'Серверийн хэл', 'Өгөгдлийн сангийн query'], correctIndex: 0, explanation: 'JSX нь React-д HTML-тэй төстэй бичиглэлээр UI тодорхойлох боломж олгоно.' },
    { id: 'Q02', unitId: 'UN06', text: 'React компонент заавал PascalCase нэртэй байх ёстой.', hint: '', options: ['Үнэн', 'Худал'], correctIndex: 0, explanation: 'React нь PascalCase нэртэй функцийг компонент гэж таньдаг. Жижиг үсгээр эхэлбэл HTML tag гэж ойлгоно.' },
    { id: 'Q03', unitId: 'UN06', text: 'Props ба State-ийн ялгаа юу вэ?', hint: 'State нь компонентийн дотоод өгөгдөл.', options: ['State нь зөвхөн уншигдана', 'Props нь компонент дотор өөрчлөгдөнө', 'State нь компонентийн дотоод өгөгдөл, Props нь гаднаас ирнэ', 'Ялгаа байхгүй'], correctIndex: 2, explanation: 'Props нь эцэг компонентоос хүүхэд рүү дамждаг бол State нь компонентийн дотоод төлөв юм.' },
    { id: 'Q04', unitId: 'UN07', text: 'Процесс гэж юу вэ?', hint: 'Гүйцэтгэгдэж буй программ.', options: ['Гүйцэтгэгдэж буй программ', 'Файлын систем', 'Санах ойн блок', 'CPU-ийн бүрэлдэхүүн хэсэг'], correctIndex: 0, explanation: 'Процесс нь гүйцэтгэгдэж буй програмын жишээ юм.' },
    { id: 'Q05', unitId: 'UN09', text: 'SQL-д ямар түлхүүр үг өгөгдөл авахад ашиглагддаг вэ?', hint: 'Хүснэгтээс мэдээлэл авах.', options: ['INSERT', 'UPDATE', 'SELECT', 'DELETE'], correctIndex: 2, explanation: 'SELECT нь өгөгдлийн сангаас мэдээлэл авахад ашиглагдана.' },
  ],
  // leaderboard (all-time)
  leaderboard: [
    { rank: 1, id: 'U01', name: 'Д. Анужин', major: 'Программ хангамж · 3-р курс', xp: 3240, change: 0 },
    { rank: 2, id: 'U02', name: 'А. Саруул', major: 'Мэдээллийн систем · 2-р курс', xp: 2960, change: 0 },
    { rank: 3, id: 'U03', name: 'Э. Билгүүн', major: 'Компьютерын ухаан · 2-р курс', xp: 2710, change: 0 },
    { rank: 4, id: 'U05', name: 'Б. Тэмүүлэн', major: 'Программ хангамж · 2-р курс', xp: 2480, change: 0 },
  ],
  // lectures.json
  lectures: [
    { id: 'L01', topicId: 'TP01', courseId: 'C01', title: 'Client-Server загвар', summary: 'Вэб хэрхэн ажилладаг талаар суурь ойлголт.' },
    { id: 'L02', topicId: 'TP02', courseId: 'C01', title: 'HTTP Request ба Response', summary: 'HTTP протоколын ажиллагааны зарчим.' },
  ]
};

const DB_KEY = 'studyquest-db-v1';
let memoryDb = null;
function loadDb() {
  try { const raw = localStorage.getItem(DB_KEY); if (raw) return JSON.parse(raw); } catch (e) { /* localStorage боломжгүй */ }
  if (!memoryDb) memoryDb = JSON.parse(JSON.stringify(SEED));
  return memoryDb;
}
function saveDb(db) { memoryDb = db; try { localStorage.setItem(DB_KEY, JSON.stringify(db)); } catch (e) {} }
const copy = (x) => JSON.parse(JSON.stringify(x));
function fail(status, message, errors) { return Object.assign(new Error(message), { status, errors }); }

function validateQuestion(b, units) {
  const e = {};
  if (!units[b.unitId]) e.unitId = 'Нэгжээ сонгоно уу.';
  if (!b.text || !String(b.text).trim()) e.text = 'Асуултын текстийг заавал оруулна уу.';
  else if (String(b.text).trim().length < 5) e.text = 'Асуулт хамгийн багадаа 5 тэмдэгт байна.';
  if (!Array.isArray(b.options) || b.options.length !== 4 || b.options.some((o) => !String(o || '').trim())) e.options = 'Дөрвөн хариултын сонголтыг бүгдийг нь бөглөнө үү.';
  if (!Number.isInteger(b.correctIndex) || b.correctIndex < 0 || b.correctIndex > 3) e.correctIndex = 'Зөв хариултаа сонгоно уу.';
  return e;
}
const cleanQuestion = (b) => ({ unitId: b.unitId, text: String(b.text).trim(), hint: String(b.hint || '').trim(), options: b.options.map((o) => String(o).trim()), correctIndex: b.correctIndex, explanation: String(b.explanation || '').trim() });

async function mockRequest(method, url, body) {
  await new Promise((r) => setTimeout(r, 80));
  const u = new URL(url, 'http://local');
  const path = u.pathname;
  const db = loadDb();
  let m;

  // GET /api/courses/practice
  if (method === 'GET' && path === '/api/courses/practice') {
    const courses = db.courses.map((c) => {
      const unit = db.units[c.nextUnitId];
      const count = db.questions.filter((q) => q.unitId === unit.id).length;
      return { ...c, next: { unitId: unit.id, title: unit.title, questions: count, minutes: unit.minutes, xp: unit.xp } };
    });
    return copy({ student: db.student, dailyGoal: { target: 60, earned: 40 }, selectedCourseId: 'C01', courses });
  }
  // GET /api/quiz/:unitId
  if (method === 'GET' && (m = path.match(/^\/api\/quiz\/([^/]+)$/))) {
    const unit = db.units[decodeURIComponent(m[1])];
    if (!unit) throw fail(404, 'Нэгж олдсонгүй.');
    const course = db.courses.find((c) => c.id === unit.courseId);
    const questions = db.questions.filter((q) => q.unitId === unit.id).map((q) => ({
      id: q.id, text: q.text, hint: q.hint, correctIndex: q.correctIndex, explanation: q.explanation,
      options: q.options.map((text, i) => ({ key: 'ABCD'[i], text })),
    }));
    return copy({ student: db.student, unit: { ...unit, courseTitle: course.title }, questions });
  }
  // GET /api/admin/units
  if (method === 'GET' && path === '/api/admin/units') return Object.values(db.units).map((u) => ({ id: u.id, title: u.title }));
  // GET /api/admin/questions
  if (method === 'GET' && path === '/api/admin/questions') {
    const unitId = u.searchParams.get('unitId'), q = (u.searchParams.get('q') || '').toLowerCase();
    let list = db.questions;
    if (unitId) list = list.filter((x) => x.unitId === unitId);
    if (q) list = list.filter((x) => x.text.toLowerCase().includes(q));
    return copy(list.map((x) => ({ ...x, unitTitle: db.units[x.unitId] && db.units[x.unitId].title })));
  }
  // POST /api/admin/questions  (CRUD 1)
  if (method === 'POST' && path === '/api/admin/questions') {
    const errors = validateQuestion(body, db.units);
    if (Object.keys(errors).length) throw fail(400, 'Мэдээлэл буруу байна.', errors);
    const item = { id: String(db.nextId++), ...cleanQuestion(body) };
    db.questions.push(item); saveDb(db);
    return copy(item);
  }
  // PUT / DELETE /api/admin/questions/:id
  if ((m = path.match(/^\/api\/admin\/questions\/([^/]+)$/))) {
    const i = db.questions.findIndex((x) => x.id === m[1]);
    if (i < 0) throw fail(404, 'Асуулт олдсонгүй.');
    if (method === 'PUT') {
      const errors = validateQuestion(body, db.units);
      if (Object.keys(errors).length) throw fail(400, 'Мэдээлэл буруу байна.', errors);
      db.questions[i] = { id: db.questions[i].id, ...cleanQuestion(body) }; saveDb(db);
      return copy(db.questions[i]);
    }
    if (method === 'DELETE') { db.questions.splice(i, 1); saveDb(db); return null; }
  }
  throw fail(404, 'Endpoint олдсонгүй.');
}

async function realRequest(method, url, body) {
  const res = await fetch(API_BASE + url, { method, headers: { 'Content-Type': 'application/json' }, body: body ? JSON.stringify(body) : undefined });
  const data = res.status === 204 ? null : await res.json().catch(() => null);
  if (!res.ok) throw fail(res.status, (data && data.message) || 'Алдаа гарлаа.', data && data.errors);
  return data;
}
const request = USE_REAL_BACKEND ? realRequest : mockRequest;

const api = {
  practice: () => request('GET', '/api/courses/practice'),
  quiz: (unitId) => request('GET', '/api/quiz/' + encodeURIComponent(unitId)),
  units: () => request('GET', '/api/admin/units'),
  questions: (params = {}) => request('GET', '/api/admin/questions?' + new URLSearchParams(params)),
  createQuestion: (data) => request('POST', '/api/admin/questions', data),
  updateQuestion: (id, data) => request('PUT', '/api/admin/questions/' + id, data),
  deleteQuestion: (id) => request('DELETE', '/api/admin/questions/' + id),
};

// server.js — StudyQuest backend
import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DB_FILE = path.join(__dirname, 'db.json');
const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

const SEED = {
  nextId: 100,
  student: { id: 'U05', name: 'Б. Тэмүүлэн', xp: 2480, streak: 7 },
  courses: [
    { id: 'C01', title: 'Веб систем ба технологи', icon: 'code', topicsDone: 3, topicsTotal: 6, progress: 50, lastViewed: 'React Components', lessonsDone: 3, lessonsTotal: 6, chapter: 'Frontend суурь', path: 'React үндэс', nextUnitId: 'UN06' },
    { id: 'C02', title: 'Үйлдлийн систем', icon: 'network', topicsDone: 0, topicsTotal: 3, progress: 0, lastViewed: null, lessonsDone: 0, lessonsTotal: 3, chapter: 'OS суурь', path: 'Процесс менежмент', nextUnitId: 'UN07' },
    { id: 'C03', title: 'Өгөгдлийн сан', icon: 'sigma', topicsDone: 0, topicsTotal: 2, progress: 0, lastViewed: null, lessonsDone: 0, lessonsTotal: 2, chapter: 'DB суурь', path: 'SQL үндэс', nextUnitId: 'UN09' },
  ],
  units: {
    UN06: { id: 'UN06', courseId: 'C01', title: 'React үндэс', xp: 50, minutes: 5, chapter: 'Frontend суурь · React үндэс' },
    UN07: { id: 'UN07', courseId: 'C02', title: 'Процесс менежмент', xp: 50, minutes: 4, chapter: 'OS суурь · Процесс менежмент' },
    UN09: { id: 'UN09', courseId: 'C03', title: 'SQL үндэс', xp: 50, minutes: 6, chapter: 'DB суурь · SQL үндэс' },
  },
  questions: [
    { id: 'Q01', unitId: 'UN06', text: 'React-д JSX гэж юу вэ?', hint: 'JavaScript XML — HTML-тэй төстэй синтакс', options: ['JavaScript XML — HTML-тэй төстэй синтакс', 'CSS framework', 'Серверийн хэл', 'Өгөгдлийн сангийн query'], correctIndex: 0, explanation: 'JSX нь React-д HTML-тэй төстэй бичиглэлээр UI тодорхойлох боломж олгоно.' },
    { id: 'Q04', unitId: 'UN07', text: 'Процесс гэж юу вэ?', hint: 'Гүйцэтгэгдэж буй программ.', options: ['Гүйцэтгэгдэж буй программ', 'Файлын систем', 'Санах ойн блок', 'CPU-ийн бүрэлдэхүүн хэсэг'], correctIndex: 0, explanation: 'Процесс нь гүйцэтгэгдэж буй програмын жишээ юм.' },
    { id: 'Q05', unitId: 'UN09', text: 'SQL-д ямар түлхүүр үг өгөгдөл авахад ашиглагддаг вэ?', hint: 'Хүснэгтээс мэдээлэл авах.', options: ['INSERT', 'UPDATE', 'SELECT', 'DELETE'], correctIndex: 2, explanation: 'SELECT нь өгөгдлийн сангаас мэдээлэл авахад ашиглагдана.' },
  ],
};

function loadDb() {
  if (!fs.existsSync(DB_FILE)) fs.writeFileSync(DB_FILE, JSON.stringify(SEED, null, 2));
  return JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
}
function saveDb(db) { fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2)); }

function validateQuestion(b, units) {
  const e = {};
  if (!b || !units[b.unitId]) e.unitId = 'Нэгжээ сонгоно уу.';
  if (!b || !b.text || !String(b.text).trim()) e.text = 'Асуултын текстийг заавал оруулна уу.';
  else if (String(b.text).trim().length < 5) e.text = 'Асуулт хамгийн багадаа 5 тэмдэгт байна.';
  if (!b || !Array.isArray(b.options) || b.options.length !== 4 || b.options.some((o) => !String(o || '').trim()))
    e.options = 'Дөрвөн хариултын сонголтыг бүгдийг нь бөглөнө үү.';
  if (!b || !Number.isInteger(b.correctIndex) || b.correctIndex < 0 || b.correctIndex > 3)
    e.correctIndex = 'Зөв хариултаа сонгоно уу.';
  return e;
}
const cleanQuestion = (b) => ({ unitId: b.unitId, text: String(b.text).trim(), hint: String(b.hint || '').trim(), options: b.options.map((o) => String(o).trim()), correctIndex: b.correctIndex, explanation: String(b.explanation || '').trim() });

app.get('/api/courses/practice', (req, res) => {
  const db = loadDb();
  const courses = db.courses.map((c) => {
    const unit = db.units[c.nextUnitId];
    const count = db.questions.filter((q) => q.unitId === unit.id).length;
    return { ...c, next: { unitId: unit.id, title: unit.title, questions: count, minutes: unit.minutes, xp: unit.xp } };
  });
  res.json({ student: db.student, dailyGoal: { target: 60, earned: 40 }, selectedCourseId: 'C01', courses });
});

app.get('/api/quiz/:unitId', (req, res) => {
  const db = loadDb();
  const unit = db.units[req.params.unitId];
  if (!unit) return res.status(404).json({ message: 'Нэгж олдсонгүй.' });
  const course = db.courses.find((c) => c.id === unit.courseId);
  const questions = db.questions.filter((q) => q.unitId === unit.id).map((q) => ({
    id: q.id, text: q.text, hint: q.hint, correctIndex: q.correctIndex, explanation: q.explanation,
    options: q.options.map((text, i) => ({ key: 'ABCD'[i], text })),
  }));
  res.json({ student: db.student, unit: { ...unit, courseTitle: course.title }, questions });
});

app.get('/api/admin/units', (req, res) => {
  const db = loadDb();
  res.json(Object.values(db.units).map((u) => ({ id: u.id, title: u.title })));
});

app.get('/api/admin/questions', (req, res) => {
  const db = loadDb();
  const { unitId, q } = req.query;
  let list = db.questions;
  if (unitId) list = list.filter((x) => x.unitId === unitId);
  if (q) list = list.filter((x) => x.text.toLowerCase().includes(String(q).toLowerCase()));
  res.json(list.map((x) => ({ ...x, unitTitle: db.units[x.unitId] && db.units[x.unitId].title })));
});

app.post('/api/admin/questions', (req, res) => {
  const db = loadDb();
  const errors = validateQuestion(req.body, db.units);
  if (Object.keys(errors).length) return res.status(400).json({ message: 'Мэдээлэл буруу байна.', errors });
  const item = { id: String(db.nextId++), ...cleanQuestion(req.body) };
  db.questions.push(item); saveDb(db);
  res.status(201).json(item);
});

app.put('/api/admin/questions/:id', (req, res) => {
  const db = loadDb();
  const i = db.questions.findIndex((x) => x.id === req.params.id);
  if (i < 0) return res.status(404).json({ message: 'Асуулт олдсонгүй.' });
  const errors = validateQuestion(req.body, db.units);
  if (Object.keys(errors).length) return res.status(400).json({ message: 'Мэдээлэл буруу байна.', errors });
  db.questions[i] = { id: db.questions[i].id, ...cleanQuestion(req.body) };
  saveDb(db);
  res.json(db.questions[i]);
});

app.delete('/api/admin/questions/:id', (req, res) => {
  const db = loadDb();
  const i = db.questions.findIndex((x) => x.id === req.params.id);
  if (i < 0) return res.status(404).json({ message: 'Асуулт олдсонгүй.' });
  db.questions.splice(i, 1); saveDb(db);
  res.status(204).end();
});

app.use(express.static(__dirname));

app.listen(PORT, () => console.log(`✅ StudyQuest server: http://localhost:${PORT}`));

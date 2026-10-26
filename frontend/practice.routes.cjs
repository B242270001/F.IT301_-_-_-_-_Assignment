const express = require('express');
const router = express.Router();

// Mock Data (Эсвэл MongoDB/PostgreSQL DB загвараар солино)
let practiceCourses = [
  { id: 1, title: 'JavaScript үндэс', description: 'Бие даан дадлага хийх бодлогууд', totalUnits: 5 },
  { id: 2, title: 'React.js архитектур', description: 'Компонент ба State задарсан дадлага', totalUnits: 3 }
];

let questions = [
  {
    id: 'q1',
    unitId: 'unit-101',
    question: 'JavaScript дээр "const" түлхүүр үг ямар үүрэгтэй вэ?',
    options: ['Дахин утга оноох боломжгүй хувьсагч', 'Глобал хувьсагч', 'Функц зарлах', 'Массив үүсгэх'],
    correctAnswer: 0
  }
];

// 1. GET /api/courses/practice
router.get('/courses/practice', (req, res) => {
  res.json({ success: true, data: practiceCourses });
});

// 2. GET /api/quiz/:unitId
router.get('/quiz/:unitId', (req, res) => {
  const { unitId } = req.params;
  const unitQuestions = questions.filter(q => q.unitId === unitId);
  res.json({ success: true, data: unitQuestions });
});

// 3. POST /api/admin/questions (CRUD 1 - Нэмэх)
router.post('/admin/questions', (req, res) => {
  const { unitId, question, options, correctAnswer } = req.body;
  const newQuestion = {
    id: `q${Date.now()}`,
    unitId,
    question,
    options,
    correctAnswer
  };
  questions.push(newQuestion);
  res.status(201).json({ success: true, message: 'Асуулт амжилттай үүслээ', data: newQuestion });
});

// 4. PUT /api/admin/questions/:id (CRUD 1 - Засах)
router.put('/admin/questions/:id', (req, res) => {
  const { id } = req.params;
  const index = questions.findIndex(q => q.id === id);

  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Асуулт олдсонгүй' });
  }

  questions[index] = { ...questions[index], ...req.body };
  res.json({ success: true, message: 'Асуулт амжилттай шинэчлэгдлээ', data: questions[index] });
});

module.exports = router;

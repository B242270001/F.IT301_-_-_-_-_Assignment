/**
 * Mock Quiz Service
 * —————————————————
 * Quiz асуулт татах, хариулт шалгах, attempt хадгалах.
 */

const ATTEMPTS_KEY = 'studyquest.attempts';

const mockQuiz = {
  /** Бүх асуултыг татах */
  async fetchAllQuestions() {
    const res = await fetch('/mock/quiz-questions.json');
    const data = await res.json();
    return data.questions;
  },

  /** Тухайн unit-ийн асуултуудыг авах */
  async getByUnit(unitId) {
    const questions = await this.fetchAllQuestions();
    return questions
      .filter((q) => q.unitId === unitId)
      .map(({ correctAnswer, ...q }) => q); // correctAnswer-ийг нуулна
  },

  /** Хариултуудыг шалгаж, attempt үүсгэх */
  async submit(userId, unitId, answers) {
    const questions = await this.fetchAllQuestions();
    const unitQs = questions.filter((q) => q.unitId === unitId);

    let correctCount = 0;
    let xpEarned = 0;
    const weakTopics = [];

    const checked = answers.map((ans) => {
      const q = unitQs.find((qq) => qq.id === ans.questionId);
      const isCorrect = q && q.correctAnswer === ans.answer;
      if (isCorrect) {
        correctCount++;
        xpEarned += q.xpReward;
      } else if (q) {
        weakTopics.push(q.questionText);
      }
      return { ...ans, isCorrect };
    });

    const attempt = {
      id: `ATT${Date.now()}`,
      userId,
      unitId,
      answers: checked,
      correctCount,
      totalCount: unitQs.length,
      scorePercent: unitQs.length ? Math.round((correctCount / unitQs.length) * 100) : 0,
      xpEarned,
      weakTopics,
      createdAt: new Date().toISOString(),
    };

    // localStorage-д хадгалах
    const existing = JSON.parse(localStorage.getItem(ATTEMPTS_KEY) || '[]');
    existing.push(attempt);
    localStorage.setItem(ATTEMPTS_KEY, JSON.stringify(existing));

    return attempt;
  },

  /** Хэрэглэгчийн сүүлийн attempt авах */
  getLatestAttempt(userId) {
    const attempts = JSON.parse(localStorage.getItem(ATTEMPTS_KEY) || '[]');
    const userAttempts = attempts.filter((a) => a.userId === userId);
    return userAttempts.length ? userAttempts[userAttempts.length - 1] : null;
  },

  /** Бүх attempt-ууд */
  getAllAttempts() {
    return JSON.parse(localStorage.getItem(ATTEMPTS_KEY) || '[]');
  },

  reset() {
    localStorage.removeItem(ATTEMPTS_KEY);
  },
};

export default mockQuiz;

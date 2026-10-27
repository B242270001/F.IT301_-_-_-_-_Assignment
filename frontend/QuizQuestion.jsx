import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { mockCourses, mockProgress, mockQuiz } from "./mock";
import "./Practice.css";
import "./QuizQuestion.css";

export default function QuizQuestion({ user }) {
  const { unitId } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [unit, setUnit] = useState(null);
  const [course, setCourse] = useState(null);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let alive = true;
    (async () => {
      setLoading(true); setError("");
      try {
        const [allQuestions, unitsData] = await Promise.all([
          mockQuiz.getByUnit(unitId), fetch("/mock/units.json").then((response) => {
            if (!response.ok) throw new Error("Нэгжийн мэдээллийг уншиж чадсангүй.");
            return response.json();
          }),
        ]);
        const foundUnit = unitsData.units.find((item) => item.id === unitId) || null;
        const foundCourse = foundUnit ? await mockCourses.getById(foundUnit.courseId) : null;
        if (alive) { setQuestions(allQuestions); setUnit(foundUnit); setCourse(foundCourse); }
      } catch (loadError) {
        if (alive) setError(loadError.message || "Асуултуудыг ачаалж чадсангүй.");
      } finally { if (alive) setLoading(false); }
    })();
    return () => { alive = false; };
  }, [unitId]);

  const current = questions[index];
  const submit = async () => {
    if (Object.keys(answers).length < questions.length || submitting) return;
    setSubmitting(true); setError("");
    try {
      const attempt = await mockQuiz.submit(user?.id, unitId, questions.map((question) => ({ questionId: question.id, answer: answers[question.id] })));
      await mockProgress.completeUnit(user?.id, unitId, attempt.scorePercent);
      navigate("/quiz/result");
    } catch (submitError) {
      setError(submitError.message || "Хариултыг хадгалж чадсангүй. Дахин оролдоно уу.");
      setSubmitting(false);
    }
  };

  if (loading || error && !questions.length) return <main className="practice-page"><header className="practice-topbar"><Link className="practice-brand" to="/dashboard"><span className="practice-brand-mark">S</span>StudyQuest</Link><nav className="practice-nav"><Link to="/dashboard">Миний өрөө</Link><Link className="is-active" to="/practice">Дадлага</Link><Link to="/leaderboard">Чансаа</Link></nav></header><section className="practice-state" role={loading ? "status" : undefined}><h1>{loading ? "Асуултуудыг ачаалж байна…" : "Асуултыг ачаалж чадсангүй"}</h1><p>{error}</p>{!loading && <button className="practice-primary-button" onClick={() => window.location.reload()}>Дахин оролдох</button>}</section></main>;
  if (!current || !unit) return <main className="practice-page"><section className="practice-state"><h1>Асуулт олдсонгүй</h1><p>Энэ нэгжид одоогоор дадлагын асуулт байхгүй байна.</p><Link className="practice-primary-button" to={course ? `/practice/${course.id}` : "/practice"}>Суралцах зам руу буцах</Link></section></main>;

  const isLast = index === questions.length - 1;
  const canSubmit = Object.keys(answers).length === questions.length;
  return <main className="practice-page quiz-page">
    <header className="practice-topbar">
      <Link className="practice-brand" to="/dashboard"><span className="practice-brand-mark">S</span>StudyQuest</Link>
      <nav className="practice-nav" aria-label="Үндсэн цэс"><Link to="/dashboard">Миний өрөө</Link><Link className="is-active" to="/practice">Дадлага</Link><Link to="/leaderboard">Чансаа</Link></nav>
      <Link className="practice-back-link" to={`/practice/${unit.courseId}`}>Зам руу буцах</Link>
    </header>
    <section className="quiz-content">
      <div className="quiz-context"><span>{course?.title || "Дадлага"}</span><span>{unit.title}</span></div>
      <div className="quiz-progress-copy"><span>Асуулт {index + 1} / {questions.length}</span><strong>{Math.round(((index + 1) / questions.length) * 100)}%</strong></div>
      <div className="quiz-progress-track"><div style={{ width: `${((index + 1) / questions.length) * 100}%` }} /></div>
      <article className="quiz-card">
        <span className="quiz-question-type">{current.type === "TRUE_FALSE" ? "Үнэн эсвэл худал" : "Сонголтот асуулт"}</span>
        <h1>{current.questionText}</h1>
        {current.codeSnippet && <pre className="quiz-code"><code>{current.codeSnippet}</code></pre>}
        <div className="quiz-options">{current.options.map((option) => <button type="button" key={option} className={`quiz-option ${answers[current.id] === option ? "is-selected" : ""}`} aria-pressed={answers[current.id] === option} onClick={() => setAnswers((old) => ({ ...old, [current.id]: option }))}><span className="quiz-option-marker" aria-hidden="true">{answers[current.id] === option ? "✓" : ""}</span>{option}</button>)}</div>
        {error && <p className="quiz-submit-error" role="alert">{error}</p>}
        <div className="quiz-actions"><button className="qr-button qr-button-secondary" disabled={index === 0 || submitting} onClick={() => setIndex((value) => value - 1)}>Өмнөх</button>{isLast ? <button className="qr-button qr-button-primary" disabled={!canSubmit || submitting} onClick={submit}>{submitting ? "Хадгалж байна…" : "Дуусгаж үр дүн харах"}</button> : <button className="qr-button qr-button-primary" disabled={!answers[current.id]} onClick={() => setIndex((value) => value + 1)}>Дараах →</button>}</div>
      </article>
    </section>
  </main>;
}

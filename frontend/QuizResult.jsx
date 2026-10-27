import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { mockQuiz, mockProgress } from "./mock";
import "./QuizResult.css";

async function readJson(path) {
  const response = await fetch(path);
  if (!response.ok) throw new Error(`Failed to load ${path}`);
  return response.json();
}

export default function QuizResult({ user }) {
  const navigate = useNavigate();
  const [attempt, setAttempt] = useState(null);
  const [unit, setUnit] = useState(null);
  const [course, setCourse] = useState(null);
  const [courseProgress, setCourseProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const loadResult = async () => {
    setLoading(true);
    setError(false);
    try {
      const latest = user?.id ? mockQuiz.getLatestAttempt(user.id) : null;
      setAttempt(latest);
      if (!latest) {
        setUnit(null);
        setCourse(null);
        setCourseProgress(0);
        return;
      }

      const [unitsData, coursesData] = await Promise.all([
        readJson("/mock/units.json"),
        readJson("/mock/courses.json"),
      ]);
      const foundUnit = unitsData.units.find((item) => item.id === latest.unitId) || null;
      const foundCourse = foundUnit
        ? coursesData.courses.find((item) => item.id === foundUnit.courseId) || null
        : null;
      setUnit(foundUnit);
      setCourse(foundCourse);

      if (foundUnit && user?.id) {
        const path = await mockProgress.getLearningPath(user.id, foundUnit.courseId);
        const finished = path.filter((item) => item.status === "COMPLETED" || item.id === latest.unitId).length;
        setCourseProgress(path.length ? Math.round((finished / path.length) * 100) : 0);
      } else {
        setCourseProgress(0);
      }
    } catch (err) {
      console.error("Дадлагын үр дүн ачааллахад алдаа гарлаа:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadResult();
    // latestAttempt is read when the result page opens.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id]);

  if (loading) {
    return (
      <main className="quiz-result-page" data-testid="page-quiz-result">
        <div className="quiz-result-state" role="status">Үр дүнг ачаалж байна…</div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="quiz-result-page" data-testid="page-quiz-result">
        <section className="quiz-result-state" data-testid="state-error">
          <div className="quiz-result-state-icon" aria-hidden="true">!</div>
          <h1>Үр дүнг ачаалж чадсангүй</h1>
          <p>Өгөгдлийг уншихад алдаа гарлаа. Дахин оролдоно уу.</p>
          <button className="qr-button qr-button-primary" onClick={loadResult}>Дахин оролдох</button>
        </section>
      </main>
    );
  }

  if (!attempt) {
    return (
      <main className="quiz-result-page" data-testid="page-quiz-result">
        <header className="practice-topbar">
          <Link className="practice-brand" to="/dashboard"><span className="practice-brand-mark">S</span>StudyQuest</Link>
          <nav className="practice-nav" aria-label="Үндсэн цэс"><Link to="/dashboard">Миний өрөө</Link><Link className="is-active" to="/practice">Дадлага</Link><Link to="/leaderboard">Чансаа</Link></nav>
          <Link className="practice-back-link" to="/practice">← Дадлага</Link>
        </header>
        <section className="quiz-result-state" data-testid="state-empty">
          <div className="quiz-result-state-icon" aria-hidden="true">✦</div>
          <h1>Дадлагын үр дүн алга</h1>
          <p>Одоогоор дуусгасан дадлага байхгүй байна. Эхний нэгжээ сонгож мэдлэгээ сорьж үзээрэй.</p>
          <button className="qr-button qr-button-primary" onClick={() => navigate("/practice")}>Дадлага эхлэх</button>
        </section>
      </main>
    );
  }

  const correctCount = Number(attempt.correctCount) || 0;
  const totalCount = Number(attempt.totalCount) || 0;
  const scorePercent = Number(attempt.scorePercent) || 0;
  const xpEarned = Number(attempt.xpEarned) || 0;
  const weakTopics = Array.isArray(attempt.weakTopics) ? attempt.weakTopics : [];
  const unitId = attempt.unitId || unit?.id;
  const courseId = unit?.courseId || course?.id;

  return (
    <main className="quiz-result-page" data-testid="page-quiz-result">
        <header className="practice-topbar">
          <Link className="practice-brand" to="/dashboard"><span className="practice-brand-mark">S</span>StudyQuest</Link>
          <nav className="practice-nav" aria-label="Үндсэн цэс"><Link to="/dashboard">Миний өрөө</Link><Link className="is-active" to="/practice">Дадлага</Link><Link to="/leaderboard">Чансаа</Link></nav>
          <Link className="practice-back-link" to={courseId ? `/practice/${courseId}` : "/practice"}>← Суралцах зам</Link>
      </header>

      <section className="qr-content">
        <div className="qr-eyebrow">ДАДЛАГА · ҮР ДҮН</div>
        <div className="qr-hero">
          <div className="qr-trophy" aria-hidden="true">🏆</div>
          <p className="qr-congratulations">Сайн ажиллалаа!</p>
          <h1>{unit?.title || "Дадлагын үр дүн"}</h1>
          <p className="qr-subtitle">{course?.title || "Суралцах зам"} · Таны хамгийн сүүлийн оролдлого</p>
          <div className="qr-score-ring" style={{ "--score": `${scorePercent}%` }} aria-label={`Оноо ${scorePercent}%`}>
            <div className="qr-score-inner">
              <strong data-testid="result-score">{scorePercent}%</strong>
              <span>ОНОО</span>
            </div>
          </div>
          <div className="qr-stat-row">
            <div className="qr-stat">
              <span className="qr-stat-icon" aria-hidden="true">✓</span>
              <div><strong data-testid="result-correct">{correctCount} / {totalCount} зөв</strong><span>Зөв хариулт</span></div>
            </div>
            <div className="qr-stat">
              <span className="qr-stat-icon qr-xp-icon" aria-hidden="true">⚡</span>
              <div><strong data-testid="result-xp">+{xpEarned} XP</strong><span>Цуглуулсан туршлага</span></div>
            </div>
          </div>
        </div>

        <section className="qr-panel">
          <div className="qr-panel-heading">
            <div><h2>Суралцах ахиц</h2><p>Нэгжийн оноо болон хичээлийн биелэлт</p></div>
            <span className="qr-progress-badge">{courseProgress}%</span>
          </div>
          <div className="qr-progress-row">
            <div className="qr-progress-label"><span>Энэ нэгжийн оноо</span><strong>{scorePercent}%</strong></div>
            <div className="qr-progress-track" role="progressbar" aria-label="Нэгжийн оноо" aria-valuemin={0} aria-valuemax={100} aria-valuenow={scorePercent}>
              <div className="qr-progress-fill qr-unit-fill" style={{ width: `${scorePercent}%` }} />
            </div>
          </div>
          <div className="qr-progress-row">
            <div className="qr-progress-label"><span>Хичээлийн биелэлт</span><strong>{courseProgress}%</strong></div>
            <div className="qr-progress-track" role="progressbar" aria-label="Хичээлийн биелэлт" aria-valuemin={0} aria-valuemax={100} aria-valuenow={courseProgress}>
              <div className="qr-progress-fill" style={{ width: `${courseProgress}%` }} />
            </div>
          </div>
        </section>

        <section className="qr-panel qr-review-panel">
          <div className="qr-panel-heading">
            <div><h2>Дахин давтах сэдвүүд</h2><p>Дараагийн оролдлогоор эдгээр асуултыг анхаараарай.</p></div>
            <span className="qr-review-count">{weakTopics.length}</span>
          </div>
          {weakTopics.length ? (
            <ul className="qr-topic-list">
              {weakTopics.map((topic, index) => (
                <li key={`${topic}-${index}`}><span aria-hidden="true">↻</span><span>{topic}</span></li>
              ))}
            </ul>
          ) : (
            <p className="qr-all-correct"><span aria-hidden="true">✓</span> Алдаатай хариулт алга. Маш сайн!</p>
          )}
        </section>

        <div className="qr-actions">
          <button
            type="button"
            data-testid="result-retry"
            className="qr-button qr-button-primary"
            disabled={!unitId}
            onClick={() => unitId && navigate(`/quiz/${unitId}`)}
          >
            <span aria-hidden="true">↻</span> Дахин оролдох
          </button>
          <button
            type="button"
            data-testid="result-back-path"
            className="qr-button qr-button-secondary"
            onClick={() => navigate(courseId ? `/practice/${courseId}` : "/practice")}
          >
            Замруу буцах
          </button>
          <button
            type="button"
            data-testid="result-back-room"
            className="qr-button qr-button-quiet"
            onClick={() => navigate("/dashboard")}
          >
            Өрөө рүү буцах
          </button>
        </div>
      </section>
    </main>
  );
}

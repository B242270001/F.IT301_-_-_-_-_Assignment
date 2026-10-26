import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { mockCourses } from "./mock";
import "./Practice.css";

export default function PracticeHome({ user }) {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const loadCourses = async () => {
    setLoading(true);
    setError(false);
    try {
      setCourses(await mockCourses.getPracticeCourses());
    } catch (err) {
      console.error("Дадлагын хичээлүүдийг ачааллахад алдаа гарлаа:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCourses();
  }, []);

  return (
    <main className="practice-page practice-home" data-testid="page-practice">
      <header className="practice-topbar">
        <Link className="practice-back-link" to="/dashboard">← Өрөө рүү</Link>
        <Link className="practice-brand" to="/dashboard">StudyQuest</Link>
        <span className="practice-user">{user?.displayName || "Оюутан"}</span>
      </header>
      <section className="practice-heading">
        <div className="practice-eyebrow">ДАДЛАГА</div>
        <h1>Юу сурах вэ?</h1>
        <p>Хичээлээ сонгоод суралцах замаа үргэлжлүүлээрэй.</p>
      </section>

      {loading ? (
        <div className="practice-state" role="status">Хичээлүүдийг ачаалж байна…</div>
      ) : error ? (
        <section className="practice-state practice-state-error" data-testid="state-error">
          <h2>Хичээлүүдийг ачаалж чадсангүй</h2>
          <p>Дахин оролдоно уу.</p>
          <button className="practice-primary-button" onClick={loadCourses}>Дахин оролдох</button>
        </section>
      ) : courses.length === 0 ? (
        <section className="practice-state">
          <h2>Одоогоор хичээл алга</h2>
          <p>Дараа дахин шалгаарай.</p>
        </section>
      ) : (
        <section className="practice-course-grid" aria-label="Дадлагын хичээлүүд">
          {courses.map((course, index) => (
            <article className="practice-course-card" key={course.id}>
              <div className={`practice-course-icon course-icon-${index % 3}`} aria-hidden="true">
                {course.icon === "os" ? "⚙" : course.icon === "db" ? "▦" : "⌘"}
              </div>
              <div className="practice-course-copy">
                <span className="practice-course-meta">{course.totalUnits || 0} нэгж</span>
                <h2>{course.title}</h2>
                <p>{course.description}</p>
              </div>
              <Link className="practice-primary-button" to={`/practice/${course.id}`}>
                Үргэлжлүүлэх <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}

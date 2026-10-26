import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { mockCourses, mockProgress } from "./mock";
import "./Practice.css";

const STATUS_LABELS = {
  COMPLETED: "Дууссан",
  CURRENT: "Одоо суралцаж байна",
  AVAILABLE: "Нээх боломжтой",
  LOCKED: "Түгжээтэй",
};

function statusIcon(status) {
  if (status === "COMPLETED") return "✓";
  if (status === "CURRENT") return "⚡";
  if (status === "LOCKED") return "🔒";
  return "○";
}

export default function Practice({ user }) {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const pathViewportRef = useRef(null);
  const currentNodeRef = useRef(null);
  const [course, setCourse] = useState(null);
  const [units, setUnits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [lockedMessage, setLockedMessage] = useState("");

  const loadPath = async () => {
    setLoading(true);
    setError(false);
    setLockedMessage("");
    try {
      const foundCourse = await mockCourses.getById(courseId);
      if (!foundCourse) {
        setCourse(null);
        setUnits([]);
        setLoading(false);
        return;
      }
      const learningPath = await mockProgress.getLearningPath(user?.id || "U05", courseId);
      setCourse(foundCourse);
      setUnits(learningPath);
    } catch (err) {
      console.error("Суралцах зам ачааллахад алдаа гарлаа:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPath();
    // courseId болон хэрэглэгч өөрчлөгдөхөд замыг дахин уншина.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseId, user?.id]);

  const completedCount = useMemo(
    () => units.filter((unit) => unit.status === "COMPLETED").length,
    [units]
  );
  const progressPercent = units.length
    ? Math.round((completedCount / units.length) * 100)
    : 0;

  useEffect(() => {
    if (loading || !currentNodeRef.current || !pathViewportRef.current) return;
    const viewport = pathViewportRef.current;
    const node = currentNodeRef.current;
    // Зөвхөн замын хайрцгийг scroll хийнэ; scrollIntoView ашиглахгүй тул body хөдөлгөхгүй.
    const left = node.offsetLeft - viewport.clientWidth / 2 + node.clientWidth / 2;
    viewport.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
  }, [loading, units]);

  const sections = useMemo(() => {
    const grouped = [];
    for (const unit of units) {
      const sectionName = unit.section || "Хичээлийн нэгжүүд";
      let section = grouped[grouped.length - 1];
      if (!section || section.name !== sectionName) {
        section = { name: sectionName, units: [] };
        grouped.push(section);
      }
      section.units.push(unit);
    }
    return grouped;
  }, [units]);

  const openUnit = (unit) => {
    if (unit.status === "LOCKED") {
      setLockedMessage("Өмнөх нэгжийг дуусгана уу");
      return;
    }
    setLockedMessage("");
    navigate(`/quiz/${unit.id}`);
  };

  if (loading) {
    return (
      <main className="practice-page" data-testid="page-learning-path">
        <div className="practice-state" role="status">Суралцах замыг ачаалж байна…</div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="practice-page" data-testid="page-learning-path">
        <section className="practice-state practice-state-error" data-testid="state-error">
          <span className="practice-state-icon" aria-hidden="true">!</span>
          <h1>Суралцах замыг ачаалж чадсангүй</h1>
          <p>Сүлжээ эсвэл өгөгдөлтэй холбоотой алдаа гарлаа.</p>
          <button className="practice-primary-button" onClick={loadPath}>Дахин оролдох</button>
          <button className="practice-text-button" onClick={() => navigate("/practice")}>Хичээл сонгох</button>
        </section>
      </main>
    );
  }

  if (!course) {
    return (
      <main className="practice-page" data-testid="page-learning-path">
        <section className="practice-state" data-testid="state-not-found">
          <span className="practice-state-icon" aria-hidden="true">?</span>
          <h1>Хичээл олдсонгүй</h1>
          <p>Энэ холбоос буруу эсвэл хичээл устгагдсан байна.</p>
          <Link className="practice-primary-button" to="/practice">Хичээл сонгох</Link>
        </section>
      </main>
    );
  }

  if (units.length === 0) {
    return (
      <main className="practice-page" data-testid="page-learning-path">
        <header className="practice-topbar">
          <Link className="practice-back-link" to="/practice">← Хичээл сонгох</Link>
          <span className="practice-brand">StudyQuest</span>
        </header>
        <section className="practice-state">
          <span className="practice-state-icon" aria-hidden="true">📚</span>
          <h1>{course.title}</h1>
          <p>Энэ хичээлд нэгж алга</p>
        </section>
      </main>
    );
  }

  return (
    <main className="practice-page" data-testid="page-learning-path">
      <header className="practice-topbar">
        <Link className="practice-back-link" to="/practice">← Хичээл сонгох</Link>
        <Link className="practice-brand" to="/dashboard" aria-label="StudyQuest өрөө">StudyQuest</Link>
        <span className="practice-user">{user?.displayName || "Оюутан"}</span>
      </header>

      <section className="practice-heading">
        <div className="practice-eyebrow">ДАДЛАГА · СУРАЛЦАХ ЗАМ</div>
        <h1>{course.title}</h1>
        <p>{course.description || "Нэгжүүдээ дарааллаар нь судалж, мэдлэгээ бататгаарай."}</p>
        <div className="practice-progress-summary">
          <div className="practice-progress-copy">
            <span>Хичээлийн ахиц</span>
            <strong data-testid="course-progress">{progressPercent}%</strong>
          </div>
          <div className="practice-progress-track" role="progressbar" aria-label="Хичээлийн ахиц" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progressPercent}>
            <div className="practice-progress-fill" style={{ width: `${progressPercent}%` }} />
          </div>
          <span className="practice-progress-caption">{completedCount} / {units.length} нэгж дууссан</span>
        </div>
      </section>

      <section className="practice-path-card" aria-label="Суралцах зам">
        <div className="practice-path-card-head">
          <div>
            <h2>Мэдлэгийн аялал</h2>
            <p>Дууссан нэгжүүдээ давтаж, дараагийн түвшнээ нээгээрэй.</p>
          </div>
          <span className="practice-unit-count">{units.length} нэгж</span>
        </div>

        {lockedMessage && (
          <p className="practice-locked-notice" role="status" data-testid="locked-tooltip">
            <span aria-hidden="true">🔒</span> {lockedMessage}
            <button type="button" aria-label="Мэдэгдлийг хаах" onClick={() => setLockedMessage("")}>×</button>
          </p>
        )}

        <div className="practice-path-viewport" ref={pathViewportRef}>
          <div className="practice-path-track">
            {sections.map((section, sectionIndex) => (
              <div className="practice-path-section" key={`${section.name}-${sectionIndex}`}>
                <h3 className="practice-section-title">{section.name}</h3>
                <div className="practice-section-nodes">
                  {section.units.map((unit) => (
                    <button
                      type="button"
                      key={unit.id}
                      ref={unit.status === "CURRENT" ? currentNodeRef : null}
                      className={`path-node path-node-${unit.status.toLowerCase()}`}
                      data-testid="path-node"
                      data-status={unit.status}
                      aria-label={`${unit.title} — ${STATUS_LABELS[unit.status] || unit.status}`}
                      aria-disabled={unit.status === "LOCKED"}
                      title={unit.status === "LOCKED" ? "Өмнөх нэгжийг дуусгана уу" : `${unit.title} нээх`}
                      onClick={() => openUnit(unit)}
                    >
                      <span className="path-node-marker" aria-hidden="true">{statusIcon(unit.status)}</span>
                      <span className="path-node-title">{unit.title}</span>
                      <span className="path-node-status">{STATUS_LABELS[unit.status] || unit.status}</span>
                    </button>
                  ))}
                </div>
                {sectionIndex < sections.length - 1 && (
                  <div className="practice-section-connector" aria-hidden="true">⟶</div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="practice-path-legend" aria-label="Төлөвийн тайлбар">
          <span><i className="legend-dot legend-completed">✓</i> Дууссан</span>
          <span><i className="legend-dot legend-current">⚡</i> Одоо</span>
          <span><i className="legend-dot legend-available">○</i> Боломжтой</span>
          <span><i className="legend-dot legend-locked">🔒</i> Түгжээтэй</span>
        </div>
      </section>
    </main>
  );
}

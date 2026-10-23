import { useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * TASK-04 — Д. Баттөмөр
 * /quiz/result — Дадлага · Хичээлийн үр дүн
 *
 * Wireframe #6: Оноо, зөв хариултын тоо, XP, ахицын bar,
 * дахин давах сэдвүүд, retry/back товчнууд.
 */
export default function QuizResult() {
  const navigate = useNavigate();

  // TODO: latestAttempt-ийг mock store-оос авах
  const [attempt] = useState(null);

  /* ── Хоосон: өмнө quiz өгөөгүй ── */
  if (!attempt) {
    return (
      <div data-testid="page-quiz-result">
        <div data-testid="state-empty">
          <p>Дадлагын үр дүн алга</p>
          <button onClick={() => navigate("/practice")}>Дадлага эхлэх</button>
        </div>
      </div>
    );
  }

  /* ── Үндсэн агуулга (TODO) ── */
  return (
    <div data-testid="page-quiz-result">
      {/* result-score */}
      <div data-testid="result-score">{/* TODO: % оноо */}</div>

      {/* result-correct */}
      <div data-testid="result-correct">{/* TODO: "3 / 4 зөв" */}</div>

      {/* result-xp */}
      <div data-testid="result-xp">{/* TODO: "+30 XP" */}</div>

      {/* Ахицын bar (нэгж, хичээлийн биелэлт %) */}
      {/* TODO: progress bar */}

      {/* Дахин давах сэдвүүдийн жагсаалт */}
      {/* TODO: review topics list */}

      {/* Товчнууд */}
      <button data-testid="result-retry" onClick={() => navigate(-1)}>
        Дахин оролдох
      </button>
      <button data-testid="result-back-path" onClick={() => navigate("/practice")}>
        Замруу буцах
      </button>
      <button data-testid="result-back-room" onClick={() => navigate("/dashboard")}>
        Өрөө рүү буцах
      </button>
    </div>
  );
}

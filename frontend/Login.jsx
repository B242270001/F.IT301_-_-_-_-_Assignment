import React, { useState } from "react";
import { mockAuth } from "./mock";
import virtualRoomNight from "./assets/virtualRoomNight.jpg";
import "./Login.css";

export default function Login({ onLogin }) {
  const [studentCode, setStudentCode] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!studentCode || !password) {
      setError("Оюутны код болон нууц үгээ оруулна уу!");
      return;
    }

    setLoading(true);
    try {
      const user = await mockAuth.login(studentCode, password);
      if (!user) {
        setError("Оюутны код эсвэл нууц үг буруу байна. Дахин оролдоно уу.");
        setLoading(false);
        return;
      }
      // Амжилттай нэвтэрсэн — user объектыг App-руу дамжуулна
      onLogin(user);
    } catch (err) {
      setError("Сүлжээний алдаа гарлаа. Дахин оролдоно уу.");
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      {/* Зүүн талын хэсэг */}
      <div className="login-left-section">
        <div className="brand-header">
          <span className="brand-logo-icon">✨</span>
          <span className="brand-title">StudyQuest</span>
        </div>

        <div className="hero-text-container">
          <span className="subtitle">ЧИНИЙ МЭДЛЭГИЙН АДАЛ ЯВДАЛ</span>
          <h1 className="hero-title">Шинэ өдөр. Шинэ боломж.</h1>
          <p className="hero-desc">
            Тавтай амраарай. Дараагийн аялал чинь эндээс эхэлнэ.
          </p>
        </div>

        <div className="room-preview-box">
          <img
            src={virtualRoomNight}
            className="room-bg-img"
            alt="Virtual Room Night"
          />
        </div>

        <div className="footer-quote">
          <span>Өнөөдрийн жижиг алхам — маргаашийн том ахиц.</span>
        </div>
      </div>

      {/* Баруун талын хэсэг */}
      <div className="login-right-section">
        <div className="top-indicator">
          <span>🎓 ОЮУТНЫ СУРАЛЦАХ ОРОН ЗАЙ</span>
        </div>

        <div className="form-wrapper">
          <div className="welcome-header">
            <h2>Тавтай морил!</h2>
            <p>Өрөөндөө орж, мэдлэгийн аяллаа үргэлжлүүлээрэй.</p>
          </div>

          {error && (
            <div className="login-error" style={{ color: "#ef4444", background: "#fef2f2", padding: "8px 12px", borderRadius: "8px", marginBottom: "12px", fontSize: "14px" }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="login-form">
            <div className="input-group">
              <label>Оюутны код (username)</label>
              <div className="input-field-wrapper">
                <input
                  type="text"
                  placeholder="жишээ: temuulen, bagsh"
                  value={studentCode}
                  onChange={(e) => setStudentCode(e.target.value)}
                />
              </div>
            </div>

            <div className="input-group">
              <label>Нууц үг</label>
              <div className="input-field-wrapper">
                <input
                  type="password"
                  placeholder="••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="forgot-password">
              <a href="#forgot">Нууц үгээ мартсан уу?</a>
            </div>

            <button type="submit" className="login-btn" disabled={loading}>
              <span>{loading ? "Нэвтэрж байна..." : "Сэрэх"}</span>
              <span>🚀</span>
            </button>
          </form>

          <div className="form-footer-text">
            <span style={{ fontSize: "12px", color: "#9ca3af" }}>
              Demo: оюутан — <strong>temuulen / student123</strong> · багш — <strong>bagsh / teacher123</strong>
            </span>
          </div>
        </div>

        <div className="bottom-links">
          <span>© 2026 StudyQuest</span>
          <a href="#help">Тусламж</a>
        </div>
      </div>
    </div>
  );
}

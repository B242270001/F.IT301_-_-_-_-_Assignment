import React, { useState } from "react";
import virtualRoomNight from "./assets/virtualRoomNight.jpg";
import "./Login.css";

export default function Login({ onLogin }) {
  const [studentCode, setStudentCode] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!studentCode || !password) {
      alert("Оюутны код болон нууц үгээ оруулна уу!");
      return;
    }
    // Нэвтрэх функц дуудах
    onLogin();
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

          <form onSubmit={handleSubmit} className="login-form">
            <div className="input-group">
              <label>Оюутны код</label>
              <div className="input-field-wrapper">
                <input
                  type="text"
                  placeholder="BXXXXXXXXX"
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

            <button type="submit" className="login-btn">
              <span>Сэрэх</span>
              <span>🚀</span>
            </button>
          </form>

          <div className="form-footer-text">
            <span>Сургуулийнхаа эрхээр нэвтэрнэ үү.</span>
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
import React from "react";
import "./Dashboard.css";
import virtualRoomDay from "./assets/virtualRoomDay.jpg";

export default function Dashboard({ onLogout }) {
  const roomImage = virtualRoomDay;

  return (
    <div className="dashboard-container">
      <div className="dashboard-wrapper">
        {/* Топ цэс (Navbar) */}
        <div className="navbar">
          <div className="nav-brand">
            <img
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/h3krnzrs_expires_30_days.png"
              className="brand-logo"
              alt="Logo"
            />
            <span className="brand-name">StudyQuest</span>
          </div>

          <div className="navbar">
            <div className="nav-brand">
              <img
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/h3krnzrs_expires_30_days.png"
                className="brand-logo"
                alt="Logo"
              />
              <span className="brand-name">StudyQuest</span>
            </div>

            {/* Цэсний товчлууруудыг хооронд нь ойртуулах контейнер */}
            <div className="nav-menu">
              {/* Идэвхтэй хэсэг (Home) */}
              <button
                className="room-btn active"
                onClick={() => alert("Миний өрөө дээр дарлаа!")}
              >
                <img
                  src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/ym780a9s_expires_30_days.png"
                  className="room-icon"
                  alt="Room"
                />
                <span>Миний өрөө</span>
              </button>

              {/* Идэвхгүй хэсгүүд */}
              <button
                className="room-btn inactive"
                onClick={() => alert("Дадлага дээр дарлаа!")}
              >
                <span>Дадлага</span>
              </button>
              <button
                className="room-btn inactive"
                onClick={() => alert("Судлах дээр дарлаа!")}
              >
                <span>Судлах</span>
              </button>
              <button
                className="room-btn inactive"
                onClick={() => alert("Чансаа дээр дарлаа!")}
              >
                <span>Чансаа</span>
              </button>
            </div>

            <div className="nav-stats">
              <div className="stat-item">
                <img
                  src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/ndp6yrkn_expires_30_days.png"
                  alt="XP"
                />
                <span className="stat-text">2,480 XP</span>
              </div>
              <div className="stat-item">
                <img
                  src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/d12a4c24_expires_30_days.png"
                  alt="Streak"
                />
                <span className="stat-text">7 өдөр</span>
              </div>
              <button
                className="user-avatar-btn"
                onClick={() => alert("Профайл!")}
              >
                <span>Т</span>
              </button>
              <span className="username">Тэмүүлэн</span>
            </div>
          </div>

          <div className="nav-stats">
            <div className="stat-item">
              <img
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/ndp6yrkn_expires_30_days.png"
                alt="XP"
              />
              <span className="stat-text">2,480 XP</span>
            </div>
            <div className="stat-item">
              <img
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/d12a4c24_expires_30_days.png"
                alt="Streak"
              />
              <span className="stat-text">7 өдөр</span>
            </div>
            <button
              className="user-avatar-btn"
              onClick={() => alert("Профайл!")}
            >
              <span>Т</span>
            </button>
            <span className="username">Тэмүүлэн</span>
          </div>
        </div>

        {/* Өрөөний интерактив хэсэг */}
        <div className="room-preview-container">
          <div className="room-preview-box">
            {/* Топ Overlay */}
            <div className="room-top-overlay">
              <div className="welcome-card-overlay">
                <h1>Өглөөний мэнд, Тэмүүлэн!</h1>
                <p>Мэдлэгийн шинэ өдөр эхэллээ. Өнөөдөр юуг нээх вэ?</p>
              </div>

              <div className="streak-card-overlay">
                <img
                  src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/epwsr4vp_expires_30_days.png"
                  alt="Streak badge"
                />
                <span>7 өдрийн цуврал • Гайхалтай!</span>
              </div>
            </div>

            {/* Үндсэн зураг */}
            <img src={roomImage} className="room-bg-img" alt="Virtual Room" />

            {/* Computer Setup */}
            <button
              onClick={() => alert("Компьютер дээр дарлаа! 💻")}
              className="room-interactive-btn computer"
              title="Computer Setup"
            />

            {/* Bookshelf */}
            <button
              onClick={() => alert("Номын тавиур дээр дарлаа! 📚")}
              className="room-interactive-btn bookshelf"
              title="Bookshelf"
            />

            {/* Bed (Дарахад Login цонх руу буцна) */}
            <button
              onClick={onLogout}
              className="room-interactive-btn bed"
              title="Унтах (Гарах)"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

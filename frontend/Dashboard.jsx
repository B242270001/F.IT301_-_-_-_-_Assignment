import React from "react";
import Navbar from "./Navbar";
import "./Dashboard.css";
import virtualRoomDay from "./assets/virtualRoomDay.jpg";

export default function Dashboard({ user, onLogout }) {
  const roomImage = virtualRoomDay;

  // user объектоос мэдээлэл авна (mock-оос ирсэн)
  const displayName = user?.displayName || "Хэрэглэгч";
  const firstName = displayName.split(" ").pop(); // "Б. Тэмүүлэн" → "Тэмүүлэн"
  const streak = user?.streakDays || 0;

  // Цагаас хамаарч мэндчилгээ
  const hour = new Date().getHours();
  const greeting =
    hour < 12
      ? "Өглөөний мэнд"
      : hour < 18
      ? "Өдрийн мэнд"
      : "Оройн мэнд";

  return (
    <div className="dashboard-container">
      <div className="dashboard-wrapper">
        {/* Топ цэс (Navbar) */}
        <Navbar user={user} />

        {/* Өрөөний интерактив хэсэг */}
        <div className="room-preview-container">
          <div className="room-preview-box">
            {/* Топ Overlay */}
            <div className="room-top-overlay">
              <div className="welcome-card-overlay">
                <h1>{greeting}, {firstName}!</h1>
                <p>Мэдлэгийн шинэ өдөр эхэллээ. Өнөөдөр юуг нээх вэ?</p>
              </div>

              <div className="streak-card-overlay">
                <img
                  src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/aN0ksSNPo6/epwsr4vp_expires_30_days.png"
                  alt="Streak badge"
                />
                <span>{streak} өдрийн цуврал • Гайхалтай!</span>
              </div>
            </div>

            {/* Үндсэн зураг */}
            <img src={roomImage} className="room-bg-img" alt="Virtual Room" />

            {/* Computer Setup */}
            <button
              onClick={() => (window.location.href = "/practice")}
              className="room-interactive-btn computer"
              title="Дадлага хийх 💻"
            />

            {/* Bookshelf */}
            <button
              onClick={() => (window.location.href = "/explore")}
              className="room-interactive-btn bookshelf"
              title="Судлах 📚"
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

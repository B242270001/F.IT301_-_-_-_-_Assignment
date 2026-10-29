import { useState, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { mockAuth } from "./mock";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Leaderboard from "./Leaderboard";
import GlobalUIStates from "./GlobalUIStates";
import QuizResult from "./QuizResult";
import TeacherRoom from "./TeacherRoom";
import TeacherCourseForm from "./TeacherCourseForm";
import LectureDetail from "./LectureDetail";

// Role бүрийн нүүр хуудсыг санахгүй — нэвтэрсэн хэрэглэгчийн role өөрөө шийднэ
const HOME_PAGES = ["/dashboard", "/teacher"];

// Нэвтрээгүй бол /login руу илгээж, очих гэсэн хаягийг state-д хадгална
function RequireLogin() {
  const location = useLocation();
  return <Navigate to="/login" replace state={{ from: `${location.pathname}${location.search}` }} />;
}

// Нэвтэрсний дараа хадгалсан хаяг руу, байхгүй бол role-ийн нүүр хуудас руу буцаана
function AfterLogin({ home }) {
  const from = useLocation().state?.from;
  return <Navigate to={from && !HOME_PAGES.includes(from) ? from : home} replace />;
}

export default function App() {
  const [user, setUser] = useState(() => mockAuth.getCurrentUser());

  // Нэвтрэх функц (Login хуудаснаас дуудагдана)
  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
  };

  // Гарах (Ор дээр дарах) функц
  const handleLogout = () => {
    mockAuth.logout();
    setUser(null);
  };

  const isLoggedIn = !!user;
  const isTeacher = user?.role === "TEACHER";

  /**
   * Login-ы дараа role-ээр чиглүүлэх:
   *   TEACHER  → /teacher
   *   STUDENT  → /dashboard
   */
  const afterLoginRedirect = isTeacher ? "/teacher" : "/dashboard";

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <AfterLogin home={afterLoginRedirect} />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/dashboard"
          element={
            isLoggedIn ? (
              <Dashboard user={user} onLogout={handleLogout} />
            ) : (
              <RequireLogin />
            )
          }
        />
        <Route
          path="/leaderboard"
          element={
            isLoggedIn ? (
              <Leaderboard user={user} />
            ) : (
              <RequireLogin />
            )
          }
        />
        <Route path="/ui-states" element={<GlobalUIStates />} />
        {/* TASK-06: Б. Цогжавхлан — лекцийн дэлгэрэнгүй */}
        <Route
          path="/explore/lecture/:id"
          element={
            isLoggedIn ? (
              <LectureDetail user={user} />
            ) : (
              <RequireLogin />
            )
          }
        />
        {/* TASK-04: Д. Баттөмөр */}
        <Route
          path="/quiz/result"
          element={
            isLoggedIn ? (
              <QuizResult user={user} />
            ) : (
              <RequireLogin />
            )
          }
        />
        <Route
          path="/teacher"
          element={
            isLoggedIn && isTeacher ? (
              <TeacherRoom user={user} onLogout={handleLogout} />
            ) : isLoggedIn ? (
              <Navigate to="/dashboard" />
            ) : (
              <RequireLogin />
            )
          }
        />
        <Route
          path="/teacher/courses/new"
          element={
            isLoggedIn && isTeacher ? (
              <TeacherCourseForm user={user} />
            ) : isLoggedIn ? (
              <Navigate to="/dashboard" />
            ) : (
              <RequireLogin />
            )
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

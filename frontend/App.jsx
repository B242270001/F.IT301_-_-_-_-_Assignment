import { useState, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { mockAuth } from "./mock";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Leaderboard from "./Leaderboard";
import GlobalUIStates from "./GlobalUIStates";
import QuizResult from "./QuizResult";
import TeacherRoom from "./TeacherRoom";
import TeacherCourseForm from "./TeacherCourseForm";
import LectureDetail from "./LectureDetail";

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
              <Navigate to={afterLoginRedirect} />
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
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/leaderboard"
          element={
            isLoggedIn ? (
              <Leaderboard user={user} />
            ) : (
              <Navigate to="/login" />
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
              <Navigate to="/login" />
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
              <Navigate to="/login" />
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
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/teacher/courses/new"
          element={
            isLoggedIn && isTeacher ? (
              <TeacherCourseForm user={user} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

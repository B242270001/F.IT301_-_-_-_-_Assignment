import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { mockAuth } from "./mock";

import Login from "./Login";
import Dashboard from "./Dashboard";
import Leaderboard from "./Leaderboard";
import GlobalUIStates from "./GlobalUIStates";
import QuizResult from "./QuizResult";
import QuizQuestion from "./QuizQuestion";
import TeacherRoom from "./TeacherRoom";
import TeacherCourseForm from "./TeacherCourseForm";

// TASK-03: Student practice pages
import Practice from "./Practice";
import PracticeHome from "./PracticeHome";

export default function App() {
  const [user, setUser] = useState(() => mockAuth.getCurrentUser());

  // Login
  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
  };

  // Logout
  const handleLogout = () => {
    mockAuth.logout();
    setUser(null);
  };

  const isLoggedIn = !!user;
  const isTeacher = user?.role === "TEACHER";
  const isStudent = user?.role === "STUDENT";

  // Redirect after login according to role
  const afterLoginRedirect = isTeacher ? "/teacher" : "/dashboard";

  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to={afterLoginRedirect} replace />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />

        {/* Student dashboard */}
        <Route
          path="/dashboard"
          element={
            isLoggedIn ? (
              <Dashboard user={user} onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* Leaderboard */}
        <Route
          path="/leaderboard"
          element={
            isLoggedIn ? (
              <Leaderboard user={user} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* Global UI states */}
        <Route
          path="/ui-states"
          element={<GlobalUIStates />}
        />

        {/* TASK-03: Practice home */}
        <Route
          path="/practice"
          element={
            isLoggedIn && isStudent ? (
              <PracticeHome user={user} />
            ) : isLoggedIn ? (
              <Navigate to={afterLoginRedirect} replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* TASK-03: Learning path for a course */}
        <Route
          path="/practice/:courseId"
          element={
            isLoggedIn && isStudent ? (
              <Practice user={user} />
            ) : isLoggedIn ? (
              <Navigate to={afterLoginRedirect} replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* TASK-04: D. Battumur - Quiz result */}
        <Route
          path="/quiz/:unitId"
          element={
            isLoggedIn && isStudent ? (
              <QuizQuestion user={user} />
            ) : isLoggedIn ? (
              <Navigate to={afterLoginRedirect} replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/quiz/result"
          element={
            isLoggedIn && isStudent ? (
              <QuizResult user={user} />
            ) : isLoggedIn ? (
              <Navigate to={afterLoginRedirect} replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* Teacher room */}
        <Route
          path="/teacher"
          element={
            isLoggedIn && isTeacher ? (
              <TeacherRoom
                user={user}
                onLogout={handleLogout}
              />
            ) : isLoggedIn ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* Create teacher course */}
        <Route
          path="/teacher/courses/new"
          element={
            isLoggedIn && isTeacher ? (
              <TeacherCourseForm user={user} />
            ) : isLoggedIn ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* Unknown route */}
        <Route
          path="*"
          element={
            <Navigate
              to={isLoggedIn ? afterLoginRedirect : "/login"}
              replace
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

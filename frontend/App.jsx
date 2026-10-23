import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Leaderboard from "./Leaderboard";
import GlobalUIStates from "./GlobalUIStates";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Нэвтрэх функц
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Гарах (Ор дээр дарах) функц
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />} />
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard onLogout={handleLogout} /> : <Navigate to="/login" />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/ui-states" element={<GlobalUIStates />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}
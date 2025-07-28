import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "@pages/HomePage/HomePage";
import AdminPage from "@pages/AdminPage/AdminPage";

const AppProviders: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
};

export default AppProviders;

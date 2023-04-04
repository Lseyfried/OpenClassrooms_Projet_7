import React from "react";
import "./styles/index.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import LogementCard from "./pages/LogementCard";
import APropos from "./pages/APropos";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/Home.css";

export default function Router() {
  return (
    <div className="body">
      <Header />
      <Routes>
        <Route path="/OpenClassrooms_Projet_7" element={<Home />} />
        <Route path="/A-Propos" element={<APropos />} />
        <Route path="/logement/:id" element={<LogementCard />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

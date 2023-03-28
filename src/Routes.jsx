import React from "react";
import "./styles/index.scss";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import LogementCard from "./pages/LogementCard";
import APropos from "./pages/APropos";
import ErrorPage from "./pages/ErrorPage";
// import { useState } from "react";
export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/A-Propos" element={<APropos />} />
        <Route path="/products/:id" element={<LogementCard />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

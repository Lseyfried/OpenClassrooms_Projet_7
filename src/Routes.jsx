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
import { useParams } from "react-router-dom";
import logementList from "./data/logements.json";
export default function Router() {
  const { id } = useParams();
  const productID = logementList.find((logement) => logement.id === id);
  return (
    <div className="body">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/A-Propos" element={<APropos />} />
        <Route
          path="/logement/:id"
          element={<LogementCard logementId={productID} />}
        />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

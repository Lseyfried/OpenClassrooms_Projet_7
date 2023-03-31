import React from "react";
import "../styles/errorPage.scss";
import "../styles/Home.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
export default function ErrorPage() {
  return (
    <div className="body">
      <Header />
      {/* répétition à sortir du routeur */}
      <article className="banner-errorPage">
        <h1 className="errorPage-404">404</h1>
        <h2 className="errorPage-title">
          Oups! La page que vous demandez n'existe pas.
        </h2>
        <Link to="/">
          <h2 className="backToHome">Retournez sur la page d'accueil</h2>
        </Link>
      </article>
      <Footer />
    </div>
  );
}

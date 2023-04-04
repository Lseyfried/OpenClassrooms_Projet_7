import React from "react";
import "../styles/errorPage.css";
import "../styles/Home.css";

import { Link } from "react-router-dom";
export default function ErrorPage() {
  return (
    <article className="banner-errorPage">
      <h1 className="errorPage-404">404</h1>
      <h2 className="errorPage-title">
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <Link to="/" className="linkError">
        <h2 className="backToHome">Retournez sur la page d'accueil</h2>
      </Link>
    </article>
  );
}

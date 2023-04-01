import "../styles/Header.scss";
import LOGO from "../assets/LOGO.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img
          src={LOGO}
          sizes="85px,200px"
          alt="Logo de Kasa"
          className="header logo-header"
        />
      </Link>
      <nav className="nav">
        <ul>
          <li>
            <Link className="linkHeader" to="/">
              Accueil
            </Link>
          </li>
          <li>
            <Link className="linkHeader" to="/A-Propos">
              {" "}
              A Propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

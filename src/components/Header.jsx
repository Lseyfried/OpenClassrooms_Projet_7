import "../styles/Header.css";
import LOGO from "../assets/LOGO.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={LOGO} alt="Logo de Kasa" className="logo-header" />
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

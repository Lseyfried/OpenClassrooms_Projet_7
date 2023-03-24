import { Link } from "react-router-dom";
import "../styles/Header.scss";
import LOGO from "../assets/LOGO.svg";

function Header() {
  return (
    <header className="header">
      <img src={LOGO} alt="Logo de Kasa" />
      <nav className="nav">
        <Link to="/">Accueil</Link>
        <Link to="/A-Propos">A Propos</Link>
      </nav>
    </header>
  );
}

export default Header;

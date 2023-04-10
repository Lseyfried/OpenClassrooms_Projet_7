import "../styles/Footer.css";
import LOGO from "../assets/LOGOWhite.svg";
export default function Footer() {
  return (
    <footer className="footer">
      <img src={LOGO} alt="Logo" className="footer_logo" />
      <h2 className="footer_title">&copy; 2020 Kasa. All rights reserved</h2>
    </footer>
  );
}

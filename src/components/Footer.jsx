import "../styles/Footer.scss";
import LOGO from "../assets/LOGOWhite.svg";
export default function Footer() {
  return (
    <footer>
      <img src={LOGO} alt="Logo" className="logo_footer" />
      <h2 className="footer_title">&copy; 2020 Kasa. All rights reserved</h2>
    </footer>
  );
}

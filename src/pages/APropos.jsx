import "../styles/APropos.scss";
import "../styles/Header.scss";
import "../styles/Home.scss";
import Header from "../components/Header";
import "../styles/Banner.scss";
import { Link } from "react-router-dom";
import imageBanner from "../assets/background-Apropos.png";
import Footer from "../components/Footer";
import { accordionData } from "../components/accordionData";
import AccordionApropos from "../components/AccordionApropos";

export default function APropos() {
  return (
    <div className="body">
      <Header />
      <div className="img-Banner">
        <Link to="/">
          <img
            width="100%"
            height="260px"
            src={imageBanner}
            alt="Banniere A Propos"
            className="Bg-Apropos"
          />
        </Link>
      </div>

      {accordionData.map(({ title, content, index }) => (
        <AccordionApropos title={title} content={content} key={index} />
      ))}

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

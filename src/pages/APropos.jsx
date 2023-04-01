import "../styles/APropos.scss";
import "../styles/Header.scss";
import "../styles/Home.scss";

import "../styles/Banner.scss";
import { Link } from "react-router-dom";
import imageBanner from "../assets/background-Apropos.png";

import accordionData from "../data/accordionData";
import Collapse from "../components/Collapse";

export default function APropos() {
  return (
    <article>
      <div className="img-BannerApropos">
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
        <Collapse title={title} content={content} key={index} />
      ))}
    </article>
  );
}

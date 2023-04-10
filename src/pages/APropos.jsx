import "../styles/APropos.css";
import "../styles/Header.css";
import "../styles/Home.css";

import "../styles/Banner.css";
import { Link } from "react-router-dom";
import imageBanner from "../assets/background-Apropos.png";
import { useEffect } from "react";
import accordionData from "../data/accordionData";
import Collapse from "../components/Collapse";

export default function APropos() {
  useEffect(() => {
    const fromProposUnList = document.querySelectorAll(
      ".Propos_unList, .ListesdeAPropos"
    );
    fromProposUnList.forEach((element) => {
      element.classList.add("ListesdeAPropos");
    });

    return () => {
      fromProposUnList.forEach((element) => {
        element.classList.remove("ListesdeAPropos");
      });
    };
  }, []);
  return (
    <article className="aproposArticle">
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
      <article className="accordionMenuList">
        {accordionData.map(({ title, content, index }) => (
          <Collapse title={title} content={content} key={index} />
        ))}
      </article>
    </article>
  );
}

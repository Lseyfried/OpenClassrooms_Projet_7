import React, { useState } from "react";
import "../styles/APropos.scss";
import Arrow from "../assets/Arrow.png";
import ArrowUp from "../assets/ArrowUp.png";

export default function AccordionApropos({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <article className="Propos_unList marge-article pad-article rounded">
      <button className="accordeonMenu" onClick={() => setIsOpen(!isOpen)}>
        <div className="Propos_title">{title}</div>
        <div className="arrowAccordeon">
          {isOpen ? (
            <img src={ArrowUp} alt="flechebas" />
          ) : (
            <img src={Arrow} alt="flechehaut" />
          )}
        </div>
      </button>
      {isOpen && <p className="content">{content}</p>}
    </article>
  );
}

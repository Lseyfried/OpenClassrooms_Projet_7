import React, { useState } from "react";
import "../styles/APropos.css";
import Arrow from "../assets/Arrow.png";
import ArrowUp from "../assets/ArrowUp.png";

export default function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="Propos_unList">
      <button className="accordeonMenu" onClick={() => setIsOpen(!isOpen)}>
        <div className="Propos_title ">{title}</div>
        <div className="arrowAccordeon">
          {isOpen ? (
            <img src={ArrowUp} alt="flechebas" />
          ) : (
            <img src={Arrow} alt="flechehaut" />
          )}
        </div>
      </button>
      {isOpen && <div className="content">{content}</div>}
    </article>
  );
}

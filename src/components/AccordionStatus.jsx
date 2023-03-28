import "../styles/Status.scss";
import { useState } from "react";
import Arrow from "../assets/Arrow.png";
import ArrowUp from "../assets/ArrowUp.png";

export default function AccordionStatus({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <article className="listStatus">
      <button
        className="listStatus_descriptionStatus"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>{title}</div>
        <div className="arrowAccordeon">
          {isOpen ? (
            <img src={ArrowUp} alt="fleche" />
          ) : (
            <img src={Arrow} alt="flechehaut" />
          )}
        </div>
      </button>
      {isOpen && <p className="content">{content}</p>}
    </article>
  );
}

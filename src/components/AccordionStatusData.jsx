import "../styles/Status.scss";
import { useState } from "react";

export default function AccordionStatusData({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <article className="listStatus">
      <button className="descriptionStatus" onClick={() => setIsOpen(!isOpen)}>
        <div className="Propos_title">{title}</div>
        <div className="arrowAccordeon">{isOpen ? "-" : "+"}</div>
      </button>
      {isOpen && <p className="content">{content}</p>}
    </article>
  );
}

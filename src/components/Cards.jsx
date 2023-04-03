import logementList from "../data/logements.json";
import "../styles/Cards.css";
import "../styles/Banner.css";
import { Link } from "react-router-dom";

export default function Cards() {
  return (
    <article className="homePage">
      {logementList.map((logement) => (
        <Link
          key={logement.id}
          className="LinkCard"
          to={`/logement/${logement.id}`}
        >
          <section className="section">
            <img
              src={logement.pictures[0]}
              alt="couverture"
              className="section-img"
            />
            <h2 className="log-title">{logement.title}</h2>
          </section>
        </Link>
      ))}
    </article>
  );
}

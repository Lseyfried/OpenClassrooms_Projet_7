import logementList from "../data/logements.json";
import "../styles/Card.scss";
import "../styles/Banner.scss";
import { Link } from "react-router-dom";
console.log(logementList);
// Cards plutôt
export default function Card() {
  return (
    <article className="homePage">
      {logementList.map((logement) => (
        <Link
          key={logement.id}
          className="LinkCard"
          to={`/products/${logement.id}`}
        >
          <section className="homePage section">
            <img
              width="340px" //revoir les dimensions
              height="500px"
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

import logementList from "../data/logements.json";
import "../styles/BookingList.scss";
import "../styles/Bg-image.scss";

console.log(logementList);
export default function BookingList() {
  return (
    <article>
      {logementList.map((logement) => (
        <section key={logement.id} className="section">
          <img
            width="340px"
            height="500px"
            src={logement.pictures[0]}
            alt="couverture"
            className="section-img"
          />
          <div className="log-title">{logement.title}</div>
        </section>
      ))}
    </article>
  );
}

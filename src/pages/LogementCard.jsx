import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import logementList from "../data/logements.json";
import "../styles/LogementCard.scss";
import Stars from "../components/Stars";
import Status from "../components/Status";
import DataStatus from "../components/DataStatus";
import Caroussel from "../components/Caroussel";

export default function LogementCard() {
  const { id } = useParams();
  const logementProduct = logementList.find((logement) => logement.id === id);
  const tags = logementProduct.tags;
  return (
    <div className="body">
      <header>
        <Header />
      </header>

      <img
        width="100%"
        height="500px"
        src={logementProduct.cover}
        alt="couverture"
      />
      <article className="enTete">
        <article className="articleProduct">
          <h1 className="titleProduct">{logementProduct.title}</h1>
          <h2 className="locationtitle">{logementProduct.location}</h2>

          <ul className="ListProduct">
            {tags.map((tag, index) => (
              <li key={index} className="tagsProduct">
                {tag}
              </li>
            ))}
          </ul>
        </article>
        <article className="ownerProduct">
          <Stars />
          <article className="flex-row">
            <h2 className="nameOwner"> {logementProduct.host.name}</h2>

            <img
              src={logementProduct.host.picture}
              width="100px"
              height="100px"
              alt="profil"
              className="img-logement"
            />
          </article>
        </article>
      </article>

      <article className="divised">
        <DataStatus />
      </article>
      <article className="divised">
        <Status />
      </article>
      <article className="carroussel">
        <Caroussel />
      </article>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

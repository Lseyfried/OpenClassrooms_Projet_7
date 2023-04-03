import { useEffect, useState } from "react";
import stars from "../assets/Star.svg";
import whiteStar from "../assets/whiteStar.svg";
import { useNavigate, useParams } from "react-router-dom";
import logementList from "../data/logements.json";
import "../styles/LogementCard.css";
import Stars from "../components/Stars";
import DataStatus from "../components/DataStatus";
import Caroussel from "../components/Caroussel";

export default function LogementCard({ logementId }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [logementProduct, setLogementProduct] = useState(null);
  const product = logementList.find((logement) => logement.id === id);
  useEffect(() => {
    const product = logementList.find((logement) => logement.id === id);
    if (product) {
      setLogementProduct(product);
    } else {
      navigate("/error");
    }
  }, [id, navigate]);

  if (!logementProduct) {
    return null;
  }
  const tags = logementProduct.tags;
  return (
    <div className="body">
      <img src={logementProduct.cover} alt="couverture" className="img-cover" />
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
          <Stars stars={stars} whiteStar={whiteStar} logement={id} />
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
      <DataStatus logementId={product} />
      <article className="carroussel">
        <Caroussel logements={product} />
      </article>
    </div>
  );
}

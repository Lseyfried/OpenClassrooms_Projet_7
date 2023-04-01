import { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";
import logementList from "../data/logements.json";
import "../styles/LogementCard.scss";
import Stars from "../components/Stars";
import DataStatus from "../components/DataStatus";
import Caroussel from "../components/Caroussel";

export default function LogementCard() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [logementProduct, setLogementProduct] = useState(null);
  // Revoir nom variable
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
      <DataStatus />
      <article className="carroussel">
        <Caroussel />
      </article>
    </div>
  );
}

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import logementList from "../data/logements.json";
import "../styles/LogementCard.css";
import Stars from "../components/Stars";
import DataStatus from "../components/DataStatus";
import Caroussel from "../components/Caroussel";

export default function LogementCard() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [logementProduct, setLogementProduct] = useState(null);

  const productList = logementList.find((logement) => logement.id === id);

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
  const rate = productList.rating;
  const tags = logementProduct.tags;
  return (
    <div className="body">
      <article className="carroussel">
        <Caroussel logements={productList} />
      </article>
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
          <Stars rate={rate} />
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
      <DataStatus logementId={productList} />
    </div>
  );
}

import "../styles/Status.scss";
import logementList from "../data/logements.json";
import { useParams } from "react-router-dom";

export default function Status() {
  const { id } = useParams();
  const logementProduct = logementList.find((logement) => logement.id === id);
  return (
    <div className="unlistStatus">
      <div class="status-row">
        <div className="listStatus">
          <button className="descriptionStatus">Description</button>
          <p className="statusDescription">{logementProduct.description}</p>
        </div>
        <div className="listStatus">
          <button className="descriptionStatus">Equipement</button>
          <p className="statusDescription">{logementProduct.equipments}</p>
        </div>
      </div>
      <div className="secondUnlist">
        <div className="listStatus">
          <button className="descriptionStatus">Fiabilité</button>
        </div>
        <div className="listStatus">
          <button className="descriptionStatus">Respect</button>
        </div>
      </div>
    </div>
  );
}

import { useParams } from "react-router-dom";
import logementList from "../data/logements.json";
// import AccordionStatus from "./AccordionStatus";
import "../styles/Status.scss";
import Collapse from "./Collapse";
export default function DataStatus() {
  const { id } = useParams();
  const logementProduct = logementList.find((logement) => logement.id === id);
  const description = logementProduct.description;
  const equipement = logementProduct.equipments;
  const StatusData = [
    {
      title: "Description",
      content: description,
      index: 1,
    },
    {
      title: "Equipements",
      content: (
        <div className="equipementColumn">
          {equipement.map(
            (
              item,
              index //direct pae logement appeler collapse
            ) => (
              <div key={index}>{item}</div>
            )
          )}
        </div>
      ),
      index: 2,
    },
  ];

  return (
    <div className="suiteAccordeon">
      {StatusData.map((data, index) => (
        <Collapse key={index} title={data.title} content={data.content} />
      ))}
    </div>
  );
}

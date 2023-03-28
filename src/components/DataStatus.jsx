import { useParams } from "react-router-dom";
import logementList from "../data/logements.json";
import AccordionStatus from "./AccordionStatus";
import "../styles/Status.scss";

export default function DataStatus() {
  const { id } = useParams();
  const logementProduct = logementList.find((logement) => logement.id === id);
  const description = logementProduct.description;
  const equipement = logementProduct.equipments;
  const StatusData = [
    {
      title: "Description",
      content: description,
    },
    {
      title: "Equipements",
      content: (
        <div className="equipementColumn">
          {equipement.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="suiteAccordeon">
      {StatusData.map((data, index) => (
        <AccordionStatus
          key={index}
          title={data.title}
          content={data.content}
        />
      ))}
    </div>
  );
}

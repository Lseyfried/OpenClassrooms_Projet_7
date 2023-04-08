import "../styles/Status.css";
import Collapse from "./Collapse";

export default function DataStatus({ logementId }) {
  const description = logementId.description;
  const equipement = logementId.equipments;
  const StatusData = [
    {
      title: "Description",
      content: description,
      id: 1,
    },
    {
      title: "Equipements",
      content: (
        <div className="equipementColumn">
          {equipement.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      ),
      id: 2,
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

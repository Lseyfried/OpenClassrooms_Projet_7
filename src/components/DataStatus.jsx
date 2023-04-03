import "../styles/Status.css";
import Collapse from "./Collapse";
export default function DataStatus({ logementId }) {
  const description = logementId.description;
  const equipement = logementId.equipments;
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

import AccordionStatus from "./AccordionStatus";
import "../styles/Status.scss";
import statusData from "./StatusReste";

export default function Status({ title, content }) {
  return (
    <div className="suiteAccordeon">
      {statusData.map((data, index) => (
        <AccordionStatus
          key={index}
          title={data.title}
          content={data.content}
        />
      ))}
    </div>
  );
}

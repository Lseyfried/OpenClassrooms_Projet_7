import "../styles/Banner.css";
import bgImage from "../assets/IMG.svg";
export default function Banner() {
  const title = "Chez vous, partout et ailleurs";
  return (
    <div className="img-Banner">
      <img
        height="223"
        src={bgImage}
        alt="chaîne de montagne"
        className="Bg-img"
      />

      <h1 className="bg-string">{title}</h1>
    </div>
  );
}

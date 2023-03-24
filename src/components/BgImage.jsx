import "../styles/Bg-image.scss";
import bgImage from "../assets/IMG.svg";

export default function BgImage() {
  const title = "Chez vous, partout et ailleurs";
  return (
    <div>
      <img src={bgImage} alt="chaîne de montagne" className="Bg-img" />
      <h1 className="bg-string">{title}</h1>
    </div>
  );
}

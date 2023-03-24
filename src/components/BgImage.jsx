import "../styles/Bg-image.scss";
import bgImage from "../assets/IMG.svg";
function BgImage() {
  return (
    <div>
      <img src={bgImage} alt="chaîne de montagne" className="Bg-img" />
      <h1 className="bg-string">Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default BgImage;

import "../styles/Banner.css";
import bgImage from "../assets/IMG.svg";
import { Link } from "react-router-dom";
export default function Banner() {
  const title = "Chez vous, partout et ailleurs";
  return (
    <div className="img-Banner">
      <Link to="/">
        <img src={bgImage} alt="chaîne de montagne" className="Bg-img" />
      </Link>
      <h1 className="bg-string">{title}</h1>
    </div>
  );
}

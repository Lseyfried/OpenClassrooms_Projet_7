import "../styles/Starsrattings.scss";
import stars from "../assets/Star.svg";
import whiteStar from "../assets/whiteStar.svg";
import { useParams } from "react-router-dom";
import logementList from "../data/logements.json";
//props pour stars
export default function Stars() {
  const { id } = useParams();
  const logementProduct = logementList.find((rating) => rating.id === id);
  const rate = logementProduct.rating;
  //Construction d'un Array de 5 éléments qu'on rempli avec les étoiles
  const fullStars = Array(5).fill(
    <img src={stars} alt="Full star" className="redStar" />
  );
  const emptyStars = Array(5).fill(
    <img src={whiteStar} alt="Empty Star" className="greyStar" />
  );
  return (
    <div className="ratingStars">
      {fullStars.slice(5 - rate).map((fullStar, index) => {
        return (
          <p className="p-stars" key={index}>
            {fullStar}
          </p>
        );
      })}
      {emptyStars.slice(rate).map((emptyStar, index) => {
        return (
          <p className="p-stars" key={index}>
            {emptyStar}
          </p>
        );
      })}
    </div>
  );
}

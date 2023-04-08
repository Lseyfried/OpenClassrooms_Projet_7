import "../styles/Starsrattings.css";
import stars from "../assets/Star.svg";
import whiteStars from "../assets/whiteStar.svg";

export default function Stars({ rate }) {
  const fullStars = Array(5).fill(
    <img src={stars} alt="Full star" className="redStar" />
  );
  const emptyStars = Array(5).fill(
    <img src={whiteStars} alt="Empty Star" className="greyStar" />
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

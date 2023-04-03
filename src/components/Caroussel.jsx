import "../styles/Caroussel.css";
import { useState } from "react";
import leftArrow from "../assets/leftArrow.png";
import rightArrow from "../assets/rightArrow.png";

const Caroussel = ({ logements }) => {
  const images = logements.pictures;
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    const index = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const goToNextSlide = () => {
    const index = (currentIndex + 1) % images.length;
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <div
        className="carousel-slide"
        style={{ left: -currentIndex * 100 + "%" }}
      >
        {images.map((image, index) => (
          <div key={image} className="carousel-item">
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <button className="carousel-prev" onClick={goToPrevSlide}>
        <img src={leftArrow} alt="fleche gauche" />
      </button>
      <button className="carousel-next" onClick={goToNextSlide}>
        <img src={rightArrow} alt="fleche droite" />
      </button>
    </div>
  );
};

export default Caroussel;

import "../styles/Caroussel.scss";
import { useState } from "react";
import leftArrow from "../assets/leftArrow.png";
import rightArrow from "../assets/rightArrow.png";
import logementList from "../data/logements.json";
import { useParams } from "react-router-dom";

const Caroussel = () => {
  const { id } = useParams();
  const logementProduct = logementList.find((logement) => logement.id === id);
  const images = logementProduct.pictures;
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    const index = (currentIndex + images.length - 1) % images.length;
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
          <div key={index} className="carousel-item">
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
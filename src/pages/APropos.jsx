import "../styles/APropos.scss";
import "../styles/Header.scss";
import "../styles/Home.scss";
import Header from "../components/Header";
import "../styles/Banner.scss";
import { Link } from "react-router-dom";
import imageBanner from "../assets/ImgApropos.svg";
import { useState } from "react";
import Footer from "../components/Footer";
export default function APropos() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="body">
      <Header />
      <div className="img-Banner">
        <Link to="/">
          <img src={imageBanner} alt="Banniere A Propos" className="Bg-img" />
        </Link>
      </div>
      <article className="Propos_unList">
        <button onClick={toggleVisibility} className="Propos_List">
          Fiabialité
        </button>

        {isVisible && (
          <p>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        )}

        <button onClick={toggleVisibility} className="Propos_List">
          Respect
        </button>

        {isVisible && (
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        )}

        <button onClick={toggleVisibility} className="Propos_List">
          Service
        </button>

        {isVisible && (
          <p>
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N'hésitez pas à nous contacter si vous avez la
            moindre question.
          </p>
        )}
        <button onClick={toggleVisibility} className="Propos_List">
          Sécurité
        </button>

        {isVisible && (
          <p>
            Sécurité La sécurité est la priorité de Kasa. Aussi bien pour nos
            hôtes que pour les voyageurs, chaque logement correspond aux
            critères de sécurité établis par nos services. En laissant une note
            aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de
            vérifier que les standards sont bien respectés. Nous organisons
            également des ateliers sur la sécurité domestique pour nos hôtes.
            Miguel
          </p>
        )}
      </article>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

import { Link } from "react-router-dom";
import hero from "../assets/images/hero.jpg";
import tear from "../assets/images/tear.svg";
const Hero = () => {
  return (
    <div className="hero-container">
      <img src={hero} classname="banner" alt="banner" />
      <div className="hero-card">
        <h1>Prêts à faire du tri dans vos placards?</h1>
        <a href="">Commencer à vendre</a>
      </div>
      <img src={tear} className="tear" alt="" />
    </div>
  );
};
export default Hero;

import { Link } from "react-router-dom";
import hero from "../assets/images/hero.jpg";
import tear from "../assets/images/tear.svg";
const Hero = ({ userToken }) => {
  return (
    <div className="hero-container">
      <img src={hero} className="banner" alt="banner" />
      <div className="hero-card">
        <h1>Prêts à faire du tri dans vos placards?</h1>
        <Link to={userToken ? "/publish" : "/login"}>Commencez à vendre</Link>
      </div>
      <img src={tear} className="tear" alt="" />
    </div>
  );
};
export default Hero;

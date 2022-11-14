import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
const Header = ({ handleToken, userToken }) => {
  return (
    <header>
      <div className="wrapper">
        <img src={logo} alt="logo vinted" />
        {!userToken ? (
          <>
            <input
              className="searchbar"
              type="text"
              placeholder="Recherche des articles"
            />
            <Link to={"/signup"}>
              <button className="signup-btn">S'inscrire</button>
            </Link>
            <Link to={"/login"}>
              <button className="connect-btn">Se connecter</button>
            </Link>
          </>
        ) : (
          <button
            className="disconnect-btn"
            onClick={() => {
              handleToken();
            }}
          >
            Se déconnecter
          </button>
        )}
        <button className="sell-btn">Vends tes articles</button>
      </div>
    </header>
  );
};
export default Header;

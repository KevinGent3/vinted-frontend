import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
const Header = ({ handleToken, userToken }) => {
  return (
    <header>
      <div className="wrapper">
        <Link to="/">
          <img src={logo} alt="logo vinted" />
        </Link>

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
        <Link to={userToken ? "/publish" : "/login"} className="sell-btn">
          Vends tes articles
        </Link>
      </div>
    </header>
  );
};
export default Header;

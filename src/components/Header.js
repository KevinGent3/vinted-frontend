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
              <button>S'inscrire</button>
            </Link>
            <Link to={"/login"}>
              <button>Se connecter</button>
            </Link>
          </>
        ) : (
          <button
            onClick={() => {
              handleToken();
            }}
          >
            Se déconnecter
          </button>
        )}

        <button>Vends tes articles</button>
      </div>
    </header>
  );
};
export default Header;

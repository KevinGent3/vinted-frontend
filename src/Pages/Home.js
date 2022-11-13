// import de mes states
import { useEffect, useState } from "react";
import axios from "axios";

// import des components
import { Link } from "react-router-dom";
import Hero from "../components/Hero";

const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  });
  return isLoading ? (
    <span>En cours de chargement </span>
  ) : (
    <div>
      <Hero></Hero>
      {data.offers.map((offer, index) => {
        return (
          <Link to={`/offer/${offer._id}`} key={offer._id}>
            {/* je n'arrive pas à afficher la clé owner, mon console log ne renvoie rien */}
            {/* {offer.owner.avatar && (
              <img src={offer.owner.account.avatar.secure_url} alt="" />
            )} */}
            <p>{offer.product_name}</p>
            <img src={offer.product_image.secure_url} alt="" />
            <p>{offer.product_price} €</p>
            {offer.product_details.map((elem, index) => {
              return (
                <div key={index}>
                  {elem.TAILLE && <p>{elem.TAILLE}</p>}
                  {elem.MARQUE && <p>{elem.MARQUE}</p>}
                </div>
              );
            })}
          </Link>
        );
      })}
    </div>
  );
};
export default Home;

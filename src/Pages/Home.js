// import de mes states
import { useEffect, useState } from "react";
import axios from "axios";

// import des components
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import OfferCard from "../components/OfferCard";

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
      <div className="home-container">
        {data.offers.map((offer, index) => {
          return <OfferCard key={offer._id} offer={offer}></OfferCard>;
        })}
      </div>
    </div>
  );
};
export default Home;

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const Offer = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [id]);
  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div>
      <div>
        {data.product_details.map((detail, index) => {
          const keyName = Object.keys(detail);
          return (
            <div key={index}>
              <span>{keyName[0]}</span> <span>{detail[keyName[0]]}</span>
            </div>
          );
        })}
      </div>
      <p>{data.product_name}</p>
      <p>{data.product_description}</p>
      {data.owner.account.avatar && (
        <img src={data.owner.account.avatar.secure_url} alt="" />
      )}
      <span>{data.owner.account.username}</span>

      <Link to="/">Aller sur la page de home</Link>
    </div>
  );
};
export default Offer;

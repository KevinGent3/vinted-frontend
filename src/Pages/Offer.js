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
    <div className="container">
      <div className="offer-container">
        <div className="main-picture">
          <img src={data.product_image.secure_url} alt="/" />
        </div>
        <div className="main-infos">
          <div className="infos-content">
            <div className="infos-top">
              <div className="product-price">{`${data.product_price} €`}</div>

              <div className="product-details">
                {data.product_details.map((detail, index) => {
                  const keyName = Object.keys(detail);
                  return (
                    <div key={index}>
                      <span>{keyName[0]}</span>{" "}
                      <span>{detail[keyName[0]]}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="infos-bottom">
              <div>
                <p>{data.product_name}</p>
                <p>{data.product_description}</p>
              </div>

              <div className="infos-owner">
                {data.owner.account.avatar && (
                  <img
                    className="avatar"
                    src={data.owner.account.avatar.secure_url}
                    alt=""
                  />
                )}
                <span>{data.owner.account.username}</span>
              </div>
              <Link
                to="/payment"
                state={{ title: data.product_name, price: data.product_price }}
              >
                <button>Acheter</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Offer;

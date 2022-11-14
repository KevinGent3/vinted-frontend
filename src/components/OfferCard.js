import { Link } from "react-router-dom";
const OfferCard = ({ offer }) => {
  return (
    <div className="offer-content">
      <Link to={`/offer/${offer._id}`} className="offer-card-container">
        <div className="offer-card">
          <div className="owner">
            {offer.owner ? <p>{offer.owner.account.username}</p> : null}
          </div>
          <div>
            <img
              src={offer.product_image.secure_url}
              alt="product"
              style={{ height: 400, width: 200, objectFit: "cover" }}
            />
          </div>
          <div>
            <p>{offer.product_price} €</p>
            {offer.product_details.map((elem, index) => {
              return (
                <div key={index}>
                  {elem.TAILLE && <p>{elem.TAILLE}</p>}
                  {elem.MARQUE && <p>{elem.MARQUE}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </Link>
    </div>
  );
};
export default OfferCard;

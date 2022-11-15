import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";
const CheckoutForm = ({ title, amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [completed, setCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const userId = Cookies.get("userId");
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const cardElements = elements.getElement(CardElement);
      const stripeResponse = await stripe.createToken(cardElements, {
        name: userId,
      });
      const stripeToken = stripeResponse.token.id;

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        { stripeToken: stripeToken, title: title, amount: amount }
      );
      if (response.data === "succeeded") {
        setIsLoading(false);
        setCompleted(true);
      } else {
        alert("Une erreur est survenue");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="payment-container">
      <div className="payment-content">
        <p>Résumé de la commande</p>
        <div>
          <span>Commande</span>
          <span> {amount} €</span>
        </div>
        <div>
          <span>Frais de protection acheteurs </span>
          <span>0,40 €</span>
        </div>
        <div>
          <span>Frais de livraison</span>
          <span>0,80 €</span>
        </div>
        <div>
          <span>Total</span>
          <span> {(amount + 0.4 + 0.8).toFixed(2)} € </span>
        </div>

        <form on submit={handleSubmit}>
          <CardElement />
          <input className="pay-btn" type="submit" value="payer" />
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;

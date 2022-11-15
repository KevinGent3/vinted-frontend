import { loadStripe } from "@stripe/stripe-js";
import { useParams, Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
const Payment = ({ userToken }) => {
  const location = useLocation();
  const { title, amount } = location.state;
  const stripePromise = loadStripe(
    "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP"
  );
  return userToken ? (
    <Elements stripe={stripePromise}>
      <CheckoutForm title={title} amount={amount}></CheckoutForm>
    </Elements>
  ) : (
    <Navigate to="/login" />
  );
};
export default Payment;

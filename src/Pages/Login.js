import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );
      //   console.log(response.data);
      handleToken(response.data.token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="signup">
      <div className="signup-content">
        <h1>Se connecter</h1>
        <form className="signup-container" onClick={handleSubmit}>
          <input
            type="email"
            value={email}
            placeholder="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <input type="submit" value="connexion" />
        </form>
      </div>
    </div>
  );
};
export default Login;

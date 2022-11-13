import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          email: email,
          username: username,
          password: password,
          newsletter: newsletter,
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
    <form className="signup-container" onSubmit={handleSubmit}>
      <h1>S'inscrire</h1>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <input
        onChange={(event) => {
          setUsername(event.target.value);
        }}
        type="text"
        placeholder="username"
        value={username}
      />
      <input
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        type="password"
        placeholder="password"
        value={password}
      />
      <input
        type="checkbox"
        checked={newsletter}
        onChange={() => {
          setNewsletter(!newsletter);
        }}
      />
      <input type="submit" value="S'inscrire" />
    </form>
  );
};
export default Signup;

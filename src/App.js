import "./App.css";
import { useState } from "react";
//import des packages
import Header from "./components/Header";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Cookies from "js-cookie";
import Publish from "./Pages/Publish";
//import du router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import des pages
import Home from "./Pages/Home";
import Offer from "./Pages/Offer";

function App() {
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);
  const handleToken = (token) => {
    if (token) {
      Cookies.set("userToken", token, { expires: 7 });
      setUserToken(token);
    } else {
      Cookies.remove("token");
      setUserToken(null);
    }
  };
  return (
    <Router>
      <Header
        handleToken={handleToken}
        userToken={userToken}
        className="container"
      ></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="/signup" element={<Signup handleToken={handleToken} />} />
        <Route path="/login" element={<Login handleToken={handleToken} />} />
        <Route
          path="/publish"
          element={<Publish userToken={userToken} />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;

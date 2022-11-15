import axios from "axios";
import { Navigate } from "react-router-dom";
import { useState } from "react";

const Publish = ({ userToken }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState(0);
  const [picture, setPicture] = useState({});

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const formData = new FormData();

      formData.append("title", title);
      formData.append("description", description);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("condition", condition);
      formData.append("city", city);
      formData.append("price", price);
      formData.append("picture", picture);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: { authorization: `Bearer ${userToken}` },
        }
      );
      console.log("Réponse : ", response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return userToken ? (
    <div>
      <div className="publish-container">
        <h1>Vends ton article</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="file" className="upload-file">
            Ajouter une photo
          </label>
          <input
            type="file"
            id="file"
            onChange={(event) => {
              setPicture(event.target.files[0]);
            }}
          ></input>
          <div className="text-input-section">
            <div className="text-input">
              <h4>Titre</h4>
              <input
                type="text"
                placeholder="ex. Chemise Sézane verte"
                onChange={(event) => setTitle(event.target.value)}
              />
            </div>
            <div className="text-input">
              <h4>Décris ton article</h4>
              <textarea
                row="20"
                placeholder="ex.porté quelque fois, taille correctement"
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>
          </div>
          <div className="text-input-section">
            <div className="text-input">
              <h4>Marque</h4>
              <input
                type="text"
                placeholder="ex. Zara"
                onChange={(event) => setBrand(event.target.value)}
              />
            </div>
            <div className="text-input">
              <h4>Taille</h4>
              <input
                type="text"
                placeholder="ex : L / 40 / 12"
                onChange={(event) => setSize(event.target.value)}
              />
            </div>
            <div className="text-input">
              <h4>Couleur</h4>
              <input
                type="text"
                placeholder="ex : Fushia"
                onChange={(event) => setColor(event.target.value)}
              />
            </div>
            <div className="text-input">
              <h4>Etat</h4>
              <input
                type="text"
                placeholder="ex : Neuf avec étiquette"
                onChange={(event) => setCondition(event.target.value)}
              />
            </div>
            <div className="text-input">
              <h4>Lieu</h4>
              <input
                type="text"
                placeholder="ex : Paris"
                onChange={(event) => setCity(event.target.value)}
              />
            </div>
          </div>
          <div className="text-input-section">
            <div className="text-input">
              <h4>Prix</h4>
              <div className="checkbox-section">
                <input
                  type="text"
                  placeholder="0.00 €"
                  onChange={(event) => setPrice(event.target.value)}
                />
                <div className="checkbox-input">
                  <input type="checkbox" value="exchange" />
                  <span>Je suis intéressé(e) par les échanges</span>
                </div>
              </div>
            </div>
          </div>
          <div className="form-button">
            <input type="submit" value="Ajouter" />
          </div>
        </form>
      </div>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Publish;

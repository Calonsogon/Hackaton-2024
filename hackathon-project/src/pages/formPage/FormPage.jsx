import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SelectDonde from "../../components/form/selectDonde/SelectDonde";
import InputCuando from "../../components/form/inputCuando/InputCuando";
import SelectDondeCiudad2 from "../../components/form/selectDondeCiudad/SelectDondeCiudad";
import InputAque from "../../components/form/inputAque/InputAque";
import "./FormPage.scss";

const FormPage = () => {
  const [formData, setFormData] = useState({
    Donde: "",
    DondeCiudad: "",
    Cuando: "",
    Aque: "",
  });

  const navigate = useNavigate();

  const handleDondeChange = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      Donde: value,
    }));
  };

  const handleDondeCiudadChange = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      DondeCiudad: value,
    }));
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Enviando datos:", formData);
    try {
      const response = await axios.get(
        `http://api.waqi.info/feed/${formData.DondeCiudad}/?token=2245d64e0eaae513bf3928eaf4aa14cc079dc85e`
      );

      const weatherData = response.data.data;
      console.log("Weather data:", weatherData);
      navigate(`/map?region=${formData.Donde}`, { state: { weatherData } });
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }

    setFormData({
      Donde: "",
      DondeCiudad: "",
      Cuando: "",
      Aque: "",
    });
  };

  return (
    <div className="background-page">
      <div className="container">
        <h1 className="text-center">¿Nos vamos?</h1>
        <form onSubmit={handleSubmit} className="m-5">
          <SelectDonde value={formData.Donde} onChange={handleDondeChange} />
          <SelectDondeCiudad2
            value={formData.DondeCiudad}
            onChange={handleDondeCiudadChange}
            comunity={formData.Donde}
          />
          <InputCuando value={formData.Cuando} onChange={handleChange} />
          <InputAque value={formData.Aque} onChange={handleChange} />
          <button type="submit" className="btn btn-secondary">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormPage;

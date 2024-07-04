import React, { useState } from "react";
import SelectDonde from "../../components/form/selectDonde/SelectDonde";
import InputCuando from "../../components/form/inputCuando/InputCuando";
import InputAque from "../../components/form/inputAque/InputAque";
import "./FormPage.scss";

const FormPage = () => {
  const [formData, setFormData] = useState({
    Donde: "",
    Cuando: "",
    Aque: "",
  });

  const handleDondeChange = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      Donde: value,
    }));
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({
      Donde: "",
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

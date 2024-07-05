import React from "react";
//import { useNavigate } from "react-router-dom";

const SelectDonde = ({ value, onChange }) => {
  //const navigate = useNavigate();

  const options = [
    { id: "01", label: "Andalucía" },
    { id: "02", label: "Aragón" },
    { id: "03", label: "Principado de Asturias" },
    { id: "04", label: "Islas Baleares" },
    { id: "05", label: "Canarias" },
    { id: "06", label: "Cantabria" },
    { id: "07", label: "Castilla-La Mancha" },
    { id: "08", label: "Castilla y León" },
    { id: "09", label: "Cataluña" },
    { id: "10", label: "Comunidad Valenciana" },
    { id: "11", label: "Extremadura" },
    { id: "12", label: "Galicia" },
    { id: "13", label: "La Rioja" },
    { id: "14", label: "Comunidad de Madrid" },
    { id: "15", label: "Región de Murcia" },
    { id: "16", label: "Navarra" },
    { id: "17", label: "País Vasco" },
    { id: "18", label: "Ceuta" },
    { id: "19", label: "Melilla" },
  ];
  
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    onChange(selectedValue);
    //navigate(`/map?region=${selectedValue}`);
  }; 

  return (
    <div className="form-group mb-3">
      <label htmlFor="Donde">¿Dónde?</label>
      <br />
      <select
        className="form-control"
        id="Donde"
        value={value}
        onChange={handleChange}
      >
        <option value="">Selecciona una opción</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectDonde;

import React, { useState } from 'react';
import SelectDonde from '../components/form/SelectDonde';
import InputCuando from '../components/form/InputCuando';
import InputAque from '../components/form/InputAque';

const FormPage = () => {
  const [formData, setFormData] = useState({
    Donde: '', // Dejamos vacío para que el usuario seleccione
    Cuando: '',
    Aque: ''
  });

  const handleDondeChange = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      Donde: value
    }));
  }

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para enviar los datos del formulario a la base de datos
    console.log('Enviando datos:', formData);
    // Aquí podrías implementar la lógica para enviar los datos a tu API o base de datos
    // resetear el formulario después del envío (opcional)
    setFormData({
      Donde: '',
      Cuando: '',
      Aque: ''
    });
  }

  return (
    <div className="container ">
      <h1 className="text-center">¿Nos vamos?</h1>
      <form onSubmit={handleSubmit}  className='m-5'>
        <SelectDonde value={formData.Donde} onChange={handleDondeChange} />
        <InputCuando value={formData.Cuando} onChange={handleChange} />
        <InputAque value={formData.Aque} onChange={handleChange} />
        <button type="submit" className="btn btn-secondary">Enviar</button>
      </form>
    </div>
  );
}

export default FormPage;
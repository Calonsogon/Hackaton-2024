import React, { useState } from 'react';

const FormPage = () => {
  const [formData, setFormData] = useState({
    nombre: 'Juan Pérez',
    email: 'juan.perez@example.com',
    mensaje: 'Hola, esto es un mensaje predeterminado.'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para enviar los datos del formulario
    console.log(formData);
    // Resetear el formulario después del envío (opcional)
    setFormData({
      nombre: '',
      email: '',
      mensaje: ''
    });
  }

  return (
    <div className="container mx-auto mt-8">
      <div className="form-container">
        <h2>Formulario</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombre:</label>
            <input 
              type="text" 
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="form-group">
            <label>Mensaje:</label>
            <textarea 
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
              rows="5"
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormPage;

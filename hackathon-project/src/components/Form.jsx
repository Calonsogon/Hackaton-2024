import React, { useState } from 'react';

const Form = () => {
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

  return (
    <div className="container mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Nombre</label>
          <input 
            type="text" 
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md" 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md" 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Mensaje</label>
          <textarea 
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md" 
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Form;

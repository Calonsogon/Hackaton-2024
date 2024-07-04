

import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container mx-auto mt-8">
      <h2>Bienvenida a nuestro proyecto</h2>
      <p>Contenido de bienvenida...</p>
      <Link to="/form" className="btn">Ir al Formulario</Link>
    </div>
  );
}

export default HomePage;

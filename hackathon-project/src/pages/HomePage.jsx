/*import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Home</h2>
      <p>Bienvenido a la página de inicio.</p>
    </div>
  );
}

export default Home;*/

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

import { Link } from "react-router-dom";
import "./homepage/HomePage.scss";

const HomePage = () => {
  return (
    <div className="background-page">
      <div className="container mx-auto mt-8">
        <h2>Bienvenida a nuestro proyecto</h2>
        <p>Contenido de bienvenida...</p>
        <Link to="/form" className="btn">
          Ir al Formulario
        </Link>
      </div>
    </div>
  );
};

export default HomePage;

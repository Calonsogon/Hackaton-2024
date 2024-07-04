import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss'; // Asegúrate de que tus estilos personalizados sigan importándose
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el CSS de Bootstrap

const NavbarHome = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <div className="navbar-brand d-flex align-items-center">
          <img src="/src/assets/images/logo1-removebg-preview.png" alt="LogoCovid" className="navbar-logo" />
          <span className='logo-text'>EcoVoyagers</span>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link">Bienvenida</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/form" className="nav-link">Formulario</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/map" className="nav-link">Mapa</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarHome;




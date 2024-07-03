import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';


const NavbarHome = () => {
  return (
    <nav className= "navbar">
      <div className="navbar-logo">
        <img src= "/src/assets/images/logo1-removebg-preview.png" alt="LogoCovid" />
        <span className='logo-text'>EcoVoyagers</span>
      </div>
      <ul className= "NavLinks" >
      <li>
          <NavLink exact to="/">Bienvenida</NavLink>
        </li>
        <li>
          <NavLink to="/form">Formulario</NavLink>
        </li>
        <li>
          <NavLink to="/map">Mapa</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarHome;



/*import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <h1 className="text-white text-xl">Mi Proyecto</h1>
      </div>
    </nav>
  );
}

export default Navbar;



import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prevState => !prevState);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
    if (window.innerWidth > 768) {
      setIsOpen(false);
    }
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 100);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getLogoPath = () => {
    if (isMobile && scrolled) {
      return '/images/logo.png';
    } else if (isMobile && !scrolled) {
      return '/images/logo.png';
    } else if (!isMobile && scrolled) {
      return '/images/logo.png';
    } else {
      return '/images/logo-white.png';
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isOpen ? 'expanded' : ''}`}>
      <div className="navbar-logo">
        <img src={getLogoPath()} alt="Logo" />
      </div>
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="hamburger-lines"></div>
        <div className="hamburger-lines"></div>
        <div className="hamburger-lines"></div>
      </div>
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li>
          <NavLink to="/">Bienvenida</NavLink>
        </li>
        <li>
          <NavLink to="/about">Formulario</NavLink>
        </li>
        <li>
          <NavLink to="/form">Mapa</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;*/

// Navbar.jsx

import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center text-white">
            <img src="/images/logo.png" alt="Logo" className="h-8 mr-2" />
            <span className="text-xl font-bold">Proyecto React</span>
          </Link>
        </div>
        <div className="flex space-x-4">
          <NavLink to="/" activeClassName="text-blue-300" className="text-white hover:text-blue-300">
            Bienvenida
          </NavLink>
          <NavLink to="/form" activeClassName="text-blue-300" className="text-white hover:text-blue-300">
            Formulario
          </NavLink>
          <NavLink to="/mapa" activeClassName="text-blue-300" className="text-white hover:text-blue-300">
            Mapa
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



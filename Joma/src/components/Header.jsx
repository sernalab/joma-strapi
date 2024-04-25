import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="max-w-screen-xl mx-auto border-b-2">
      <nav className="container mx-auto flex flex-wrap justify-between items-center w-full p-4 lg:p-8">
        <Link className="text-gray-600" to="/" onClick={closeMenu}>
          <img
            className="h-9"
            src="https://www.joma-tools.com/catalogo/img/logo-1666880563.jpg.pagespeed.ce.71kNUIfzUR.jpg"
            alt="Logo de la empresa"
          />
        </Link>

        <div className="hidden md:flex md:flex-grow items-center justify-center">
          <p className="mx-4">
            Llámenos: <span className="font-bold">93 683 48 40</span>
          </p>
        </div>

        <div className="hidden sm:flex flex-grow items-center justify-end space-x-4">
          <Link className="text-gray-600" to="/about" onClick={closeMenu}>
            Sobre Nosotros
          </Link>
          <Link className="text-gray-600" to="/promotions" onClick={closeMenu}>
            Promociones
          </Link>
          <Link className="text-gray-600" to="/videos" onClick={closeMenu}>
            Vídeos
          </Link>
          <Link className="text-gray-600" to="/contact" onClick={closeMenu}>
            Contacto
          </Link>
          <Link className="text-gray-600" to="/empleo" onClick={closeMenu}>
            Empleo
          </Link>
          <Link
            className="bg-joma-color rounded-md p-3 text-white"
            to="/catalogo"
            onClick={closeMenu}
          >
            Catálogo
          </Link>
        </div>

        <button
          onClick={toggleMenu}
          className="sm:hidden p-2 rounded-lg border border-gray-200 bg-white text-gray-800 hover:bg-gray-50"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {isOpen && (
          <div className="sm:hidden flex flex-col items-center w-full mt-4">
            <Link
              className="text-gray-600 py-2"
              to="/about"
              onClick={closeMenu}
            >
              Sobre Nosotros
            </Link>
            <Link
              className="text-gray-600 py-2"
              to="/promotions"
              onClick={closeMenu}
            >
              Promociones
            </Link>
            <Link
              className="text-gray-600 py-2"
              to="/videos"
              onClick={closeMenu}
            >
              Vídeos
            </Link>
            <Link
              className="text-gray-600 py-2"
              to="/contact"
              onClick={closeMenu}
            >
              Contacto
            </Link>
            <Link
              className="text-gray-600 py-2"
              to="/empleo"
              onClick={closeMenu}
            >
              Empleo
            </Link>
            <Link
              className="bg-joma-color rounded-md p-3 text-white py-2"
              to="/catalogo"
              onClick={closeMenu}
            >
              Catálogo
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;

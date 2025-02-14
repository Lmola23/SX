import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./navbar.css"; // Importa los estilos
import './../../Style/fonts.css';
import logo from './../../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Función para cerrar el menú al hacer clic fuera
  const closeMenu = () => setIsOpen(false);

  // Asegurar que Inicio esté activo por defecto
  useEffect(() => {
    if (location.pathname === "/SX") {
      document.querySelector(".item").classList.add("active");
    }
  }, [location.pathname]);

  return (
    <>
      <nav className="navbar">
        <img src={logo} className="logo" alt="Logo" />
        <h1 className="title" style={{ fontFamily: "Cormorant", fontStyle: "italic", fontWeight: 800 }}>
          SALÓN XANADU

        </h1>

        {/* Icono de menú */}
        <button onClick={() => setIsOpen(!isOpen)} className="menu-icon">
          {isOpen ? "" : <Menu size={30} color="black" />}
        </button>
      </nav>

      {/* Fondo oscuro cuando el menú está abierto */}
      {isOpen && <div className="overlay" onClick={closeMenu}></div>}

      {/* Menú desplegable */}
      <div className={`nav-menu ${isOpen ? "open" : ""}`} aria-hidden={!isOpen}>
        <button onClick={closeMenu} className="close-icon">
          <X size={30} color="black" />
        </button>

        <div className="container_item" style={{ fontFamily: "Comorant", fontStyle: "italic" }}>
          <Link className={`item ${location.pathname === "/SX" ? "active" : ""}`} to="/SX" onClick={closeMenu}>Inicio</Link>
          <Link className={`item ${location.pathname === "/services" ? "active" : ""}`} to="/services" onClick={closeMenu}>Servicios</Link>
          <Link className={`item ${location.pathname === "/products" ? "active" : ""}`} to="/products" onClick={closeMenu}>Productos</Link>
          <Link className={`item ${location.pathname === "/booking" ? "active" : ""}`} to="/booking" onClick={closeMenu}>Reservaciones</Link>
          <Link className={`item ${location.pathname === "/blog" ? "active" : ""}`} to="/blog" onClick={closeMenu}>Kenia Blog</Link>
          <Link className={`item ${location.pathname === "/login" ? "active" : ""}`} to="/login" onClick={closeMenu}>Iniciar sesión</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;


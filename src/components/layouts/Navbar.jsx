import { Link } from "react-router-dom";
import './Navbar.css';




function Navbar() {
  return (
    <nav className="navbar">
      <div className="logoContainer">
        <img
          src="https://github.com/AgosNori/NoriegaAgostina--Goddesses/blob/master/img/logo.png?raw=true"
          alt="Logo"
          className="logo"
        />
      </div>
      <ul className="navLinks">
        <li>
          <Link to="/" className="navLink">
          
          Inicio
          </Link>
        </li>
        <li>
          <Link to="/login" className="navLink">
       Login
          </Link>
        </li>
        <li>
          <Link to="/register" className="navLink">
        Register
          </Link>
        </li>
        <li>
          <Link to="/carrito" className="navLink">
         Carrito
          </Link>
        </li>
        <li>
          <Link to="/productos" className="navLink">
      Productos
          </Link>
        </li>
        <li>
          <Link to="/usuarios" className="navLink">
           Usuarios
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import Swal from "sweetalert2";
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [usuarios, setUsuarios] = useState({ email: '', contraseña: '' });
  /*
    const navigate = useNavigate();
    const [usuarios, setUsuarios] = useState({ email: '', contraseña: '' });
    */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUsuarios({ ...usuarios, [name]: value });
  };
  /*
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setUsuarios({ ...usuarios, [name]: value });
    };
    */

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Validar que los campos no estén vacíos
    if (!usuarios.email || !usuarios.contraseña) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Por favor, complete todos los campos.",
      });
      return; // Detener el proceso de inicio de sesión si los campos están vacíos
    }

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuarios),
      });

      if (response.ok) {

        Swal.fire({
          icon: "success",
          title: "Éxito",
          text: "Inicio de sesión exitoso",
        });
        navigate('/productos');

      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Inicio de sesión fallido",
        });
        navigate('/login');
      }
    } catch (error) {
      console.error("An error occurred:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Un error ocurrió: " + error.message,
      });
    }
  };

  return (
    <div className="container">

      
      <form onSubmit={handleSubmit} className="formLogin">
        
        <fieldset className="fieldset">
        <legend><h3>Login</h3></legend>
          <div>
            <input className="inputLogin"
              type="email"
              name="email"
              value={usuarios.email}
              onChange={handleInputChange}
              placeholder="Email"

            />
          </div>
          <div >
            <input className="inputLogin"
              type="password"
              name="contraseña"
              value={usuarios.contraseña}
              onChange={handleInputChange}
              placeholder="Contraseña"

            />
          </div>
          <div className="botonLogin">
            <button type="submit" onClick={handleSubmit}>Login</button>
          </div>
        </fieldset>
      </form>


    </div>
  );
}

export default Login;
/*
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import "./Login.css";


function Login({ setIsAuthenticated, onLogin }) {
  const navigate = useNavigate();
  const [usuarios, setUsuarios] = useState({ email: "", contraseña: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUsuarios({ ...usuarios, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!usuarios.email || !usuarios.contraseña) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Por favor, complete todos los campos.",
      });
      return;
    }

    try {
      // Simula la autenticación exitosa, puedes reemplazar esto con tu lógica real
      if (usuarios.email === "admin@admin.com" && usuarios.contraseña === "admin") {
        Swal.fire({
          icon: "success",
          title: "Éxito",
          text: "Inicio de sesión exitoso",
        });

        // Llama a la función onLogin para indicar que el inicio de sesión ha tenido éxito
        onLogin();
        setIsAuthenticated(true); // Establece la autenticación en true
        navigate("/productos");
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Inicio de sesión fallido",
        });
      }
    } catch (error) {
      console.error("An error occurred:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Un error ocurrió: " + error.message,
      });
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="formLogin">
        <fieldset className="fieldset">
          <legend>
            <h3>Login</h3>
          </legend>
          <div>
            <input
              className="inputLogin"
              type="email"
              name="email"
              value={usuarios.email}
              onChange={handleInputChange}
              placeholder="Email"
            />
          </div>
          <div>
            <input
              className="inputLogin"
              type="password"
              name="contraseña"
              value={usuarios.contraseña}
              onChange={handleInputChange}
              placeholder="Contraseña"
            />
          </div>
          <div className="botonLogin">
            <button type="submit" onClick={handleSubmit}>
              Login
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
Login.propTypes = {
  setIsAuthenticated: (props, propName) => {
    if (typeof props[propName] !== "function") {
      return new Error(`'${propName}' debe ser una función.`);
    }
  },
  onLogin: (props, propName) => {
    if (typeof props[propName] !== "function") {
      return new Error(`'${propName}' debe ser una función.`);
    }
  },
};
export default Login;
*/
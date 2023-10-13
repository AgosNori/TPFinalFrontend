/*import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProductosListar from './components/ProductosListar/ProductosListar';
import Usuarios from './components/Usuarios/Usuarios';
import Navbar from './components/layouts/Navbar';
import Carrito from './components/Carrito/Carrito';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Footer from './components/layouts/Footer';
import { useState } from 'react';
import NuevoProductoForm from './components/UserAdmin/nuevoProducto';

function App() {
  const [cart, setCart] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  }
  const loginAsAdmin = () => {
    // Realiza la autenticación y verifica el rol del usuario
    // Si el usuario es administrador, establece isAdmin en true
    setIsAdmin(true);
  }

  const handleLogout = () => {
    // Realiza el cierre de sesión aquí, por ejemplo, limpiar las credenciales del usuario
    // Si el cierre de sesión es exitoso, establece isAuthenticated en false
    setIsAuthenticated(false);
  }
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='rutas'>
          <Routes>
            <Route path='/' element={<ProductosListar addToCart={addToCart} />} />
            {isAdmin && (
              <Route path='/nuevoUsuario' element={<NuevoProductoForm />} />
            )}
             <Route path='/usuarios' element={<Usuarios />} />
            <Route path='/register' element={<Register />} />
            <Route path="/login" element={<Login  loginAsAdmin={loginAsAdmin} isAuthenticated={isAuthenticated}/>} />
            <Route path='/carrito' element={<Carrito />} />
            <Route path='*' element={<Navigate replace to="/" />} />
          </Routes>
        </div>
        <Footer />
        {isAuthenticated ? (
          <div>
            <p>Bienvenido, usuario autenticado.</p>
            <button onClick={handleLogout}>Cerrar sesión</button>
          </div>
        ) : (
          <div>
            <p>No estás autenticado.</p>
          </div>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
*/

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/layouts/Navbar'
/*import NuevoProductoForm from './components/UserAdmin/nuevoProducto';*/
import ProductosListar from "./components/ProductosListar/ProductosListar";
import Carrito from "./components/Carrito/Carrito";
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Usuarios from './components/Usuarios/Usuarios'
import Footer from './components/layouts/Footer'
function App() {
  const [cart, setCart] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <BrowserRouter>
      <Navbar
        isAuthenticated={isAuthenticated}
        isAdmin={isAdmin}
        setIsAuthenticated={setIsAuthenticated}
        setIsAdmin={setIsAdmin}
      />
      <Routes>
        <Route
          path="/"
          element={<ProductosListar />}
        />
      
          <Route
            path="/usuarios"
            element={<Usuarios />}
          />
        
        <Route
          path="/productos"
          element={<ProductosListar addToCart={addToCart} />}
        />
        <Route
          path="/carrito"
          element={<Carrito cart={cart} />}
        />
        <Route
          path="/orden-compra"
          element={<Carrito cart={cart} />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
/* 
/*

    <div>
      {/* Lógica condicional para renderizar AdminDashboard solo cuando isAdmin es verdadero 
      {isAdmin ? <AdminDashboard /> : <div>Tu mensaje de no autorizado</div>}
    </div>
,
   
    <BrowserRouter>
      <Navbar
        isAuthenticated={isAuthenticated}
        isAdmin={isAdmin}
        setIsAuthenticated={setIsAuthenticated}
        setIsAdmin={setIsAdmin}
      />
      <Routes>
        <Route path="/" element={<ProductosListar />} />
        {isAdmin ? ( // Renderiza componentes para el administrador
          <>
            <Route
              path="/nuevo-producto"
              element={<NuevoProductoForm />}
            />{/*}
            <Route
              path="/modificar-producto"
              element={<ModificarProducto />} // Agrega el componente de modificación
            />
            <Route
              path="/usuarios"
              element={<Usuarios />} // Agrega el componente de usuarios

          </>
        ) : (
          // Renderiza componentes para otros usuarios
          <>
            <Route
              path="/productos"
              element={<ProductosListar addToCart={addToCart} />}
            />
            <Route
              path="/carrito"
              element={<Carrito cart={cart} />}
            />
            <Route
              path="/orden-compra"
              element={<Carrito cart={cart} />}
            />
          </>
        )}
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route path="/registro" element={<Register />} />
      </Routes>
      <Footer />
        </BrowserRouter>*/
/*
import { useState } from "react";
import './CardProducto.css';
const Card = (product) => {
  const [message, setMessage] = useState(false);

  function agregarCarrito() {
    setMessage(true);
    setTimeout(() => {
      setMessage(false);
    }, 3000);
  }

  return (
    <div className="container">
      <article className="product-card">
        <img src={product.image} className="product-image" />
        <div className="product-details">
          <h2 className="product-title">{product.nom_producto}</h2>
          <p className="product-description">{product.desc_producto}</p>
          <p className="product-price">
            {typeof product.precio_producto === "number"
              ? `$${product.precio_producto.toFixed(2)}`
              : "Precio no disponible"
            }
          </p>
          <button className="add-to-cart" onClick={agregarCarrito}>
            Agregar al carrito
          </button>
          {message && <div className="carrito-message">Agregado al carrito</div>}
        </div>
      </article>
    </div>

  );
};

export default Card;*/

import { useState } from "react";
import './CardProducto.css';
const Card = (product) => {
  const [message, setMessage] = useState(false);

  function agregarCarrito() {
    setMessage(true);
    setTimeout(() => {
      setMessage(false);
    }, 3000);
  }

  return (
    <div className="container">
      <article className="product-card">
        <img src={product.image} alt={product.title} className="product-image" />
        <div className="product-details">
          <h2 className="product-title">{product.title}</h2>
          <p className="product-description">{product.description}</p>
          <p className="product-price">${product.price}</p>
          <button className="add-to-cart" onClick={agregarCarrito}>
            Agregar al carrito
          </button>
          {message && <div className="carrito-message">Agregado al carrito</div>}
        </div>
      </article>
    </div>

  );
};

export default Card;
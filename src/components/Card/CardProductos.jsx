/*
import PropTypes from 'prop-types';

import ReactRating from 'react-rating';
import './CardProducto.css';
import Swal from 'sweetalert2'; // Importa SweetAlert
import { useNavigate } from 'react-router-dom';

function CardProducto({ producto, addToCart }) {

  const Navigate = useNavigate();

  if (!producto) {
    return <div>No hay productos disponibles</div>;
  }
  const rating = parseFloat(producto.rating);
  const handleCalificacionChange = (nuevaCalificacion, productoId) => {
    // ... (tu código existente)

    // Enviar la calificación actualizada al servidor
    fetch(`http://localhost:3000/products/${productoId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ rating: nuevaCalificacion }),
    })
      .then(response => response.json())
      .then(() => {
        // Actualiza el estado de productos con la respuesta del servidor si es necesario
      })
      .catch(error => {
        console.error('Error al actualizar la calificación:', error);
      });
  };

  const handleAgregarAlCarrito = () => {
    addToCart(producto);

    // Muestra la notificación SweetAlert
    Swal.fire({
      title: 'Agregado al carrito',
      text: `Has agregado ${producto.nom_producto} al carrito.`,
      icon: 'success',
    }).then(() => {
      Navigate('/carrito');
    })
  };

  return (
    <div className='containerC'>
      <div className='product-cardC'>
        <img src={producto.imagen} alt={producto.nom_producto} className='product-image' />
        <div className='product-details'>
          <h3 className='product-title'>{producto.nom_producto}</h3>
          <p className='product-price'>Precio: ${producto.precio_producto}</p>
          <p className='product-desc'>{producto.desc_producto}</p>
          <button className='add-to-cart' onClick={handleAgregarAlCarrito}>
            Agregar al carrito
          </button>
          <ReactRating
            initialRating={rating}
            emptySymbol={<i className='far fa-star'></i>}
            fullSymbol={<i className='fas fa-star'></i>}
            onChange={nuevaCalificacion =>
              handleCalificacionChange(nuevaCalificacion, producto.id_productos)
            }
            readonly={true}
          />
        </div>
      </div>
    </div>
  );
}

CardProducto.propTypes = {
  producto: PropTypes.shape({
    id_productos: PropTypes.number.isRequired,
    nom_producto: PropTypes.string.isRequired,
    desc_producto: PropTypes.string.isRequired,
    precio_producto: PropTypes.number.isRequired,
    imagen: PropTypes.string,
    rating: PropTypes.string,
  }),
  addToCart: PropTypes.func,
};

export default CardProducto;
*/
import PropTypes from 'prop-types';

import ReactRating from 'react-rating';
import './CardProducto.css';
import Swal from 'sweetalert2'; // Importa SweetAlert
import { useNavigate } from 'react-router-dom';

function CardProducto({ producto, addToCart }) {

  const Navigate = useNavigate();

  if (!producto) {
    return <div>No hay productos disponibles</div>;
  }
  const rating = parseFloat(producto.rating);
  const handleCalificacionChange = (nuevaCalificacion, productoId) => {
    // ... (tu código existente)

    // Enviar la calificación actualizada al servidor
    fetch(`http://localhost:3000/products/${productoId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ rating: nuevaCalificacion }),
    })
      .then(response => response.json())
      .then(() => {
        // Actualiza el estado de productos con la respuesta del servidor si es necesario
      })
      .catch(error => {
        console.error('Error al actualizar la calificación:', error);
      });
  };

  const handleAgregarAlCarrito = () => {
    addToCart(producto);

    // Muestra la notificación SweetAlert
    Swal.fire({
      title: 'Agregado al carrito',
      text: `Has agregado ${producto.nom_producto} al carrito.`,
      icon: 'success',
    }).then(() => {
      Navigate('/carrito');
    })
  };

  return (
    <div className='containerC'>
      <div className='product-cardC'>
        <img src={producto.imagen} alt={producto.nom_producto} className='product-image' />
        <div className='product-details'>
          <h3 className='product-title'>{producto.nom_producto}</h3>
          <p className='product-price'>Precio: ${producto.precio_producto}</p>
          <p className='product-desc'>{producto.desc_producto}</p>
          <button className='add-to-cart' onClick={handleAgregarAlCarrito}>
            Agregar al carrito
          </button>
          <ReactRating
            initialRating={rating}
            emptySymbol={<i className='far fa-star'></i>}
            fullSymbol={<i className='fas fa-star'></i>}
            onChange={nuevaCalificacion =>
              handleCalificacionChange(nuevaCalificacion, producto.id_productos)
            }
            readonly={true}
          />
        </div>
      </div>
    </div>
  );
}

CardProducto.propTypes = {
  producto: PropTypes.shape({
    id_productos: PropTypes.number.isRequired,
    nom_producto: PropTypes.string.isRequired,
    desc_producto: PropTypes.string.isRequired,
    precio_producto: PropTypes.number.isRequired,
    imagen: PropTypes.string,
    rating: PropTypes.string,
  }),
  addToCart: PropTypes.func,
};

export default CardProducto;
/*import PropTypes from 'prop-types';
import { useState } from 'react';

function RealizarCompra({ carrito, onCompraExitosa }) {
  const [formaPago, setFormaPago] = useState('tarjeta'); // Forma de pago predeterminada

  const handleFormaPagoChange = (e) => {
    setFormaPago(e.target.value);
  };

  // Calcular el total de la compra
  const total = carrito.reduce((total, producto) => {
    return total + producto.precio * producto.cantidad;
  }, 0);

  const realizarPedido = () => {
    // 1. Obtener los detalles del pedido
    const pedido = {
      carrito,
      formaPago,
      total,
    };
  
    // 2. Llamar a una función para procesar el pedido (simulada)
    procesarPedido(pedido)
      .then((resultado) => {
        if (resultado === 'exitoso') {
        
          console.log('Pedido procesado con éxito');
          
         
          onCompraExitosa();
        } else {
        
          console.error('Error al procesar el pedido');
        }
      })
      .catch((error) => {
     
        console.error('Error de procesamiento:', error);
      });
  };
  

  function procesarPedido(pedido) {
    return new Promise((resolve, reject) => {
      // Simulamos un retardo de 2 segundos para procesar el pedido
      setTimeout(() => {
        const exitoso = Math.random() < 0.8; // Simulamos una tasa de éxito del 80%
        if (exitoso) {
          resolve('exitoso');
        } else {
          reject('error');
        }
      }, 2000);
    });
  }

  return (
    <div>
      <h2>Resumen de Compra</h2>
      <ul>
        {carrito.map((producto) => (
          <li key={producto.id_productos}>
            {producto.nom_producto} - Cantidad: {producto.cantidad} - Precio: ${producto.precio_producto}
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>

      <h3>Selecciona una Forma de Pago</h3>
      <div>
        <label>
          <input
            type="radio"
            value="tarjeta"
            checked={formaPago === 'tarjeta'}
            onChange={handleFormaPagoChange}
          />
          Tarjeta de Crédito
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="paypal"
            checked={formaPago === 'paypal'}
            onChange={handleFormaPagoChange}
          />
          PayPal
        </label>
      </div>

      <button onClick={realizarPedido}>Realizar Compra</button>
    </div>
  );
}

RealizarCompra.propTypes = {
  carrito: PropTypes.array.isRequired,
  onCompraExitosa: PropTypes.func.isRequired,
};

export default RealizarCompra;
*/
/*
import { useState } from 'react';
import PropTypes from 'prop-types';
function RealizarCompra({ carrito, onCompraExitosa }) {
  const [formaPago, setFormaPago] = useState('tarjeta'); // Forma de pago predeterminada

  const handleFormaPagoChange = (e) => {
    setFormaPago(e.target.value);
  };

  const total = carrito.reduce((total, producto) => {
    return total + producto.precio * producto.cantidad;
  }, 0);

  const realizarPedido = () => {
    // Obtener los detalles del pedido
    const pedido = {
      carrito,
      formaPago,
      total,
    };

    // Simulación de una solicitud al servidor para procesar el pedido
    procesarPedido(pedido)
      .then((resultado) => {
        if (resultado === 'exitoso') {
          // El pedido se procesó con éxito
          mostrarMensajeExito();
          onCompraExitosa(); // Llama a la función de compra exitosa
        } else {
          mostrarMensajeError(resultado);
        }
      })
      .catch((error) => {
        console.error('Error al procesar el pedido:', error);
        mostrarMensajeError('Error de red');
      });
  };

  const procesarPedido = (pedido) => {
    return new Promise((resolve, reject) => {
      // Simulación de procesamiento con un retardo de 2 segundos
      setTimeout(() => {
        const exitoso = Math.random() < 0.8; // Simulación de una tasa de éxito del 80%
        if (exitoso) {
          resolve('exitoso');
        } else {
          resolve('Error en el procesamiento del pedido');
        }
      }, 2000);
    });
  };

  const mostrarMensajeExito = () => {
    alert('Compra exitosa. Gracias por tu pedido.');
  };

  const mostrarMensajeError = (error) => {
    alert('Error en la compra: ' + error);
  };

  return (
    <div>
      <h2>Resumen de Compra</h2>

      <ul>
        {carrito.map((producto) => (
          <li key={producto.id_productos}>
            {producto.nom_producto} - Cantidad: {producto.cantidad} - Precio: ${producto.precio_producto}
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>

      <h3>Selecciona una Forma de Pago</h3>
      <div>
        <label>
          <input
            type="radio"
            value="paypal"
            checked={formaPago === 'paypal'}
            onChange={handleFormaPagoChange}
          />
          PayPal
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="tarjeta"
            checked={formaPago === 'tarjeta'}
            onChange={handleFormaPagoChange}
          />
          Tarjeta de Crédito
        </label>
      </div>

      <button onClick={realizarPedido}>Realizar Compra</button>
    </div>
  );
}
RealizarCompra.propTypes = {
  carrito: PropTypes.array.isRequired,
  onCompraExitosa: PropTypes.func.isRequired,
};
export default RealizarCompra;
*/
import { useState } from 'react';
import PropTypes from 'prop-types';
import './Pagar.css';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
function RealizarCompra({ carrito, onCompraExitosa }) {
  const [formaPago, setFormaPago] = useState('tarjeta'); // Forma de pago predeterminada
  const Navigate = useNavigate()
  const handleFormaPagoChange = (e) => {
    setFormaPago(e.target.value);
  };

  const total = carrito.reduce((total, producto) => {
    return total + producto.precio_producto * producto.cantidad;
  }, 0);

  const realizarPedido = () => {
    // Obtener los detalles del pedido
    const pedido = {
      carrito,
      formaPago,
      total,
    };

    // Simulación de una solicitud al servidor para procesar el pedido
    procesarPedido(pedido)
      .then((resultado) => {
        if (resultado === 'exitoso') {
          // El pedido se procesó con éxito
          mostrarMensajeExito();
          onCompraExitosa(); 
          <Navigate to="/carrito"/>
        } else {
          mostrarMensajeError(resultado);

        }
      })
      .catch((error) => {
        console.error('Error al procesar el pedido:', error);
        mostrarMensajeError('Error de red');
      });
  };

  const procesarPedido = (pedido) => {
    return new Promise((resolve, reject) => {
      // Simulación de procesamiento con un retardo de 2 segundos
      setTimeout(() => {
        const exitoso = Math.random() < 0.8; 
        if (exitoso) {
          resolve('exitoso');
        } else {
          resolve('Error en el procesamiento del pedido');
        }
      }, 2000);
    });
  };

  const mostrarMensajeExito = () => {
    Swal.fire('¡Compra exitosa!', 'Gracias por tu pedido.', 'success');
 
  };

  const mostrarMensajeError = (error) => {
    Swal.fire('Error en la compra', error, 'error');
  };

  return (
    <div className='realizar-compra-container'>
    <h2>Resumen de Compra</h2>

    <ul className='listPagar'>
      {carrito.map((producto) => (
        <li className='listaPagar' key={producto.id_productos}>
          {producto.nom_producto} - Cantidad: {producto.cantidad} - Precio: ${producto.precio_producto}
        </li>
      ))}
    </ul>
    <p>Total: ${total}</p>

    <h3>Selecciona una Forma de Pago</h3>
    <div className='forma-pagar-option'>
      <label>
        <input
          type="radio"
          value="paypal"
          checked={formaPago === 'paypal'}
          onChange={handleFormaPagoChange}
        />
        PayPal
      </label>
    </div>
    <div>
      <label>
        <input
          type="radio"
          value="tarjeta"
          checked={formaPago === 'tarjeta'}
          onChange={handleFormaPagoChange}
        />
        Tarjeta de Crédito
      </label>
    </div>

    <button className='realizar-compra-button' onClick={realizarPedido}>Realizar Compra</button>
  </div>
  );
}
RealizarCompra.propTypes = {
  carrito: PropTypes.array.isRequired,
  onCompraExitosa: PropTypes.func.isRequired,
};
export default RealizarCompra;

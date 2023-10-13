import { useState } from "react";
import PropTypes from "prop-types"; // Importa PropTypes
const Pagar = ({ carrito, usuario }) => {
  const [envioADomicilio, setEnvioADomicilio] = useState(false);
  const [datosEnvio, setDatosEnvio] = useState({
    direccion: "",
    ciudad: "",
    codigoPostal: "",
  });

  // Calcular el precio total de la compra
  const precioTotal = carrito.reduce((total, producto) => {
    return total + producto.precio * producto.cantidad;
  }, 0);

  const handleEnvioADomicilioChange = (event) => {
    setEnvioADomicilio(event.target.checked);
  };

  const handleDatosEnvioChange = (event) => {
    const { name, value } = event.target;
    setDatosEnvio({ ...datosEnvio, [name]: value });
  };

  const realizarPago = () => {
    // Aquí puedes implementar la lógica de procesamiento de pagos
    // Puedes utilizar una pasarela de pago, enviar datos a un servidor, etc.
    // En este ejemplo, simplemente mostramos una confirmación en la consola
    console.log("Pago realizado con éxito");
    console.log("Detalle de la compra:");
    carrito.forEach((producto) => {
      console.log(
        `Producto: ${producto.nombre}, Cantidad: ${producto.cantidad}, Precio Unitario: ${producto.precio}`
      );
    });
    console.log(`Precio Total: ${precioTotal}`);
    console.log("Datos de contacto del usuario:", usuario);
    if (envioADomicilio) {
      console.log("Opción de envío a domicilio habilitada");
      console.log("Datos de envío del usuario:", datosEnvio);
    }
  };

  return (
    <div>
      <h2>Resumen de la Compra</h2>
      <div>
        {carrito.map((producto) => (
          <div key={producto.id}>
            <p>Producto: {producto.nombre}</p>
            <p>Cantidad: {producto.cantidad}</p>
            <p>Precio Unitario: {producto.precio}</p>
          </div>
        ))}
        <p>Precio Total: {precioTotal}</p>
      </div>
      <h2>Datos de Contacto</h2>
      <p>Nombre: {usuario.nombre}</p>
      <p>Email: {usuario.email}</p>
      <h2>Opciones de Envío</h2>
      <label>
        <input
          type="checkbox"
          checked={envioADomicilio}
          onChange={handleEnvioADomicilioChange}
        />
        Enviar a Domicilio
      </label>
      {envioADomicilio && (
        <div>
          <h2>Datos de Envío</h2>
          <label>
            Dirección:
            <input
              type="text"
              name="direccion"
              value={datosEnvio.direccion}
              onChange={handleDatosEnvioChange}
            />
          </label>
          <label>
            Ciudad:
            <input
              type="text"
              name="ciudad"
              value={datosEnvio.ciudad}
              onChange={handleDatosEnvioChange}
            />
          </label>
          <label>
            Código Postal:
            <input
              type="text"
              name="codigoPostal"
              value={datosEnvio.codigoPostal}
              onChange={handleDatosEnvioChange}
            />
          </label>
        </div>
      )}
      <button onClick={realizarPago}>Realizar Pago</button>
    </div>
  );
};
Pagar.propTypes = {
    carrito: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        nombre: PropTypes.string.isRequired,
        cantidad: PropTypes.number.isRequired,
        precio: PropTypes.number.isRequired,
      })
    ).isRequired,
    usuario: PropTypes.shape({
      nombre: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired,
  };
  

export default Pagar;

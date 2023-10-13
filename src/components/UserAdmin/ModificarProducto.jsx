/*import { useState } from 'react';
import axios from 'axios';

function NuevoProductoForm() {
  const [producto, setProducto] = useState({
    nom_producto: '',
    desc_producto: '',
    precio_producto: '',
    id_categoria: 0, // Puedes establecer el valor de la categoría predeterminada
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/products', producto);

      if (response.status === 201) {
        console.log('Producto agregado con éxito');
        // Puedes realizar alguna acción adicional, como limpiar el formulario
      }
    } catch (error) {
      console.error('Error al agregar el producto', error);
    }
  };

  return (
    <div>
      <h2>Agregar Nuevo Producto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre del Producto:</label>
          <input
            type="text"
            name="nom_producto"
            value={producto.nom_producto}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Descripción del Producto:</label>
          <textarea
            name="desc_producto"
            value={producto.desc_producto}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Precio del Producto:</label>
          <input
            type="number"
            name="precio_producto"
            value={producto.precio_producto}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Categoría:</label>
          <select
            name="id_categoria"
            value={producto.id_categoria}
            onChange={handleInputChange}
            required
          >
            <option value="1">Productos Faciales</option>
            <option value="2">Cuidado del pelo</option>
            <option value="3">Maquillaje</option>
            <option value="4">Cuidado del sol</option>
          </select>
        </div>
        <button type="submit">Agregar Producto</button>
      </form>
    </div>
  );
}

export default NuevoProductoForm;
*/
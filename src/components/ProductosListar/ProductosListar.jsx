import { useState, useEffect } from "react";
import './ProductosListar.css';
import useCart from "../store/useCart";
import CardProducto from "../Card/CardProductos"; // Asegúrate de importar CardProducto desde la ubicación correcta

function ProductosListar() {
  const [productos, setProductos] = useState([]);
  const [filter, setFilter] = useState({ nom_producto: '', precio_producto_min: '', precio_producto_max: '', categorias: '' });
  const [sortOrder, setSortOrder] = useState('asc');

  // Obtén la función addToCart desde useCart
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/products", {
          method: 'GET',
          headers: {
            'Origin': 'http://localhost:5173',
          },
        });

        if (!response.ok) {
          throw new Error("No se pueden obtener los productos");
        }

        const data = await response.json();
        const productosConPreciosCorregidos = data.map((producto) => ({
          ...producto,
          precio_producto: parseFloat(producto.precio_producto || 0),
        }));

        setProductos(productosConPreciosCorregidos);
      } catch (error) {
        console.error("Error al obtener productos", error);
      }
    };

    fetchData();
  }, []);
  const productosFiltrados = productos.filter((producto) => {
    const nameMatch = (producto.nom_producto || "")
      .toLowerCase()
      .includes(filter.nom_producto.toLowerCase()) || filter.nom_producto === "";
      const categoryMatch = filter.categoriaSeleccionada
      ? producto.id_categoria === parseInt(filter.categoriaSeleccionada) // Debes asegurarte de que coincida con el ID de la categoría en la base de datos
      : true;

    // Filtrar por precio mínimo y máximo
    const priceMin = parseFloat(filter.precio_producto_min);
    const priceMax = parseFloat(filter.precio_producto_max);
    const price = parseFloat(producto.precio_producto || 0);

    const priceMinMatch = isNaN(priceMin) || price >= priceMin;
    const priceMaxMatch = isNaN(priceMax) || price <= priceMax;

    return nameMatch && categoryMatch && priceMinMatch && priceMaxMatch;
  });

  const productosOrdenados = [...productosFiltrados].sort((a, b) => {
    return sortOrder === "asc"
      ? parseFloat(a.precio_producto) - parseFloat(b.precio_producto)
      : parseFloat(b.precio_producto) - parseFloat(a.precio_producto);
  })


  return (
    <div className="busq">
      <h2>Productos</h2>
      <form className="formbus">
        <input
          type="text"
          placeholder="Buscar por nombre"
          value={filter.nom_producto}
          onChange={(e) =>
            setFilter({ ...filter, nom_producto: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Precio mínimo"
          value={filter.precio_producto_min}
          onChange={(e) =>
            setFilter({ ...filter, precio_producto_min: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Precio máximo"
          value={filter.precio_producto_max}
          onChange={(e) =>
            setFilter({ ...filter, precio_producto_max: e.target.value })
          }
        />
        <select
          value={filter.categoriaSeleccionada}
          onChange={(e) => setFilter({ ...filter, categoriaSeleccionada: e.target.value })}
        >
          <option value="">Todas las categorías</option>
          <option value="1">Productos Faciales</option> {/* Debes agregar más opciones según las categorías en tu base de datos */}
          <option value="2">Cuidado del pelo</option>
          <option value="3">Maquillaje</option>
          <option value="4">Cuidado del sol</option>
        </select>
        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
          <option value="asc">Precio Ascendente</option>
          <option value="desc">Precio Descendente</option>
        </select>
      </form>
      <div className="product-containerB">
        {productosOrdenados.map((producto) => (
          <CardProducto
            key={producto.id_productos}
            producto={producto}
            addToCart={() => addToCart(producto)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductosListar;
/*import { useState, useEffect } from "react";
import './ProductosListar.css';
import CardProducto from "../Card/CardProductos";

function ProductosListar() {
  const [productos, setProductos] = useState([]);
  const [filter, setFilter] = useState({ nom_producto: '', precio_producto_min: '', precio_producto_max: '', categorias: '' });
  const [sortOrder, setSortOrder] = useState('asc');
  const [cart, setCart] = useState([]);
  
  const addToCart = (product) => {
    // Verificamos si el producto ya está en el carrito
    const existingProduct = cart.find(
      (item) => item.id_productos === product.id_productos
    );

    if (existingProduct) {
      // Si ya existe, actualizamos la cantidad
      const updatedCart = cart.map((item) =>
        item.id_productos === product.id_productos
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      // Si no existe, lo agregamos al carrito con cantidad 1
      setCart([...cart, { ...product, cantidad: 1 }]);
    }
  };


  useEffect(() => {
    fetch("http://localhost:3000/products", {
      method: 'GET',
      headers: {
        'Origin': 'http://localhost:5173',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("No se puede obtener la información de productos");
        }
        return response.json();
      })
      .then((data) => setProductos(data))
      .catch((error) => console.error("Error al obtener productos", error));
  }, []);

  const productosFiltrados = productos.filter((producto) => {
    const nameMatch = (producto.nom_producto || "")
      .toLowerCase()
      .includes(filter.nom_producto.toLowerCase()) || filter.nom_producto === "";
    const categoryMatch =
      (producto.categoria || "").toLowerCase() ===
        filter.categorias.toLowerCase() || filter.categorias === "";

    // Filtrar por precio mínimo y máximo
    const priceMin = parseFloat(filter.precio_producto_min);
    const priceMax = parseFloat(filter.precio_producto_max);
    const price = parseFloat(producto.precio_producto || 0);

    const priceMinMatch = isNaN(priceMin) || price >= priceMin;
    const priceMaxMatch = isNaN(priceMax) || price <= priceMax;

    return nameMatch && categoryMatch && priceMinMatch && priceMaxMatch;
  });

  const productosOrdenados = [...productosFiltrados].sort((a, b) => {
    return sortOrder === "asc"
      ? parseFloat(a.precio_producto) - parseFloat(b.precio_producto)
      : parseFloat(b.precio_producto) - parseFloat(a.precio_producto);
  });

  return (
    <div className="busq">
      <h2>Productos</h2>
      <form className="formbus">
        <input
          type="text"
          placeholder="Buscar por nombre"
          value={filter.nom_producto}
          onChange={(e) =>
            setFilter({ ...filter, nom_producto: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Precio mínimo"
          value={filter.precio_producto_min}
          onChange={(e) =>
            setFilter({ ...filter, precio_producto_min: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Precio máximo"
          value={filter.precio_producto_max}
          onChange={(e) =>
            setFilter({ ...filter, precio_producto_max: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Buscar por categoría"
          value={filter.categorias}
          onChange={(e) =>
            setFilter({ ...filter, categorias: e.target.value })
          }
        />
        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
          <option value="asc">Precio Ascendente</option>
          <option value="desc">Precio Descendente</option>
        </select>
      </form>
      <div className="product-containerB">
        {productosOrdenados.map((producto) => (
          <CardProducto
            key={producto.id_productos}
            producto={producto}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductosListar;*/

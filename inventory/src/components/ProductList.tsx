import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productsSlice";
import type { RootState, AppDispatch } from "../redux/store";

const ProductList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { list, loading, error } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Listado de Productos</h2>
      <ul>
        {list.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong> — {product.description}  
            <br /> Stock: {product.stock} | Precio: ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

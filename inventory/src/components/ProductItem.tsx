import { useDispatch } from "react-redux";
import { deleteProduct } from "../redux/productsSlice";
import { type AppDispatch } from "../redux/store";
import { Link } from "react-router-dom";
import type { Product } from "../types/Product";

interface Props {
  product: Product;
}

const ProductItem = ({ product }: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = () => {
    dispatch(deleteProduct(product.id));
  };

  return (
    <li style={{ marginBottom: "10px" }}>
      <strong>{product.name}</strong> — {product.description}
      <br /> Stock: {product.stock} | Precio: ${product.price}
      <br />
      <Link to={`/edit/${product.id}`}>Editar</Link>{" "}
      <button onClick={handleDelete}>Eliminar</button>
    </li>
  );
};

export default ProductItem;

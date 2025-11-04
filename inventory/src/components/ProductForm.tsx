import { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../redux/productsSlice";
import type { AppDispatch } from "../redux/store";

const ProductForm = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState(0);
  const [price, setPrice] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !description || stock < 0 || price < 0) return;

    dispatch(createProduct({ name, description, stock, price }));
    setName("");
    setDescription("");
    setStock(0);
    setPrice(0);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <h3>Añadir producto</h3>
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <input
        type="number"
        placeholder="Stock"
        value={stock}
        onChange={(e) => setStock(Number(e.target.value))}
      />
      <br />
      <input
        type="number"
        placeholder="Precio"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
      />
      <br />
      <button type="submit">Guardar</button>
    </form>
  );
};

export default ProductForm;

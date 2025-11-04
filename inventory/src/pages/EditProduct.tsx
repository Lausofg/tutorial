import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store";
import { updateProduct } from "../redux/productsSlice";

const EditProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const product = useSelector((state: RootState) =>
    state.products.list.find((p) => p.id === id)
  );

  const [name, setName] = useState(product?.name || "");
  const [description, setDescription] = useState(product?.description || "");
  const [stock, setStock] = useState(product?.stock || 0);
  const [price, setPrice] = useState(product?.price || 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return;
    dispatch(updateProduct({ id, name, description, stock, price, created_at: "" }));
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "20px" }}>
      <h2>Editar producto</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <input value={description} onChange={(e) => setDescription(e.target.value)} />
      <br />
      <input
        type="number"
        value={stock}
        onChange={(e) => setStock(Number(e.target.value))}
      />
      <br />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
      />
      <br />
      <button type="submit">Guardar cambios</button>
    </form>
  );
};

export default EditProduct;

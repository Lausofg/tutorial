import ProductList from "../components/ProductList";
import ProductForm from "../components/ProductForm";

const Home = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Inventory Manager</h1>
      <ProductForm />
      <ProductList />
    </div>
  );
};

export default Home;

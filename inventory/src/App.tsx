import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import EditProduct from "./pages/EditProduct";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;

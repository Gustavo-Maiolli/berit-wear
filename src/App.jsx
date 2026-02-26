import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import Signup from "./pages/Signup/index.jsx";
import Login from "./pages/Login/index.jsx";
import AdminSales  from "./pages/Admin/Sales/index.jsx";
import AdminStorage  from "./pages/Admin/Storage/index.jsx";
import AdminProducts from "./pages/Admin/Products/index.jsx";
import Products from "./pages/Products/index.jsx";
import Cart from "./pages/Cart/index.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/vendas" element={<AdminSales />} />
        <Route path="/admin/estoque" element={<AdminStorage />} />
        <Route path="/admin/produtos" element={<AdminProducts />} />
        <Route path="/produtos" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

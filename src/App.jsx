import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import Signup from "./pages/Signup/index.jsx";
import Login from "./pages/Login/index.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

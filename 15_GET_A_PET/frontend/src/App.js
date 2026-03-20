import { BrowserRouter, Routes, Route } from "react-router-dom";

/* components */ 
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

/* pages */ 
import Home from "./components/pages/Home";
import Login from "./components/pages/Auth/Login";
import Register from "./components/pages/Auth/Register";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
       <Footer/>
    </BrowserRouter>
  );
}

export default App;

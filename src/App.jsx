import {Route,Routes,Link} from "react-router-dom";
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
// so people using the keyboard for navigation or screen readers will still be able to use this app.import React from "react";




const App = () => {
  
  <div className="App">
      
  <Routes>

  <Route exact path="/" element={<Home />} />
  <Route exact path="/cart" element={<Cart />} />
  <Route exact path="/register" element={<Register />} />
  <Route exact path="/login" element={<Login />} />
  <Route exact path="/product" element={<Product />} />
  <Route exact path="/productlist" element={<ProductList />} />

  </Routes>
  
  </div>
  
};

export default App;
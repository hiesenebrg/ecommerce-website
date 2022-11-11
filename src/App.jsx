import { Route, Routes, Link,  } from "react-router-dom";
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
// so people using the keyboard for navigation or screen readers will still be able to use this app.import React from "react";

const App = () => {
  return (
    <div className="App">
      <Routes>
       
        <Route path="/" element={<Aisehi />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productlist" element={<ProductList />} />
        </Route>
      </Routes>
    </div>
  );
};



export default App;

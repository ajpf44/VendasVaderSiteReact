import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import ProductDetail from "./pages/Products/ProductDetail";
import CartPage from "./pages/Cart/Cart";
import LoginPage from "./pages/Login/Login";
import MembersPage from "./pages/Members/Members";

import { CartProvider } from "./contexts/CartContext";
import HeaderComponent from "./components/Header/HeaderComponent";
import FooterComponent from "./components/Footer/FooterComponent";

import "./App.css";
import AuthContextProvider from "./contexts/AuthContext";
import SignUpPage from "./pages/SignUp/SignUp";

const App: React.FC = () => {
  return (
    <AuthContextProvider>
      <CartProvider>
        <Router>
          <HeaderComponent />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/members" element={<MembersPage />} />
            <Route path="/signup" element={<SignUpPage/>} />
          </Routes>
          <FooterComponent />
        </Router>
      </CartProvider>
    </AuthContextProvider>
  );
};

export default App;

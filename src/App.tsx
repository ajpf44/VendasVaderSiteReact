import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import ProductDetail from "./pages/Products/ProductDetail";
import CartPage from "./pages/Cart/Cart";
import LoginPage from "./pages/Login/Login";
import MembersPage from "./pages/Members/Members";
import SignUpPage from "./pages/SignUp/SignUp";

import { CartProvider } from "./contexts/CartContext";
import HeaderComponent from "./components/Header/HeaderComponent";
import FooterComponent from "./components/Footer/FooterComponent";

import "./App.css";
import SessionContextProvider from "./contexts/SessionContext";

const App: React.FC = () => {
  return (
    <CartProvider>
      <SessionContextProvider>
        <Router>
          <HeaderComponent />
          <div style={{ minHeight: "89.2vh" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signUp" element={<SignUpPage />} />
              <Route path="/members" element={<MembersPage />} />
            </Routes>
          </div>
          <FooterComponent />
        </Router>
      </SessionContextProvider>
    </CartProvider>
  );
};

export default App;

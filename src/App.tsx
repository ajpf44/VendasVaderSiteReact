import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import ProductDetail from "./pages/Products/ProductDetail";
import CartPage from "./pages/Cart/CartPage";
import LoginPage from "./pages/SignIn/SignIn";
import MembersPage from "./pages/Members/Members";
import SignUpPage from "./pages/SignUp/SignUp";
import Profile from "./pages/ProfilePage/Profile";
import { CartProvider } from "./contexts/CartContext";
import HeaderComponent from "./components/Header/HeaderComponent";
import FooterComponent from "./components/Footer/FooterComponent";
import { AppThemeProvider } from "./contexts/ThemeContext";
import SessionContextProvider from "./contexts/SessionContext";
import NotFound from "./components/NotFound";
import PrivacyPolicy from "./pages/Privacy/PrivacyPolicy";
import { CssBaseline } from "@mui/material";
import PaymentPage from './pages/Payment/PaymentPage'; 

const App = () => {
  return (
    <AppThemeProvider>
      <CartProvider>
        <SessionContextProvider>
          <Router>
            <HeaderComponent />
            <div style={{minHeight: "70vh"}}>
            <CssBaseline />
            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/home" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signUp" element={<SignUpPage />} />
              <Route path="/members" element={<MembersPage />} />
              <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/checkout" element={<PaymentPage />} /> 
            </Routes>
          </div>
            <FooterComponent />
          </Router>
        </SessionContextProvider>
      </CartProvider>
    </AppThemeProvider>
  );
};

export default App;
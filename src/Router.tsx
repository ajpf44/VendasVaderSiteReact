import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext, useEffect } from "react";
import { CssBaseline } from "@mui/material";

import HeaderComponent from "./components/Header/HeaderComponent";
import Products from "./pages/Products/Products";
import Home from "./pages/Home/Home";
import ProductDetail from "./pages/Products/ProductDetail";
import CartPage from "./pages/Cart/CartPage";
import LoginPage from "./pages/SignIn/SignIn";
import SignUpPage from "./pages/SignUp/SignUp";
import MembersPage from "./pages/Members/Members";
import PrivacyPolicy from "./pages/Privacy/PrivacyPolicy";
import ProfilePage from "./pages/ProfilePage/Profile";
import NotFound from "./components/NotFound";
import PaymentPage from "./pages/Payment/PaymentPage";
import FooterComponent from "./components/Footer/FooterComponent";

import { SessionContext } from "./contexts/SessionContext";

const SiteRouter = () => {
  const {setStoragedSession} = useContext(SessionContext);
  

  useEffect(() => {
    setStoragedSession()
  }, []);
  return (
    <BrowserRouter>
      <HeaderComponent />
      <div style={{ minHeight: "70vh" }}>
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
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/checkout" element={<PaymentPage />} />
        </Routes>
      </div>
      <FooterComponent />
    </BrowserRouter>
  );
};

export default SiteRouter;

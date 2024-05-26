import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useRef } from "react";
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

import useSession from "./hooks/useSession";
import useCart from "./hooks/useCart";

const SiteRouter = () => {
  const sessionCtx = useSession();
  const cartCtx = useCart();
  const isInitialRender = useRef(true);

  useEffect(() => {
    sessionCtx.setStoragedSession()
    cartCtx.setStoragedCart()
  }, []);

  //Use effect utilizado para guardar o carrinho toda vez que acontece uma mudança
  useEffect(() => {
    //Initial render garante que esse useEffect não seja executado no início da rederização
    //isso impede que um carrinho vazio seja guardado na memória do navegador
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    cartCtx.storeCart();
  }, [cartCtx.cartItems]);

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

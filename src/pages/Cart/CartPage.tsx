import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Typography, Button, Box, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CartPage: React.FC = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return <div>Loading...</div>;
  }

  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    clearCart,
  } = cartContext;

  const navigate = useNavigate();

  return (
    <Box sx={{ padding: "2rem" }}>
      <Typography variant="h4" gutterBottom color="primary.contrastText">
        Carrinho de Compras
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="body1" color="primary.contrastText">Seu carrinho está vazio.</Typography>
      ) : (
        <>
          {cartItems.map((item) => (
            <Card
              key={item.id}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "3rem",

                marginBottom: "1rem",
                border: "1px solid #ccc",
                padding: "1rem",

                maxWidth: "40rem",
              }}
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
              <Box>
                <Typography variant="body1">{item.title}</Typography>
                <Typography variant="body1">
                  R$ {item.price.toFixed(2)}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <Button
                    variant="outlined"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </Button>
                  <Typography variant="body1">{item.quantity}</Typography>
                  <Button
                    variant="outlined"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </Button>
                </Box>
              </Box>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => removeFromCart(item.id)}
                sx={{ height: "fit-content", alignSelf: "center" }}
              >
                Remover
              </Button>
            </Card>
          ))}
          <Box sx={{display: "flex", flexDirection: "column", gap: "2rem"}}>
            <Typography variant="h5" color="primary.contrastText">
              Total: R$ {getTotalPrice().toFixed(2)}
            </Typography>
            <Box sx={{ display: "flex", gap: "1rem" }}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate("/checkout")}
              >
                Finalizar Compra
              </Button>
              <Button variant="outlined" color="secondary" onClick={clearCart}>
                Limpar Carrinho
              </Button>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default CartPage;

import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CartPage: React.FC = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return <div>Loading...</div>;
  }

  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = cartContext;

  const navigate = useNavigate();

  

  return (
    <Box sx={{ padding: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Carrinho de Compras
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="body1">Seu carrinho está vazio.</Typography>
      ) : (
        <>
          {cartItems.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1rem',
                border: '1px solid #ccc',
                padding: '1rem',
              }}
            >
              {/*DEFINIR AQUI A IMAGEM DOS PRODUTOS AO LADO DOS PRODUTOS NO CARRINHO DE COMPRAS. PENSAR NUMA FORMA DE RETORNAR AS IMAGENS DO FIREBASE */}
              <img src={item.image} alt={item.title} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
              <div>
                <Typography variant="body1">{item.title}</Typography>
                <Typography variant="body1">R$ {item.price.toFixed(2)}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Button variant="outlined" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</Button>
                  <Typography variant="body1">{item.quantity}</Typography>
                  <Button variant="outlined" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
                </Box>
                <Button variant="contained" color="secondary" onClick={() => removeFromCart(item.id)}>
                  Remover
                </Button>
              </div>
            </Box>
          ))}
          <Typography variant="h5">Total: R$ {getTotalPrice().toFixed(2)}</Typography>
          <Button variant="contained" color="primary" onClick={() => navigate('/checkout')}>
            Finalizar Compra
          </Button>
          <Button variant="outlined" color="secondary" onClick={clearCart}>
            Limpar Carrinho
          </Button>
        </>
      )}
    </Box>
  );
};

export default CartPage;

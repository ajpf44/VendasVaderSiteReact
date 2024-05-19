import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const CartPage: React.FC = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return <div>carrinho não está disponível</div>;
  }

  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
  } = cartContext;

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity >= 0) {
      updateQuantity(id, quantity);
    }
  };

  return (
    <div>
      <h1>Seu Carrinho</h1>
      {cartItems.length === 0 ? (
        <p>Seu Carrinho Esta Vazio</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>Preço: R${item.price}</p>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) =>
                  handleQuantityChange(item.id, parseInt(e.target.value))
                }
                min="0"
              />
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <h2>Total: R${getTotalPrice()}</h2>
          <button onClick={clearCart}>Limpar Carrinho</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;

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
        <p>Seu Carrinho Está Vazio</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>Preço: R${item.price}</p>
              <div>
                <button
                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value))
                  }
                  min="1"
                  aria-label={`Quantidade de ${item.title}`}
                />
                <button
                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Remover</button>
            </div>
          ))}
          <h2>Total: R${getTotalPrice().toFixed(2)}</h2>
          <button onClick={clearCart}>Limpar Carrinho</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;

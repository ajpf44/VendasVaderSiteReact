import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const Cart: React.FC = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return <div>carrinho não está disponível</div>;
  }

  const { cartItems} = cartContext;

  // const handleAddToCart = (item: {
  //   id: number;
  //   name: string;
  //   price: number;
  // }) => {
  //   addToCart({ ...item, quantity: 1 });
  // };

  return (
    <div>
      <h2>Carrinho</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Preço: R${item.price}</p>
          <p>Quantidade: {item.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;

// Criei o componente Cart que vai mostrar os itens do carrinho.
// Utilizei o useContext para pegar o contexto do carrinho.
// Se o contexto não estiver disponível, mostro uma mensagem de erro.
// Desestruturei o contexto para pegar os itens do carrinho e a função de adicionar ao carrinho.
// Função para adicionar um item ao carrinho.

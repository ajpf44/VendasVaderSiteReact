import React, { createContext, useState, ReactNode, useContext, useEffect } from 'react';
import CartItem from '../types/CartInterface';

interface CartContextProps {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

export const CartContext = createContext<CartContextProps | null>(null);
  export const useCartContext = () => {
    const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === item.id);
      if (existingItem) {
        return prevItems.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      } else {
        return [...prevItems, {...item, quantity: 1}]; //Adicionando quantidade inicial de um produto
      }
    });

    storeCart()
  };

  const removeFromCart = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));

    storeCart()
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );

    storeCart()
  };

  const clearCart = () => {
    setCartItems([]);

    storeCart()
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getStoragedCart = async ()=>{
    const cartJSON = sessionStorage.getItem("myCart");
    console.log("Esse é meu carriinho: ");
    console.log(cartJSON);
    if (cartJSON == "" || !cartJSON) return;

    const myCart = await JSON.parse(cartJSON);
    setCartItems(myCart);
  }

  const storeCart = async ()=>{
    console.log("novo carrinho local")
    const cartJSON = JSON.stringify(cartItems);
    sessionStorage.setItem("myCart", cartJSON);
  }

  useEffect(()=>{
    getStoragedCart();
  },[])

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, getTotalPrice,getTotalItems }}>
      {children}
    </CartContext.Provider>
  );
};
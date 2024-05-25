import React, { createContext, useState, ReactNode } from 'react';
import CartItem from '../types/CartInterface';
import { getAllProducts } from '../services/products';

interface CartContextProps {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  setCartTestItems: ()=> void;
}

export const CartContext = createContext<CartContextProps | null>(null);

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
  };

  const removeFromCart = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const setCartTestItems =  async() =>{
    const products = await getAllProducts()

    const cart = products.map((product, index) => {
      return {
        id: index,
        title: product.title,
        price: Number(product.price),
        quantity: 1
      }
    } );

    setCartItems(cart)
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, getTotalPrice, setCartTestItems }}>
      {children}
    </CartContext.Provider>
  );
};
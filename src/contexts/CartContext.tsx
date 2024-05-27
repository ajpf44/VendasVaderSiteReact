import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
} from "react";
import CartItem from "../types/CartInterface";

interface CartContextProps {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
  setStoragedCart: ()=> Promise<CartItem[]|null>;
  storeCart: ()=>void;
}

export const CartContext = createContext<CartContextProps | null>(null);
export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
        i.id === item.id ? { ...i, quantity: item.quantity } : i
        );
      } else {
        return [...prevItems, item]; //Adicionando o item com a quantidade correta
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const setStoragedCart = async ():Promise<CartItem[]| null> => {
    const cartJSON = localStorage.getItem("myCart");
    if (cartJSON == "" || !cartJSON) return null;

    const myCart = await JSON.parse(cartJSON);
    setCartItems(myCart);

    return myCart;
  };

  const storeCart = async () => {
    console.log(cartItems);
    const cartJSON = JSON.stringify(cartItems);
    localStorage.setItem("myCart", cartJSON);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalPrice,
        getTotalItems,
        setStoragedCart,
        storeCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

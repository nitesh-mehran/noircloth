import { createContext, useContext, useEffect, useState } from "react";

// Create context
const CartContext = createContext();

// Access hook
export const useCart = () => useContext(CartContext);

// Provider
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem("cartItems");
    return stored ? JSON.parse(stored) : [];
  });

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) =>
    setCartItems((prev) => prev.filter((item) => item.id !== id));

  const changeQuantity = (id, type) =>
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "inc"
                  ? item.quantity + 1
                  : item.quantity > 1
                  ? item.quantity - 1
                  : 1,
            }
          : item
      )
    );

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, changeQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

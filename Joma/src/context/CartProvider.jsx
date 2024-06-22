import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import CartContext from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  useEffect(() => {
    const savedCart = Cookies.get("cart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    Cookies.set("cart", JSON.stringify(cartItems), { expires: 7 });
  }, [cartItems]);

  const addItemToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
    setIsCartVisible(true);
  };

  const removeItemFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const showCart = () => {
    console.log("Showing cart");
    setIsCartVisible(true);
  };
  const hideCart = () => setIsCartVisible(false);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        removeItemFromCart,
        clearCart,
        isCartVisible,
        showCart,
        hideCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

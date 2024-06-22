import { createContext, useContext } from "react";

const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearCart: () => {},
  isCartVisible: false,
  showCart: () => {},
  hideCart: () => {},
});

export const useCartContext = () => useContext(CartContext);

export default CartContext;

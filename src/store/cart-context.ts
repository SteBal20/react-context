import React from "react";
import { CartItemType } from "../components/Cart/Cart";

export type CartContextType = {
  items: CartItemType[];
  totalAmount: number;
  addItem: (item: CartItemType) => void;
  removeItem: (item: CartItemType) => void;
  clearCart: (item: CartItemType) => void;
};

const CartContext = React.createContext<CartContextType>({
  items: [],
  totalAmount: 0,
  addItem: (item: CartItemType) => {},
  removeItem: (item: CartItemType) => {},
  clearCart: (item: CartItemType) => {},
});

export default CartContext;

import React from "react";
import { CartItem } from "../components/Cart/Cart";

export type CartContextType = {
  items: CartItem[];
  totalAmount: number;
  addItem: (item: CartItem) => void;
  removeItem: (item: CartItem) => void;
};

const CartContext = React.createContext<CartContextType>({
  items: [],
  totalAmount: 0,
  addItem: (item: CartItem) => {},
  removeItem: (item: CartItem) => {},
});

export default CartContext;

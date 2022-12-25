import React, { useReducer } from "react";
import { CartItem } from "../components/Cart/Cart";

import CartContext, { CartContextType } from "./cart-context";

type CartState = {
  items: CartItem[];
  totalAmount: number;
};

type ActionType = {
  type: string;
  item: CartItem;
};

const defaultCartState: CartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state: CartState, action: ActionType) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  // if(action.type === 'REMOVE') {
  //   const findIndex =
  // }
  return defaultCartState;
};

const CartProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item: CartItem) => {
    dispatchCartAction({ type: "ADD", item });
  };

  const removeItemFromCartHandler = (item: CartItem) => {
    dispatchCartAction({ type: "REMOVE", item });
  };

  const cartContext: CartContextType = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

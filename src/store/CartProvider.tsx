import React, { useReducer } from "react";
import { CartItemType } from "../components/Cart/Cart";

import CartContext, { CartContextType } from "./cart-context";

type CartState = {
  items: CartItemType[];
  totalAmount: number;
};

type ActionType = {
  type: string;
  item: CartItemType;
};

const defaultCartState: CartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state: CartState, action: ActionType) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter(
        (item) => item.id !== action.item.id
      );
    } else {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item: CartItemType) => {
    dispatchCartAction({ type: "ADD", item });
  };

  const removeItemFromCartHandler = (item: CartItemType) => {
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

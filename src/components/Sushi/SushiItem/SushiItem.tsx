import React, { useContext } from "react";

import { SushiItemType } from "../../../models/sushiItem.type";
import classes from "./SushiItem.module.css";
import SushiItemForm from "./SushiItemForm";
import CartContext from "../../../store/cart-context";

const SushiItem: React.FC<{ item: SushiItemType }> = (props) => {
  const CartCtx = useContext(CartContext);

  const price = `$${props.item.price.toFixed(2)}`;

  const addToCartHandler = (amount: number) => {
    CartCtx.addItem({
      id: props.item.id,
      name: props.item.name,
      amount,
      price: props.item.price,
    });
  };

  return (
    <li className={classes.item}>
      <div>
        <h3>{props.item.name}</h3>
        <div className={classes.description}>
          {props.item.description}
        </div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <SushiItemForm
          id={props.item.id}
          onAddToCart={addToCartHandler}
        />
      </div>
    </li>
  );
};

export default SushiItem;

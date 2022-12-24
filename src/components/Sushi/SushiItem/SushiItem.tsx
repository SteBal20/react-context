import React from "react";

import { SushiItemType } from "../../../models/sushiItem.type";
import classes from "./SushiItem.module.css";
import SushiItemForm from "./SushiItemForm";

const SushiItem: React.FC<{ item: SushiItemType }> = (props) => {
  const price = `$${props.item.price.toFixed(2)}`;

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
        <SushiItemForm id={props.item.id} />
      </div>
    </li>
  );
};

export default SushiItem;

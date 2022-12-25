import classes from "./Cart.module.css";

import Modal from "../UI/Modal";

export type CartItem = {
  id: string;
  name: string;
  amount: number;
  price: number;
};

const Cart: React.FC<{ onHideCart: () => void }> = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "m1", name: "Sushi Mix", amount: 2, price: 45.98 }].map(
        (item) => (
          <li>{item.name}</li>
        )
      )}
    </ul>
  );

  return (
    <Modal onClick={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>45.98</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={props.onHideCart}
        >
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;

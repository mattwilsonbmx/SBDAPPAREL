import React from "react";
import styles from "../UI/Cart.module.css";
import Modal from "../UI/Modal";

const Cart = ({ onHideClick }) => {
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {[{ key: "c1", name: "", amount: 2, price: 13 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onHideClick={onHideClick}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={onHideClick}>
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;

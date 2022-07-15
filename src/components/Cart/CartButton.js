import React from "react";
import styles from "../UI/CartButton.module.css";
import CartIcon from "./CartIcon";

const CartButton = ({ label }) => (
  <button className={styles.button}>
    <span>
      <CartIcon />
    </span>
    <span>{label}</span>
    <span className={styles.badge}>0</span>
  </button>
);

export default CartButton;

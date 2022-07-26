import React from "react";
import styles from "../UI/CartButton.module.css";
import CartIcon from "./CartIcon";

const CartButton = ({ label, onCartClick }) => (
  <button className={styles.button} onClick={onCartClick}>
    <span>
      <CartIcon />
    </span>
    <span>{label}</span>
    <span className={styles.badge}>0</span>
  </button>
);

export default CartButton;

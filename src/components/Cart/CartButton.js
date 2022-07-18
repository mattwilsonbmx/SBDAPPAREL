import React, { useContext } from "react";
import styles from "../UI/CartButton.module.css";
import CartContext from "./cart-context";
import CartIcon from "./CartIcon";

const CartButton = ({ label, onCartClick }) => {
  const cartCtx = useContext(CartContext);

  return (
    <button className={styles.button} onClick={onCartClick}>
      <span>
        <CartIcon />
      </span>
      <span>{label}</span>
      <span className={styles.badge}>{cartCtx.items.length}</span>
    </button>
  );
};

export default CartButton;

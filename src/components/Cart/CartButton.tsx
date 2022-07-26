import { useContext } from "react";
import styles from "../UI/CartButton.module.css";
import CartContext from "./cart-context";
import CartIcon from "./CartIcon";

const CartButton = ({ label, onCartClick }) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  return (
    <button className={styles.button} onClick={onCartClick}>
      <span>
        <CartIcon />
      </span>
      <span>{label}</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default CartButton;

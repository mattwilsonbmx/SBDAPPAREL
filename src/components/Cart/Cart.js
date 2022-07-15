import styles from "../UI/Cart.module.css";

const Cart = () => {
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {[{ id: "c1", name: "", amount: 2, price: 13 }].map(item => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <div>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]}>Close</button>
        <button className={styles.button}>Order</button>
      </div>
    </div>
  );
};

export default Cart;

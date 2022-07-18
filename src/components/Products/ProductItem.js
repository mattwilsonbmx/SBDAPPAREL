import { useContext } from "react";

import ProductItemForm from "./ProductItemForm";
import styles from "../UI/ProductItem.module.css";
import CartContext from "../Cart/cart-context";

const ProductItem = ({ name, price, id }) => {
  const cartCtx = useContext(CartContext);
  const priceof = `£${price.toFixed()}`;

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price
    });
  };

  return (
    <li className={styles.product}>
      <div>
        <h3>{name}</h3>
        <div className={styles.price}>{priceof}</div>
      </div>
      <div>
        <ProductItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default ProductItem;

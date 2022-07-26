import React from "react";
import ProductItemForm from "./ProductItemForm";
import styles from "../UI/ProductItem.module.css";
import CartContext from "../Cart/cart-context";

const ProductItem = ({ name, price, id }) => {
  const cartCtx = useContext(CartContext);
  const priceof = `£${price.toFixed()}`;

type Props = {
  name: string;
  price: number;
};

const ProductItem = ({ name, price }: Props) => {
  const priceof = `£${price}`;

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

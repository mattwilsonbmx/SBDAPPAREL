import React, { useContext } from "react";
import ProductItemForm from "./ProductItemForm";
import styles from "../UI/ProductItem.module.css";
import CartContext from "../Cart/cart-context";

type Props = {
  name: string;
  price: number;
  id?: number;
};

const ProductItem = ({ name, price, id }: Props) => {
  const cartCtx = useContext(CartContext);
  const priceof = `£${price.toFixed()}`;

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

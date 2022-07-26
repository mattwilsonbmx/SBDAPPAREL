import React from "react";
import ProductItemForm from "./ProductItemForm";
import styles from "../UI/ProductItem.module.css";

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
        <ProductItemForm />
      </div>
    </li>
  );
};

export default ProductItem;

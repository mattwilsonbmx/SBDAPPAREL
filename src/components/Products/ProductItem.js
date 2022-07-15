import ProductItemForm from "./ProductItemForm";
import styles from "../UI/ProductItem.module.css";

const ProductItem = ({ name, price }) => {
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

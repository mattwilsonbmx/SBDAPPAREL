import Input from "./Input";

import styles from "../UI/ProductItemForm.module.css";

const ProductItemForm = ({ id }) => {
  const addToCartHandler = () => {};

  return (
    <form className={styles.form}>
      <Input
        label="Amount"
        placeholder="1"
        input={{
          id: "amount" + id,
          type: "number"
        }}
      />
      <div>
        <button onClick={addToCartHandler}>+ Add</button>
      </div>
    </form>
  );
};

export default ProductItemForm;

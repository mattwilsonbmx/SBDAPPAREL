import React from "react";
import Input from "./Input";

import styles from "../UI/ProductItemForm.module.css";

type Props = {
  id?: number;
};

const ProductItemForm = ({ id }: Props) => {
  const addToCartHandler = () => {};

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        placeholder="1"
        input={{
          id: "amount" + id,
          type: "number",
        }}
      />
      <div>
        <button>+ Add</button>
        {!amountIsValid && <p>Please enter a valid amount</p>}
      </div>
    </form>
  );
};

export default ProductItemForm;

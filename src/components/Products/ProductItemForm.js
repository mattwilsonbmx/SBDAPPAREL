import { useRef, useState } from "react";
import Input from "./Input";

import styles from "../UI/ProductItemForm.module.css";

const ProductItemForm = ({ id, onAddToCart }) => {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = e => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        placeholder="1"
        input={{
          id: "amount" + id,
          type: "number"
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

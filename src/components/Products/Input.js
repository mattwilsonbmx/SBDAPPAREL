import React from "react";
import styles from "../UI/Input.module.css";

const Input = React.forwardRef(({ label, placeholder, input }, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={input.id}>{label}</label>
      <input ref={ref} {...input} placeholder={placeholder}></input>
    </div>
  );
});

export default Input;

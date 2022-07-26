import React from "react";
import styles from "../UI/Input.module.css";

type Props = {
  label?: string;
  placeholder?: string;
  input?: any;
};

const Input = ({ label, placeholder, input }: Props) => {
  return (
    <div className={styles.input}>
      <label htmlFor={input.id}>{label}</label>
      <input {...input} placeholder={placeholder}></input>
    </div>
  );
};

export default Input;

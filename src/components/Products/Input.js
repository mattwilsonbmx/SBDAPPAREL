import styles from "../UI/Input.module.css";

const Input = ({ label, placeholder, input }) => {
  return (
    <div className={styles.input}>
      <label htmlFor={input.id}>{label}</label>
      <input {...input} placeholder={placeholder}></input>
    </div>
  );
};

export default Input;

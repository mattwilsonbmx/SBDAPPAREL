import React from "react";
import styles from "../UI/ProductSummary.module.css";

const ProductSummary = () => {
  const heading = "Authentic Powerlifting Gear, Crafted For Heavy Lifting";
  const para = "Shop all our limited edition collections now!";

  return (
    <section className={styles.summary}>
      <h2 className={styles.summary.h2}>{heading}</h2>
      <p>{para}</p>
    </section>
  );
};

export default ProductSummary;

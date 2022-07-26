import React from "react";
import styles from "../UI/AvailableProducts.module.css";
import Card from "../UI/Card";
import ProductItem from "./ProductItem";

const AvailableProducts = () => {
  const dummyProducts = [
    {
      id: 1,
      name: "Defy Powerlifting Singlet",
      price: 79.99,
    },
    {
      id: 2,
      name: "Defy Weightlifting Knee Sleeves",
      price: 64.99,
    },
    {
      id: 3,
      name: "Defy Wrist Wraps",
      price: 32.99,
    },
  ];

  const availableProducts = dummyProducts.map((item) => (
    <ProductItem key={item.id} name={item.name} price={item.price} />
  ));

  return (
    <section className={styles.products}>
      <Card>
        <ul>{availableProducts}</ul>
      </Card>
    </section>
  );
};

export default AvailableProducts;

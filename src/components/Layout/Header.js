import React from "react";
import CartButton from "../Cart/CartButton";

import styles from "../UI/Header.module.css";

const label = "Your Cart";
const heading = "SBD Apparel";

const Header = () => (
  <React.Fragment>
    <header className={styles.header}>
      <h1>{heading}</h1>
      <CartButton label={label} />
    </header>
    <div className={styles["main-image"]}>
      <img
        className={styles["main-image"].img}
        src="https://cdn.shopify.com/s/files/1/0550/8949/6221/files/BELT-FRONT-VIEW-shopify-2880x1620_3b849807-71d9-48ac-baaf-13b0f834efa3_1400x.jpg?v=1619529640"
        alt=""
      />
    </div>
  </React.Fragment>
);

export default Header;

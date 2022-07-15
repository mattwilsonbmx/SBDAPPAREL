import React, { useState, Fragment } from "react";
import Cart from "./components/Cart/Cart.js";
import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <Fragment>
      {showCart === true && <Cart onHideClick={hideCartHandler} />}
      <Header onCartClick={showCartHandler} />
      <main>
        <Products />
      </main>
    </Fragment>
  );
}

export default App;

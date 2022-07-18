import React, { useState } from "react";
import Cart from "./components/Cart/Cart.js";
import CartProvider from "./components/Cart/CartProvider.js";
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
    <CartProvider>
      {showCart === true && <Cart onHideClick={hideCartHandler} />}
      <Header onCartClick={showCartHandler} />
      <main>
        <Products />
      </main>
    </CartProvider>
  );
}

export default App;

import React from "react";
import "./checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Header from "./Header";
import Footer from "./Footer";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div>
      <Header />
      <div className="checkout">
        <div className="checkout__left">
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;

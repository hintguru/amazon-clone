import React from "react";
import "./product.css";
import { useStateValue } from "./StateProvider";

const Product = ({ id, title, image, btntag, price }) => {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        btntag: btntag,
        price: price,
      },
    });
  };
  return (
    <div className="product__buy">
      <div className="product__info" key={id}>
        <h4 className="product__heading">{title}</h4>
        <img className="product__image" src={image} alt="" />
        <p className="product__price"> &#8377; {price}</p>
        <button onClick={addToBasket} className="product__btn" href="#">
          {btntag}
        </button>
      </div>
    </div>
  );
};

export default Product;

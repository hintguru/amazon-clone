import React from "react";
import "./imageSlider.css";

const ImageSliderContent = ({ image, price }) => {
  return (
    <div className="imageSliderContent">
      <div className="silder__content">
        <img src={image} alt="" />
        <p className="imageSliderContent__price">&#8377; {price}</p>
      </div>
    </div>
  );
};

export default ImageSliderContent;

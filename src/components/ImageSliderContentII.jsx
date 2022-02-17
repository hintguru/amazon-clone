import React from "react";
import "./imageSlider.css";

const ImageSliderContent = ({ image }) => {
  return (
    <div className="imageSliderContent">
      <div className="silder__content">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default ImageSliderContent;

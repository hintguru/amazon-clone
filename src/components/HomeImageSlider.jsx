import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./homeImageSlider.css";

const PrevArrow = ({ onClick }) => {
  return <div className="prev__btn" onClick={onClick} />;
};
const NextArrow = ({ onClick }) => {
  return <div className="next__btn" onClick={onClick} />;
};

const ImageSlider = () => {
  let setting = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <Slider className="homeimage__slider" {...setting}>
      <div className="homeimage">
        <img
          src="https://m.media-amazon.com/images/I/71QuUk6VrwL._SX3000_.jpg"
          alt=""
        />
      </div>
      <div className="homeimage">
        <img
          src="https://m.media-amazon.com/images/I/51lo3-yD8uL._SX3000_.jpg"
          alt=""
        />
      </div>
      <div className="homeimage">
        <img
          src="https://m.media-amazon.com/images/I/613rQGYBEPL._SX3000_.jpg"
          alt=""
        />
      </div>
      <div className="homeimage">
        <img
          src="https://m.media-amazon.com/images/I/61FuWeCuGCL._SX3000_.jpg"
          alt=""
        />
      </div>
    </Slider>
  );
};

export default ImageSlider;

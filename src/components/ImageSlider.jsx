import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./imageSlider.css";
import ImageSliderContent from "./ImageSliderContent";

const PrevArrow = ({ classNames, style, onClick }) => {
  return <div className="prev__btn" onClick={onClick} />;
};
const NextArrow = ({ classNames, style, onClick }) => {
  return <div className="next__btn" onClick={onClick} />;
};

const ImageSlider = () => {
  let setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="slider">
      <h4 className="slider__heading">Today's Deals</h4>
      <Slider className="imageSlider" {...setting}>
        <ImageSliderContent
          image="https://m.media-amazon.com/images/I/31NmWpDfMZL._AC_SY400_.jpg"
          price="1299"
        />
        <ImageSliderContent
          image="https://m.media-amazon.com/images/I/41ezRvTwcaL._AC_SY400_.jpg"
          price="7999"
        />
        <ImageSliderContent
          image="https://m.media-amazon.com/images/I/41VPAkJ3v-L._AC_SY400_.jpg"
          price="599"
        />
        <ImageSliderContent
          image="https://m.media-amazon.com/images/I/51ivRBHcH6L._AC_SY400_.jpg"
          price="173-1000"
        />
        <ImageSliderContent
          image="https://m.media-amazon.com/images/I/41yXyI+-9IL._AC_SY400_.jpg"
          price="1000"
        />
        <ImageSliderContent
          image="https://m.media-amazon.com/images/I/41J8i1exC0L._AC_SY400_.jpg"
          price="1099-5999"
        />
      </Slider>
    </div>
  );
};

export default ImageSlider;

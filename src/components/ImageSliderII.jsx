import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./imageSlider.css";
import ImageSliderContentII from "./ImageSliderContentII";

const PrevArrowII = ({ classNames, style, onClick }) => {
  return <div className="prev__btn" onClick={onClick} />;
};
const NextArrowII = ({ classNames, style, onClick }) => {
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
    nextArrow: <NextArrowII />,
    prevArrow: <PrevArrowII />,
  };
  return (
    <div className="slider">
      <h4 className="slider__heading">More everyday essentials to explore</h4>
      <Slider className="imageSlider" {...setting}>
        <ImageSliderContentII image="https://m.media-amazon.com/images/I/71fHrwfEtZL._AC_SY400_.jpg" />
        <ImageSliderContentII image="https://m.media-amazon.com/images/I/41kMdzrTljS._AC_SY400_.jpg" />
        <ImageSliderContentII image="https://m.media-amazon.com/images/I/71viBH-vuhL._AC_SY400_.jpg" />
        <ImageSliderContentII image="https://m.media-amazon.com/images/I/81bJLNEzJHS._AC_SY400_.jpg" />
        <ImageSliderContentII image="https://m.media-amazon.com/images/I/41YSzRsxKsS._AC_SY400_.jpg" />
        <ImageSliderContentII image="https://m.media-amazon.com/images/I/71ndYDyvgZL._AC_SY400_.jpg" />
      </Slider>
    </div>
  );
};

export default ImageSlider;

import React from "react";
import "./home.css";
import Header from "./Header";
import Feacture from "./Feacture";
import Product from "./Product";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import ImageSlider from "./ImageSlider";
import ImageSliderII from "./ImageSliderII";
import HomeImageSlider from "./HomeImageSlider";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="home">
        <HomeImageSlider />
        <div className="home__container">
          <div className="home__contain">
            <div className="home__row">
              <Feacture
                id="1"
                title="up to 70% off | Electronics clearance..."
                image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/May21/V238940049_IN_PC_BAU_Edit_Creation_Laptops2X._SY608_CB667377204_.jpg"
                btntag="See more"
              />
              <Feacture
                id="2"
                title="Pay your credit card bills on Amazon"
                image="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Boson/Sid/CCBP/DesktopGateway_CategoryCard_758X608_CCBP._SY608_CB413372299_.jpg"
                btntag="Pay now"
              />
              <Feacture
                id="3"
                title="Up to 60% off | Fitness essentials to set up your..."
                image="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Sports/GW_Desktop/1199101_758x608_New_compressed._SY608_CB448277514_.jpg"
                btntag="See more"
              />
              <div className="lastCard">
                <div className="login__home">
                  <h3>Sign in for your best experience</h3>
                  <div className="login__btn">
                    <NavLink to="/login">
                      <button className="login__btn">Sign in securly</button>
                    </NavLink>
                  </div>
                </div>
                <div className="pic">
                  <img
                    src="https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="home__row">
              <Feacture
                id="4"
                title="Automotive essentials | Up to 60% off"
                image="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare2x._SY232_CB410830552_.jpg"
                btntag="See more"
              />
              <Feacture
                id="5"
                title="For the perfect birthday celebration..."
                image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/BirthdayStore/GW/Artboard_1QC1_2x._SY232_CB663432337_.jpg"
                btntag="Explore all"
              />
              <Feacture
                id="6"
                title="Make your parenting journey easier"
                image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Schoolfromhome/PCQC/2X/0-2_years_baby_essentials._SY232_CB667654988_.jpg"
                btntag="See more"
              />
              <Feacture
                id="7"
                title="Professional tools, testing & more"
                image="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/med2x._SY232_CB424026091_.jpg"
                btntag="See more"
              />
            </div>
          </div>
          <ImageSliderII />
          <div className="home__row">
            <Product
              id="8"
              title="Checkout Headphones | Up to 20% off"
              image="https://m.media-amazon.com/images/I/71I+UCgT3qL._AC_SY400_.jpg"
              btntag="Add to cart"
              price="1000"
            />
            <Product
              id="9"
              title="The best mobiles | Up to 10% off"
              image="https://m.media-amazon.com/images/I/41iHN9Y07cS._AC_SY400_.jpg"
              btntag="Add to cart"
              price="9999"
            />
            <Product
              id="10"
              title="Try out smartwatches | Up to 10% off"
              image="https://m.media-amazon.com/images/I/61W4meSdVQL._AC_SY400_.jpg"
              btntag="Add to cart"
              price="500"
            />
          </div>
          <div className="home__row">
            <Product
              id="11"
              title="Upgrade your kitchen"
              image="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Kitchen-appliances-QC-PC---372x232---B08L7BF3RV._SY232_CB667322011_.jpg"
              btntag="Add to cart"
              price="50000"
            />
            <Product
              id="12"
              title="Experince of best musics"
              image="https://m.media-amazon.com/images/I/31mCcX7rQlS._AC_SY400_.jpg"
              btntag="Add to cart"
              price="1299"
            />
            <Product
              id="13"
              title="Upgrade your Tv"
              image="https://images-eu.ssl-images-amazon.com/images/G/31/img19/BAU_BTF/Sheldon_PCQC_2x_GameX._SY232_CB647541812_.jpg"
              btntag="Add to cart"
              price="5999"
            />
          </div>
          <ImageSlider />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

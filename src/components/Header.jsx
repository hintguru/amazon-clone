import React from "react";
import { NavLink } from "react-router-dom";
import { auth } from "./dataFirebase";
import "./header.css";
import cart from "./shopping-cart.png";
import { useStateValue } from "./StateProvider";

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <NavLink to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </NavLink>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <img
          className="header__searchIcon"
          src="https://cdn-icons-png.flaticon.com/512/151/151773.png"
          alt=""
        />
      </div>
      <div className="header__nav">
        <NavLink to="/login" className="header__link">
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </NavLink>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">your</span>
          <span className="header__optionLineTwo">prime</span>
        </div>
        <NavLink to="/checkout">
          <div className="header__optionBasket">
            <img className="header__cart" src={cart} alt="" />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;

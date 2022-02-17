import React from "react";
import "./footer.css";
import FooterCards from "./FooterCards";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__up">
          <FooterCards
            title="Get to Know Us"
            linka="About Us"
            linkb="Careers"
            linkc="Press Releases"
            linkd="Amazon Cares"
          />
          <FooterCards
            title="Connect with Us"
            linka="Facebook"
            linkb="Twitter"
            linkc="Instagram"
            linkd="Youtube"
          />
          <FooterCards
            title="Make Money with Us"
            linka="Sell on Amazon"
            linkb="Sell under Amazon Accelerator"
            linkc="Amazon Global Selling"
            linkd="Become an Affiliate"
          />
          <FooterCards
            title="Let Us Help You"
            linka="COVID-19 and Amazon"
            linkb="Your Account"
            linkc="Returns Centre"
            linkd="Amazon Assistant"
          />
        </div>
        <div className="footer__bottom">
          <img
            className="footer__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
          <p className="footer__bottomLine">
            © 1996-2022, Amazon.com, Inc. or its affiliates
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

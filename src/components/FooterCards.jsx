import React from "react";
import "./footer.css";

const FooterCards = ({ title, linka, linkb, linkc, linkd }) => {
  return (
    <div className="footer__content">
      <h4 className="footer__heading">{title}</h4>
      <div className="footer__links">
        <a href="#">{linka}</a>
        <a href="#">{linkb}</a>
        <a href="#">{linkc}</a>
        <a href="#">{linkd}</a>
      </div>
    </div>
  );
};

export default FooterCards;

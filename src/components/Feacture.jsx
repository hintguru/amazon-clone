import React from "react";
import "./feacture.css";

const Feacture = ({ id, title, image, btntag }) => {
  return (
    <div className="feacture">
      <div className="feacture__info" key={id}>
        <h4 className="feacture__heading">{title}</h4>
        <img className="feacture__image" src={image} alt="" />
        <a className="feacture__link" href="#">
          {btntag}
        </a>
      </div>
    </div>
  );
};

export default Feacture;

import React from "react";
import { defaultImageUrl } from "../utils/baseUrl";
import "./SingleMenu.css";

const SingleMenu = (props) => {
  const { name, menuPhotoUrl, price } = props;

  return (
    <>
      <div className="item-image-container">
        <img src={menuPhotoUrl || defaultImageUrl} alt="mala" />
      </div>
      <div className="item-info-container">
        <h4 className="item-name">{name}</h4>
        <div className="item-price">{price} MMK</div>
      </div>
    </>
  );
};

export default SingleMenu;

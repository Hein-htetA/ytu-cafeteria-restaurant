import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faBars,
  faBasketShopping,
  faCartArrowDown,
  faCartPlus,
  faCartShopping,
  faSuitcase,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faBell } from "@fortawesome/free-regular-svg-icons";
import React, { useState } from "react";
import "./index.css";
import NavLinks from "./NavLinks";
import { useUiContext, useUserContext } from "../../Context/UserContext";
import { Link } from "react-router-dom";
import { useOrderContext } from "../../Context/OrderContext";
import { useCartContext } from "../../Context/CartContext";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const openNavbar = () => {
    setNavbar(true);
  };

  const closeNavbar = () => {
    setNavbar(false);
  };

  const toggleNavbar = () => {
    setNavbar((navbar) => !navbar);
  };

  const { data } = useOrderContext();
  const { online } = useUserContext();
  const { totalCount } = useCartContext();

  const newOrderCount = data.filter(
    (order) => order.orderState === "newOrder"
  ).length;
  return (
    <>
      <nav className="nav-container">
        <button className="nav-button" onClick={toggleNavbar}>
          <FontAwesomeIcon
            icon={faXmark}
            className={navbar ? "fa-xmark" : "fa-xmark fa-xmark-hidden"}
          />
          <FontAwesomeIcon
            icon={faBars}
            className={navbar ? "fa-bar fa-bar-hidden" : "fa-bar"}
          />
        </button>
        <div className="icon-placeholder"></div>
        <div className="logo-text-container">
          <p className="primary-logo-text">YTU</p>
          <p className="secondary-logo-text">cafeteria</p>
        </div>

        <div className="envolope-container">
          <div className="envolope-link-container">
            <Link
              to="myAccount/cart/cartMenu"
              className="envolope-link"
              onClick={closeNavbar}
            >
              <FontAwesomeIcon icon={faCartPlus} className={"envolope-icon"} />
              <span className="new-order-count">{totalCount}</span>
            </Link>
            <Link
              to="myAccount/newOrder"
              className="envolope-link"
              onClick={closeNavbar}
            >
              <FontAwesomeIcon icon={faEnvelope} className={"envolope-icon"} />
              <span className="new-order-count">{newOrderCount}</span>
            </Link>
          </div>
          <div className="online-indicator">
            <div className={online ? "circle-icon" : "circle-icon-offline"}>
              .
            </div>
            <p
              className={
                online ? "online-indicator-text" : "offline-indicator-text"
              }
            >
              {online ? "ONLINE" : "OFFLINE"}
            </p>
          </div>
        </div>
        <NavLinks navbar={navbar} closeNavbar={closeNavbar} />
      </nav>
      <div className="logo-text-space"></div>
    </>
  );
};

export default Navbar;

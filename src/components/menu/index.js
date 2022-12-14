import React from "react";
import { useMenuContext } from "../../Context/MenuContext";
import SingleMenu from "./SingleMenu";
import { Link, useParams } from "react-router-dom";
import "./index.css";
import MenuLoading from "./MenuLoadingError/MenuLoading";
import MenuError from "./MenuLoadingError/MenuError";
import NewSingleMenu from "./NewSingleMenu";

const Menu = () => {
  const { data, menuLoading, menuError, setRestaurantState } = useMenuContext();
  const { menuCategory } = useParams();

  //console.log("category", menuCategory);
  return (
    <div className="single-category-container">
      <h2 className="category-title">
        {menuCategory === "curry"
          ? "rice & curries"
          : menuCategory === "sideDish"
          ? "side dishes"
          : menuCategory === "drink"
          ? "snacks & drinks"
          : menuCategory === "signature"
          ? "signature dishes"
          : "additional items"}
      </h2>
      <div className="single-menu-container">
        {menuLoading ? (
          <MenuLoading />
        ) : menuError ? (
          <MenuError setRestaurantState={setRestaurantState} />
        ) : (
          <>
            {data
              .filter((menu) => menu.category === menuCategory)
              .map((menu) => (
                <Link
                  key={menu._id}
                  to={`../${menu.category}/${menu._id}`}
                  className="menu-link"
                >
                  <SingleMenu {...menu} />
                </Link>
              ))}
            <NewSingleMenu />
          </>
        )}
      </div>
    </div>
  );
};

export default Menu;

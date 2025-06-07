import React, { useEffect } from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu flex flex-col gap-5 " id="explore-menu">
      <h1 className="font-[600] text-[#262626] !mt-6 text-2xl">Explore Menu</h1>
      <p className="explore-menu-text max-w-3/5 ">
        Choose from a diverse menu featuring a variety of dishes crafted with
        finest ingredients. Experience a culinary journey that will tantalize
        your taste buds and leave you craving for more.
      </p>
      <div className="explore-menu-list explore-menu-list-item flex justify-between items-center gap-[30px] text-center m-5 overflow-x-scroll rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.15)] !p-2 bg-[#fdf6f3]">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="menu-item"
            >
              <img
                src={item.menu_image}
                alt=""
                className={`w-[7.5vw] min-w-[80px] rounded-full !p-[2px] transition-shadow duration-300 ${
                  category === item.menu_name
                    ? "border-[3px] border-[orangered] shadow-[0_4px_12px_rgba(255,69,0,0.4)] hover:shadow-[0_6px_16px_rgba(255,69,0,0.5)]"
                    : "shadow-[0_2px_6px_rgba(0,0,0,0.15)] hover:shadow-[0_10px_10px_rgba(0,0,0,0.2)]"
                }`}
              />
              <p className="!text-[max(1.25vw,12px)] mt-[10px] cursor-pointer">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="!my-[10px] !mx-[0] h-0.5 bg-gray-300 border-none" />
    </div>
  );
};

export default ExploreMenu;

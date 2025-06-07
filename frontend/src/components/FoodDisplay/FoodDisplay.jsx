import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext.jsx";
import FoodItem from "../FoodItem/FoodItem";
const FoodDisplay = ({ category }) => {
  const { food_list, url } = useContext(StoreContext);
  return (
    <div
      className="food-display flex flex-col gap-5 !m-[30px]"
      id="food-display"
    >
      <h2 className="font-[600] text-[#262626] !mt-6 !text-[max(2vw,24px)] ">
        Top dishes near you
      </h2>
      <div className="food-display-list !mt-[20px] ">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                image={`${url}/images/${item.image}`}
                description={item.description}
                price={item.price}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;

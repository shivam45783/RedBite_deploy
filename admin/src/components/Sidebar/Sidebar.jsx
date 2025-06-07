import React from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";
const SideBar = () => {
  return (
    <div className="sidebar w-[18%] min-h-screen border-[1.5px] border-[#a9a9a9] border-t-0">
      <div className="sidebar-options !pt-[50px] flex flex-col !pl-[20%] gap-1.5 text-[max(1.9vh,10px)]">
        <NavLink to="/add" className="sidebar-option">
          <img src={assets.add_icon} alt=""/>
          <p>Add Items</p>
        </NavLink>
        <NavLink to="/list" className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <p>List Items</p>
        </NavLink>
        <NavLink to="/orders" className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;

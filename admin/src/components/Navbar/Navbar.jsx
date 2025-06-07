import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
const Navbar = () => {
  return (
    <div className="navbar flex justify-between items-center !py-[8px] !px-[4%]">
      <div className="logo_admin flex flex-col">
        <img src={assets.logo} alt="" className="logo w-[max(30px,4%)]" />
        <h1 className="font-[600] text-[#262626] ">Admin</h1>
      </div>

      <img src={assets.profile_image} alt="" className="profile w-[40px]" />
    </div>
  );
};

export default Navbar;

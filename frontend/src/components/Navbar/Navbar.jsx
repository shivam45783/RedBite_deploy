import React, { useEffect } from "react";
import { useState, useContext } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets.js";
import { StoreContext } from "../../context/StoreContext";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  const { cartItems, token, setToken, userDetails, dataFetching, setDataFetching } = useContext(StoreContext);
  const navigate = useNavigate();
  const [showDrop, setShowDrop] = useState(false);
  const checkEmptyCart = () => {
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        return false;
      }
    }
    return true;
  };
  const emptyCartNotify = () => {
    toast("Your cart is empty", {
      icon: "🛒",
      duration: 3000,
      className: "toast",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };
  const logout = ()=>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  }
  // useEffect(()=>{
  //   console.log(showDrop);
    
  // },[showDrop])
  return (
    <>
      <div className="navbar !p-4 flex justify-between items-center gap-4 " id="navbar">
        <Link to="/home">
          <img
            src={assets.logo_white_no_bg}
            alt=""
            className="w-[60px] md:w-[90px] logo"
          />
        </Link>
        <ul
          className="navbar-menu flex gap-5 text-gray-500 text-[12px] md:text-[15px] nav list-none 
        "
        >
          <Link
            to="/home"
            className={menu === "Home" ? "active" : ""}
            onClick={() => setMenu("Home")}
          >
            Home
          </Link>
          <a
            className={menu === "Menu" ? "active" : ""}
            onClick={() => setMenu("Menu")}
            href="#explore-menu"
          >
            Menu
          </a>
          <a
            className={menu === "Contact-Us" ? "active" : ""}
            onClick={() => setMenu("Contact-Us")}
            href="#footer"
          >
            Contact-Us
          </a>
        </ul>
        <div className="navbar-right flex items-center gap-[40px]  ">
          <img
            src={assets.search_icon}
            alt=""
            className="w-[18px] cursor-pointer"
          />
          <div className="relative navbar-search-icon ">
            <img
              src={assets.basket_icon}
              alt=""
              className="min-w-[18px] max-w-[18px] cursor-pointer"
              onClick={() => {
                if (checkEmptyCart()) {
                  emptyCartNotify();
                  return;
                }
                navigate("/cart");
              }}
            />

            <div
              className={`dot absolute min-w-[10px] min-h-[10px] bg-red-500 rounded-[5px] top-[-8px] right-[-8px] ${
                Object.keys(cartItems).length === 0 ? "hidden" : ""
              }`}
            ></div>
          </div>
          {!token ? (
            <button
              className="bg-transparent text-[14px] text-gray-500 border-[1px] border-red-500 rounded-2xl cursor-pointer !px-8 !py-2 transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-amber-50"
              onClick={() => {
                window.location.href = "/";
              }}
            >
              Sign In
            </button>
          ) : (
            <div className="navbar-profile relative w-[16px] ">
              <img
                src={assets.profile_icon}
                alt=""
                onClick={() => setShowDrop((prev) => !prev)}
                className="cursor-pointer"
              />
              <ul className={`navbar-profile-dropdown absolute  ${showDrop ? "show-dropdown" : "hidden-drop"}`}>
                <li onClick={() => navigate("/myorders")}>
                  <img src={assets.bag_icon} alt="" />
                  <p>Orders</p>
                </li>
                <hr />
                <li onClick={logout}>
                  <img src={assets.logout_icon} alt="" />
                  <p>Logout</p>
                </li>
                <hr />
                <li onClick={() => navigate("/user")}>
                  <img src={assets.people} alt="" />
                  <p>Profile</p>
                </li>
              </ul>
              <p></p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;

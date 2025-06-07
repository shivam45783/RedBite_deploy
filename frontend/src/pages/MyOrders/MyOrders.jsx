import React from "react";
import "./MyOrders.css";
import { useState } from "react";
import { useContext, useEffect } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { assets } from "../../assets/assets";

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(
      `${url}/api/order/userorders`,
      {},
      {
        headers: { token },
      }
    );
    setData(response.data.data);
    // console.log(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);
  if (data.length > 0) {
    return (
      <div className="my-orders !mt-[50px] !mx-0">
        <h1>My Orders</h1>
        <div className="myorder-container flex flex-col gap-[20px] !mt-[30px] ">
          {data.map((order, index) => {
            return (
              <div
                key={index}
                className={`my-orders-order ${
                  order.status === "Food Processing"
                    ? "processing"
                    : order.status === "Out for Delivery"
                    ? "delivery"
                    : order.status === "Delivered"
                    ? "delivered"
                    : ""
                }`}
              >
                <img src={assets.parcel_icon} alt="" className="w-[50px]" />
                <p>
                  {order.items.map((item, index) => {
                    if (index === order.items.length - 1) {
                      return item.name + " x" + item.quantity;
                    } else {
                      return item.name + " x" + item.quantity + ", ";
                    }
                  })}
                </p>
                <p>₹{order.amount}.00</p>
                <p>Items: {order.items.length}</p>
                <p>
                  <span className="text-[#FF4500]">&#x25cf;</span>
                  <b className="text-[#454545] font-[500]">{order.status}</b>
                </p>

                <button
                  className={`border-none cursor-pointer !py-[12px] !px-1 bg-red-500 rounded-[10px] text-white`}
                >
                  Track Order
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="no-order-container" id="no-order-container">
        <h1>No Orders Found</h1>
        <p>You have not placed any orders</p>
        <p className="dishes">
          Explore the diverse range of dishes which will not only satisfy your
          cravings but also leave you craving for more
        </p>
      </div>
    );
  }
  ;
};

export default MyOrders;

import React, { useEffect } from "react";
import "./List.css";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const List = ({ url }) => {
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    // console.log(response.data);

    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error(response.data.message);
    }
  };

  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, { id: foodId });

    if (response.data.success) {
      toast.success(response.data.message);
      await fetchList();
    } else {
      toast.error(response.data.message);
    }
  };
  const updateFood = (foodId) => {
    navigate(`/update/${foodId}`);
  };
  useEffect(() => {
    fetchList();
  }, []);
  return (
    <div className="list add col w-[80vw] !mx-auto">
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title bg-[#f9f9f9]">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Update</b>
          <b>Remove</b>
        </div>
        {list.map((item, index) => (
          <div className="list-table-format fade-in" key={index}>
            <img
              src={`${url}/images/` + item.image}
              alt=""
              className="w-[20vw] object-cover"
            />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>₹{item.price}</p>
            <button className="update" onClick={() => updateFood(item._id)}>
              Update
            </button>
            <button className="remove" onClick={() => removeFood(item._id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;

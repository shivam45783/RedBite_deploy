import foodModel from "../models/food.models.js";
import fs from "fs";

// add food item

const addFood = async (req, res, next) => {
  let image_filename = `${req.file.filename}`;

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: image_filename,
    category: req.body.category,
  });
  try {
    await food.save();

    // const savedFood = await foodModel.findOne({ name: req.body.name });
    // if (savedFood) {
    //   fs.unlinkSync(`./uploads/${image_filename}`);
    // }
    res.json({ success: true, message: "Food item added successfully", food });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error in saving new food item",
      error,
    });
  }
};

// all food list

const listFood = async (req, res, next) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, message: "Food list", data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error in fetching food list", error });
  }
};

const removeFood = async (req, res, next) => {
  try {
    const food = await foodModel.findById(req.body.id);
    if (!food) {
      return res.json({ success: false, message: "Food item not found" });
    }
    console.log(food);

    fs.unlinkSync(`./uploads/${food.image}`);
    await foodModel.deleteOne({ _id: req.body.id });
    res.json({ success: true, message: "Food item removed successfully" });
  } catch (error) {
    console.log(error);

    res.json({ success: false, message: "Error in removing food item", error });
  }
  
};
const getFood = async (req, res, next) => {
  try {
    if (!req.params.id) {
      return res.json({ success: false, message: "Id not received" });
    }
    
    
    const food = await foodModel.findById(req.params.id);
    
    
    if (!food) {
      return res.json({ success: false, message: "Food item not found" });
    }
    res.json({
      success: true,
      message: "Food item fetched successfully",
      data: food,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error in fetching food item",
      error,
    });
  }
};
const updateFood = async (req, res, next) => {
  console.log(req.file);
  
  let image_filename = `${req.file.filename}`;
  const food = await foodModel.findById(req.params.id);
  if (!food) {
    return res.json({ success: false, message: "Food item not found" });
  }

  try {
    // await foodModel.updateOne({ _id: req.params.id }, req.body);
    await foodModel.updateOne(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
          description: req.body.description,
          price: req.body.price,
          image: image_filename,
          category: req.body.category,
        },
      }
    )
    fs.unlinkSync(`./uploads/${food.image}`);
    res.json({ success: true, message: "Food item updated successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error in updating food item", error });
  }
  
};
export { addFood, listFood, removeFood, getFood, updateFood };

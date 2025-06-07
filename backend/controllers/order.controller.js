import orderModel from "../models/order.models.js";
import userModel from "../models/user.models.js";
import stripe from "stripe";

const placeOrder = async(req,res)=>{
    try {
        const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address,
            
        })

        newOrder.payment = true;
        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}});
        
        
        res.json({success:true,message:"Order placed successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false,message:"Error in placing order"});
        
    }
}
// for frontend
const userOrders = async(req,res)=>{
    try {
        const orders = await orderModel.find({userId:req.body.userId});
        res.json({success:true,message:"Orders fetched successfully",data:orders});
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false,message:"Error in fetching orders"});
        
    }
}
// for admin
const listOrders = async(req,res)=>{
    try {
        const orders = await orderModel.find({});
        res.json({success:true,message:"Orders fetched successfully",data:orders});
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false,message:"Error in fetching orders"});
        
    }
}

const updateStatus = async(req,res)=>{
    try {
        await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status});
        res.json({success:true,message:"Status updated successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false,message:"Error in updating status"});
        
    }
}
const removeOrder = async(req,res)=>{
    try {
        await orderModel.findByIdAndDelete(req.body.orderId);
        res.json({success:true,message:"Order removed successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false,message:"Error in removing order"});
        
    }
}
export {placeOrder, userOrders, listOrders, updateStatus, removeOrder};
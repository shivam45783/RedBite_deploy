import { listOrders, placeOrder, updateStatus, userOrders, removeOrder} from "../controllers/order.controller.js";
import authMiddleware from "../middleware/auth.js";
import { Router } from "express";

const orderRouter = Router();

orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/userorders", authMiddleware, userOrders);
orderRouter.get("/list", listOrders);
orderRouter.post("/status", updateStatus)
orderRouter.post("/remove", removeOrder);
export default orderRouter;
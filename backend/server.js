import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import foodRouter from "./routes/food.routes.js";
import userRouter from "./routes/user.routes.js";
import cartRouter from "./routes/cart.routes.js";

import "dotenv/config";
import mailRouter from "./routes/mail.route.js";
import uploadRouter from "./routes/upload.routes.js";
import orderRouter from "./routes/order.routes.js";
// app config

const app = express();
const port = 4000 || process.env.PORT;

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("API is running");
});

// db connection
connectDB();

// api routes
app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/mail", mailRouter);
app.use("/api/upload", uploadRouter);
app.use("/api/order", orderRouter);
app.use("/images", express.static("./uploads"));
app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});

//mongodb+srv://serviceredbite:<db_password>@redbite.bouddex.mongodb.net/

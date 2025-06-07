import { Router } from "express";
import { uploader, remove, generateURL } from "../middleware/uploader.js";
import {upload} from "../middleware/multer.middlewares.js";
const uploadRouter = Router();

uploadRouter.post("/send", upload.single("file"), uploader);
uploadRouter.post("/remove", remove);
uploadRouter.get("/url/:id", generateURL);
export default uploadRouter;
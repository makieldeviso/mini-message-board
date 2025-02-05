import { Router } from "express";
import newMessageController from "../controllers/newMessageController.js";

const newMessageRoute = Router();
newMessageRoute.get('/', newMessageController.getNewMessage);
newMessageRoute.post('/', newMessageController.postMessage);

export default newMessageRoute;
import { Router } from "express";
import homeController from "../controllers/homeController.js";

const homeRoute = Router();
homeRoute.use('/', homeController.getHomeView);

export default homeRoute;
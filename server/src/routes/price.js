import express from "express";
import * as controllers from "../controller/price";

const router = express.Router();

router.get("/all", controllers.getPrices);

export default router;

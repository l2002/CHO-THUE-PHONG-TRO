import express from "express";
import * as insertController from "../controller/insert";

const router = express.Router();
router.post("/", insertController.insert);

export default router;

import express from "express";
import verifyToken from "../middleware/verifyToken";
import * as userController from "../controller/user";

const router = express.Router();

router.use(verifyToken);
router.get("/get-current", userController.getCurrent);
router.put("/", userController.updateUser);

export default router;

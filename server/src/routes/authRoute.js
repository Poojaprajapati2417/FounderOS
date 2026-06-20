import { login,Register } from "../controllers/user/authController.js";
import express from "express"

const router=express.Router();
router.post("/register",Register)
router.post("/login",login)
export default router
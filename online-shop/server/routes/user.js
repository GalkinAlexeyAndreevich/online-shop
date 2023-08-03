import { Router } from "express";
import { userController } from "../controllers/index.js";
import { authMiddleware } from "../middleware/auth.js";

export const userRouter = Router();

userRouter.post("/registration", userController.registration);

userRouter.post("/login", userController.login);

userRouter.get("/auth", authMiddleware, userController.check);

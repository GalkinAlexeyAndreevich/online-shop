import { Router } from "express";
import { deviceController } from "../controllers/index.js";
import { checkRoleMiddleware } from "../middleware/checkRole.js";

export const deviceRouter = Router();

deviceRouter.post("/",checkRoleMiddleware("ADMIN"), deviceController.create);
deviceRouter.get("/", deviceController.getAll);
deviceRouter.get("/:id", deviceController.getOne);

import { Router } from "express";
import { typeController } from "../controllers/index.js";
import { checkRoleMiddleware } from "../middleware/checkRole.js";

export const typeRouter = Router();

typeRouter.post("/",checkRoleMiddleware('ADMIN'), typeController.create);
typeRouter.get("/", typeController.getAll);

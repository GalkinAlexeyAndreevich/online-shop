import { Router } from "express";
import { brandController } from "../controllers/index.js";
import { checkRoleMiddleware } from "../middleware/checkRole.js";

export const brandRouter = Router()

brandRouter.post("/",checkRoleMiddleware("ADMIN"), brandController.create)
brandRouter.get("/",brandController.getAll)


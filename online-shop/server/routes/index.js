import { Router } from "express";
import { brandRouter } from "./brand.js";
import { deviceRouter } from "./device.js";
import { typeRouter } from "./type.js";
import { userRouter } from "./user.js";

export const appRouter = Router()

appRouter.use("/user",userRouter)
appRouter.use("/type",typeRouter)
appRouter.use("/brand",brandRouter)
appRouter.use("/device",deviceRouter)
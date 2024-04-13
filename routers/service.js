import { Router } from "express";
import {
  createservice,
  deleteByIdservice,
  getAllservice,
  getByIdservice,
  updateservice,
} from "../controllers/service.js";

import { verifyToken } from "../middleware/auth.js";

const routerSevice = Router();
routerSevice.use(verifyToken);
routerSevice.get("/", getAllservice);

routerSevice.get("/:id", getByIdservice);
routerSevice.post("/", createservice);
routerSevice.delete("/:id", deleteByIdservice);

routerSevice.put("/:id", updateservice);
export default routerSevice;

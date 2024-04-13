import { Router } from "express";
import {
  createVendor,
  deleteByIdVendor,
  getAllVendor,
  getByIdVendor,
  updateVendor,
} from "../controllers/vendor.js";

const routerVendor = Router();

routerVendor.get("/", getAllVendor);
routerVendor.get("/:id", getByIdVendor);
routerVendor.post("/", createVendor);
routerVendor.delete("/:id", deleteByIdVendor);

routerVendor.put("/:id", updateVendor);

export default routerVendor;

import { Router } from "express";
import { login, register } from "../controllers/auth.js";

const routerAuth = Router();
routerAuth.post("/login", login);
routerAuth.post("/register", register);
export default routerAuth;

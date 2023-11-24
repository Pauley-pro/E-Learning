import express from "express";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
import { createLayout, editLayout, getLayoutByType } from "../controllers/layout.controller";
import { UpdateAccessToken } from "../controllers/user.controller";
const layoutRouter = express.Router();

layoutRouter.post("/create-layout", UpdateAccessToken, isAuthenticated, authorizeRoles("admin"), createLayout);
layoutRouter.put("/edit-layout", UpdateAccessToken, isAuthenticated, authorizeRoles("admin"), editLayout);
layoutRouter.get("/get-layout", getLayoutByType);

export default layoutRouter
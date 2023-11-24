import express from "express";
import { UpdateAccessToken, activateUser, deleteUser, getAllUsers, getUserInfo, loginUser, logoutUser, registrationUser, socialAuth, updatePassword, updateProfilePicture, updateUserInfo, updateUserRole } from "../controllers/user.controller";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
const userRouter = express.Router();

userRouter.post("/registration", registrationUser);
userRouter.post("/activate-user", activateUser);
userRouter.post("/login", loginUser);
userRouter.get("/logout", isAuthenticated, logoutUser);
userRouter.get("/refresh", UpdateAccessToken);
userRouter.get("/me", UpdateAccessToken, isAuthenticated, getUserInfo);
userRouter.post("/social-auth", socialAuth);
userRouter.put("/update-user-info", UpdateAccessToken, isAuthenticated, updateUserInfo);
userRouter.put("/update-user-password", UpdateAccessToken, isAuthenticated, updatePassword);
userRouter.put("/update-user-avatar", UpdateAccessToken, isAuthenticated, updateProfilePicture);
userRouter.get("/get-users", UpdateAccessToken, isAuthenticated, authorizeRoles("admin"), getAllUsers);
userRouter.put("/update-user", UpdateAccessToken, isAuthenticated, authorizeRoles("admin"), updateUserRole);
userRouter.delete("/delete-user/:id", UpdateAccessToken, isAuthenticated, authorizeRoles("admin"), deleteUser);


export default userRouter;
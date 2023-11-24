import express from "express";
import { addAnswer, addQuestion, addReplyToReview, addReview, deleteCourse, editCourse, generateVideoUrl, getAllCourses, getAllCoursesByAdmin, getCourseByUser, getSingleCourse, uploadCourse } from "../controllers/course.controller";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
import { UpdateAccessToken } from "../controllers/user.controller";
const courseRouter = express.Router();

courseRouter.post("/create-course", UpdateAccessToken, isAuthenticated, authorizeRoles("admin"), uploadCourse);
courseRouter.put("/edit-course/:id", UpdateAccessToken, isAuthenticated, authorizeRoles("admin"), editCourse);
courseRouter.get("/get-course/:id", getSingleCourse);
courseRouter.get("/get-courses", getAllCourses);
courseRouter.get("/get-course-content/:id", UpdateAccessToken, isAuthenticated, getCourseByUser);
courseRouter.put("/add-question", UpdateAccessToken, isAuthenticated, addQuestion);
courseRouter.put("/add-answer", UpdateAccessToken, isAuthenticated, addAnswer);
courseRouter.put("/add-review/:id", UpdateAccessToken, isAuthenticated, addReview);
courseRouter.put("/add-reply", UpdateAccessToken, isAuthenticated, authorizeRoles("admin"), addReplyToReview);
courseRouter.get("/get-all-courses", UpdateAccessToken, isAuthenticated, authorizeRoles("admin"), getAllCoursesByAdmin);
courseRouter.post("/getVdoCipherOTP", generateVideoUrl);
courseRouter.delete("/delete-course/:id", UpdateAccessToken, isAuthenticated, authorizeRoles("admin"), deleteCourse);

export default courseRouter;
import { Router } from "express";
import {
  editProfile,
  employeeAccount,
  checkOtp,
  otpGenerateSystem,
  myJobs,
  selectingStudentSystem,
  myJobApplyStudents,
} from "../controllers/employee.controller.js";
import { verifyJWT, isEmployee } from "../middleware/auth.middleware.js";
import { upload } from "../middleware/mutler.middleware.js";
const router = Router();

router.route("/otp-send").post(otpGenerateSystem); //Done but checks Otp for mobile
router.route("/check-otp").post(checkOtp); //Done
router.route("/register").post(upload.single("avatar"), employeeAccount); //Done
router
  .route("/edit-profile")
  .put(upload.single("avatar"), verifyJWT, isEmployee, editProfile); //Done

router.route("/my-jobs").get(verifyJWT, isEmployee, myJobs); //Done
router.route("/my-students").get(verifyJWT, isEmployee, myJobApplyStudents);
router
  .route("/select-students")
  .get(verifyJWT, isEmployee, selectingStudentSystem); //Pending

export default router;

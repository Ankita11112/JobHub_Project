import { Router } from "express";
import {
  allDataAboutEverything,
  allJobs,
  loginSystem,
  selectedStudentsInAllJobs,
} from "../controllers/admin.controller.js";
import { verifyJWT, isAdmin } from "../middleware/auth.middleware.js";

const router = Router();

router.route("/entry").post(loginSystem); //Done
router.route("/alldata").get(verifyJWT, isAdmin, allDataAboutEverything); //Done
router.route("/alljobs").get(verifyJWT, isAdmin, allJobs); //Done
router
  .route("/selected-students")
  .get(verifyJWT, isAdmin, selectedStudentsInAllJobs); // Again

export default router;

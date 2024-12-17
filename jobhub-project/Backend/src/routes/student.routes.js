import { Router } from "express";
import { applyForJob } from "../controllers/student.controller.js";
import { upload } from "../middleware/mutler.middleware.js";

const router = Router();

router.route("/applyjob").post(upload.single("resume"), applyForJob); //Pending cause of email

export default router;

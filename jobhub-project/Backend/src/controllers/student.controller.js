import { Student } from "../models/student.model.js";
import { Job } from "../models/job.model.js";
import { mailSender } from "../utils/emailSender.utils.js";
import { thanksEmailTemplate } from "../templates/thanks.template.js";

export const applyForJob = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      mobileNumber,
      dob,
      gender,
      qualification,
      role,
      address,
      jobId,
    } = req.body;
    
    const { filename } = req.file;

    if (
      [
        firstName,
        lastName,
        email,
        mobileNumber,
        dob,
        gender,
        qualification,
        role,
        address,
      ].some((data) => data?.trim === "")
    ) {
      return res.status(400).json({
        message: "All fields required",
      });
    }

    const isStudentApply = await Student.findOne({ jobs: jobId });

    if (isStudentApply) {
      return res.status(202).json({
        message: "Job already applied",
      });
    }

    const studentDataForJob = await Student.create({
      firstName,
      lastName,
      mobileNumber,
      dob,
      gender,
      qualification,
      role,
      address,
      file: filename,
      jobs: jobId,
      email,
    });

    console.log("aagya", jobId);
    const findJob = await Job.findByIdAndUpdate(jobId, {
      $push: {
        students: studentDataForJob._id,
      },
    });

    if (!findJob) {
      return res.status(500).json({
        message: "Refenence not added in Jobs",
      });
    }

    await mailSender(
      email,
      "Thanks for apply",
      thanksEmailTemplate(
        firstName,
        lastName,
        findJob.companyName,
        findJob.jobTitle
      )
    );

    return res.status(200).json({
      message: "Thanks for apply for this job",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong while applying job",
    });
  }
};

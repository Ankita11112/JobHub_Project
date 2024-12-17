import { Employee } from "../models/employee.model.js";
import { Job } from "../models/job.model.js";

export const createJob = async (req, res) => {
  try {
    const {
      companyName,
      jobTitle,
      numberOfPosition,
      jobType,
      workType,
      ExpireJob,
      benefits,
      salary,
      jobLocation,
      education,
      english,
      experience,
      gender,
      age,
      description,
      interviewMode,
      communication,
    } = req.body;

    const employeeId = req.user._id;

    if (
      [
        companyName,
        jobTitle,
        // numberOfPosition,
        jobType,
        workType,
        ExpireJob,
        // benefits,
        salary,
        jobLocation,
        education,
        english,
        experience,
        gender,
        age,
        description,
        interviewMode,
        communication,
      ].some((data) => data?.trim() === "")
    ) {
      return res.status(400).json({
        message: "Required all fields",
      });
    }

    const newJob = await Job.create({
      age,
      benefits,
      communication,
      companyName,
      description,
      education,
      english,
      experience,
      ExpireJob,
      gender,
      interviewMode,
      jobLocation,
      jobTitle,
      jobType,
      numberOfPosition,
      salary,
      workType,
    });

    const addedEntryInEmployee = await Employee.findByIdAndUpdate(employeeId, {
      $push: {
        jobs: newJob._id,
      },
    });

    if (!addedEntryInEmployee) {
      return res.status(500).json({
        message: "Refernce is not passed!",
      });
    }

    return res.status(200).json({
      message: "Course is Create",
      job: newJob,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong while creating course",
    });
  }
};

export const updateJob = async (req, res) => {
  try {
    const {
      companyName,
      jobTitle,
      numberOfPosition,
      jobType,
      workType,
      ExpireJob,
      benefits,
      salary,
      jobLocation,
      education,
      english,
      experience,
      gender,
      age,
      description,
      interviewMode,
      communication,
      jobId,
    } = req.body;

    const updatedJob = await Job.findByIdAndUpdate(
      jobId,
      {
        companyName,
        jobTitle,
        numberOfPosition,
        jobType,
        workType,
        ExpireJob,
        benefits,
        salary,
        jobLocation,
        education,
        english,
        experience,
        gender,
        age,
        description,
        interviewMode,
        communication,
      },
      { new: true }
    );

    return res.status(200).json({
      message: "Job is update",
      job: updatedJob,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong while updating the job",
    });
  }
};

export const deleteJob = async (req, res) => {
  try {
    const { jobId } = req.body;
    const employeeId = req.user._id;

    await Employee.findByIdAndUpdate(employeeId, {
      $pull: {
        jobs: jobId,
      },
    });

    await Job.findByIdAndDelete(jobId, { new: true });

    res.status(200).json({
      message: "Successfully Deleted !",
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong while deleting the job",
    });
  }
};

export const detailAboutJob = async (req, res) => {
  try {
    const { jobId } = req.body;

    const detailOfJob = await Job.findById(jobId);

    return res.status(200).json({
      message: "Get job detail",
      job: detailOfJob,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong while to get Info about Job",
    });
  }
};

export const rolewiseJobs = async (req, res) => {
  try {
    const { role } = req.body;

    const jobsByRole = await Job.find({ jobType: role });

    return res.status(200).json({
      message: "Successfully job fetched according role",
      jobs: jobsByRole,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong while fetching the job according role",
    });
  }
};

export const multipleDeleteJob = async (req, res) => {
  try {
    const { jobIds } = req.body;
    const employeeId = req.user._id;

    await Employee.findByIdAndUpdate(employeeId, {
      $pull: {
        jobs: {
          $in: jobIds,
        },
      },
    });

    await Job.deleteMany({ _id: { $in: jobIds } });

    return res.status(200).json({
      message: "Jobs successfully deleted",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong delete multiple jobs",
    });
  }
};

export const searchedJobs = async (req, res) => {
  try {
    const { keywords } = req.body;

    const searchingJobsResponse = await Job.find({
      jobTitle: {
        $regex: keywords,
      },
    });

    return res.status(200).json({
      message: "Searched Jobs here",
      jobs: searchingJobsResponse,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong while searching Jobs",
    });
  }
};

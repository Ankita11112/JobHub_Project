import { Employee } from "../models/employee.model.js";
import { Otp } from "../models/otp.model.js";
import { otpSender } from "../utils/mobileVerification.utils.js";
import { Job } from "../models/job.model.js";

const generateAccessToken = async (employeeId) => {
  try {
    const employee = await Employee.findById(employeeId);
    const accessToken = await employee.generateAccessToken();

    await employee.save({ validateBeforeSave: false });

    return { accessToken };
  } catch (error) {
    throw Error("Something went wrong while generating AccessToken", error);
  }
};

export const otpGenerateSystem = async (req, res) => {
  try {
    const { mobileNumber } = req.body;

    if (!mobileNumber) {
      return res.status(400).json({
        message: "Phone number is required",
      });
    }

    const otpGenerator = Math.floor(Math.random() * 1000000);

    const isOtpExits = await Otp.findOne({ otp: otpGenerator });

    if (isOtpExits) {
      otpGenerator = Math.floor(Math.random() * 1000000);
    }

    await Otp.create({
      mobileNumber,
      otp: otpGenerator,
    });

    await otpSender(otpGenerator, { mobileNumber: "+91" + mobileNumber });

    return res.status(200).json({
      message: "Otp successfully genrated!",
      otp: otpGenerator,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong while generating otp",
      error,
    });
  }
};

export const checkOtp = async (req, res) => {
  try {
    const { otp, mobileNumber } = req.body;

    const isOtpPresent = await Otp.find({ mobileNumber })
      .sort({ createdAt: -1 })
      .limit(1);

    if (isOtpPresent.length === 0) {
      return res.status(404).json({
        message: "Otp is not found",
      });
    } else if (otp !== isOtpPresent[0].otp) {
      return res.status(403).json({
        message: "Otp is not correct",
      });
    }

    const alreadyExists = await Employee.findOne({
      mobileNumber,
    });

    if (alreadyExists) {
      // Generate Token
      const { accessToken } = await generateAccessToken(alreadyExists._id);

      const options = {
        httpOnly: true,
        secure: true,
      };

      return res.status(200).cookie("accessToken", accessToken, options).json({
        sucess: true,
        message: "Login Successfully !",
        employee: alreadyExists,
        accessToken,
      });
    }

    return res.status(200).json({
      message: "Successfully Verified!",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong while checking otp",
    });
  }
};

export const employeeAccount = async (req, res) => {
  try {
    const {
      fullName,
      companyName,
      mobileNumber,
      email,
      gender,
      gstNumber,
      fromWhere,
    } = req.body;

    if (
      [
        fullName,
        companyName,
        mobileNumber,
        email,
        gender,
        gstNumber,
        fromWhere,
      ].some((data) => data?.trim() === "")
    ) {
      res.status(400).json({
        message: "Required all fields",
      });
    }

    const newEmployee = await Employee.create(
      {
        companyName,
        email,
        fromWhere,
        fullName,
        gender,
        gstNumber,
        mobileNumber,
      },
      { new: true }
    );

    // Generate Token
    const { accessToken } = await generateAccessToken(newEmployee._id);

    const options = {
      httpOnly: true,
      secure: true,
    };

    return res.status(200).cookie("accessToken", accessToken, options).json({
      message: "Signup Successfully !",
      employee: newEmployee,
    });
  } catch (error) {
    res.status(500).json({
      message: "Someting went wrong while identification",
    });
  }
};

export const myJobs = async (req, res) => {
  try {
    const employeeId = req.user._id;

    const employeeData = await Employee.findById(employeeId)
      .populate("jobs")
      .exec();

    return res.status(200).json({
      message: "Jobs Data Fetched",
      employee: employeeData,
    });
  } catch (error) {
    return res.status(500).json({
      message:
        "Something went wrong while fetching the data of Jobs in Employee",
    });
  }
};

export const editProfile = async (req, res) => {
  try {
    const { companyName, fullName, gender, email } = req.body;
    const employeeId = req.user._id;

    const updateDetails = await Employee.findByIdAndUpdate(
      employeeId,
      {
        companyName,
        fullName,
        gender,
        email,
      },
      { new: true }
    );

    return res.status(200).json({
      message: "Update Successfully!",
      employee: updateDetails,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong while edit the profile",
    });
  }
};

export const selectingStudentSystem = async (req, res) => {
  try {
    const { studentId, jobId } = req.body;

    const jobDetail = await Job.findByIdAndUpdate(
      jobId,
      {
        selectedStudents: {
          $push: studentId,
        },
      },
      { new: true }
    );

    return res.status(200).json({
      message: "Student is Selected",
      jobs: jobDetail,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong while selecting students",
    });
  }
};

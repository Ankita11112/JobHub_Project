import { employee } from "../apis";
import { apiConnector } from "../apiConnector";
import { toast } from "react-toastify";

const { CHECK_OTP, EDIT_PROFILE, MYJOBS, SEND_OTP, SIGNUP_LOGIN } = employee;

export const sendOtp = async (mobileNumber) => {
  try {
    const response = await apiConnector("POST", SEND_OTP, {
      mobileNumber,
    });

    if (!response) {
      console.log("No response from backend");
    }
  } catch (error) {
    console.log("error while sending otp", error);
  }
};

export const checkOtp = async (otp, mobileNumber, navigate) => {
  try {
    const response = await apiConnector("POST", CHECK_OTP, {
      otp,
      mobileNumber,
    });

    if (response.data.sucess) {
      console.log("aagya");
      localStorage.setItem("token", response.data.accessToken);
      localStorage.setItem("employee", JSON.stringify(response.data.employee));
      localStorage.removeItem("mobileNumber");
      toast.success(response.data.message);
      navigate("/employerdashboard");
    } else {
      localStorage.setItem("mobileNumber", mobileNumber);
      navigate("/employeregistration");
    }
  } catch (error) {
    console.error("error while checking the otp", error);
  }
};

export const registerEmployee = async (employerData, navigate) => {
  try {
    const response = await apiConnector("POST", SIGNUP_LOGIN, employerData, {
      "Content-Type": "multipart/form-data",
    });

    if (response.data.success) {
      localStorage.setItem("employee", JSON.stringify(response.data.employee));
      localStorage.setItem("token", response.data.accessToken);
      toast.success(response.data.message);
      navigate("/employerdashboard");
    } else {
      navigate("/employeregistration");
    }
  } catch (error) {
    toast.error("Something went wront integrate the register");
  }
};

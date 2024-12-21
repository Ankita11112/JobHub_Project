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
    toast.error(error.response.data.message);
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
      localStorage.setItem("token", JSON.stringify(response.data.accessToken));
      localStorage.setItem("employee", JSON.stringify(response.data.employee));
      localStorage.removeItem("mobileNumber");
      toast.success(response.data.message);
      navigate("/employerdashboard");
    } else {
      localStorage.setItem("mobileNumber", mobileNumber);
      navigate("/employeregistration");
    }
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const registerEmployee = async (employerData, navigate) => {
  try {
    const response = await apiConnector("POST", SIGNUP_LOGIN, employerData, {
      "Content-Type": "multipart/form-data",
    });

    if (response.data.success) {
      localStorage.setItem("employee", JSON.stringify(response.data.employee));
      localStorage.setItem("token", JSON.stringify(response.data.accessToken));
      toast.success(response.data.message);
      navigate("/employerdashboard");
    } else {
      navigate("/employeregistration");
    }
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const myJobs = async (token) => {
  try {
    const response = await apiConnector(
      "GET",
      MYJOBS,
      {},
      {
        Authorization: `Bearer ${token}`,
      }
    );
    toast.success(response.data.message);
    return response.data.employee.jobs;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const updateProfile = async (token, data) => {
  try {
    const response = await apiConnector("PUT", EDIT_PROFILE, data, {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    });
    console.log(response.data);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

import { employee } from "../apis";
import { apiConnector } from "../apiConnector";

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

    localStorage.setItem("token", response.data.accessToken);
    navigate("/employerdashboard");
  } catch (error) {
    console.error("error while checking the otp", error);
  }
};

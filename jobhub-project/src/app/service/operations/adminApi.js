import { toast } from "react-toastify";
import { apiConnector } from "../apiConnector";
import { admin } from "../apis";

const { ALL_JOBS, ENTIRE_DATA, SELECTED_STUDENTS, SIGNUP_LOGIN } = admin;

export const entrySystem = async (data, navigate) => {
  try {
    const response = await apiConnector("POST", SIGNUP_LOGIN, data);

    if (response.data.success) {
      localStorage.setItem("employee", JSON.stringify(response.data.user));
      localStorage.setItem("token", JSON.stringify(response.data.accessToken));
      toast.success(response.data.message);
      navigate("/admin");
    } else {
      navigate("/signup");
    }
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

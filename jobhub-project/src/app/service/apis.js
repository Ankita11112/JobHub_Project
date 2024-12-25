const BASE_URL = "http://localhost:3000/api/v1";

export const employee = {
  SEND_OTP: BASE_URL + "/employees/otp-send",
  CHECK_OTP: BASE_URL + "/employees/check-otp",
  SIGNUP_LOGIN: BASE_URL + "/employees/register",
  MYJOBS: BASE_URL + "/employees/my-jobs",
  EDIT_PROFILE: BASE_URL + "/employees/edit-jobs",
};

export const admin = {
  SIGNUP_LOGIN: BASE_URL + "/admins/entry",
  ENTIRE_DATA: BASE_URL + "/admins/alldata",
  ALL_JOBS: BASE_URL + "/admins/alljobs",
  SELECTED_STUDENTS: BASE_URL + "/admins/selected-students",
};

export const jobs = {
  CREATE_JOB: BASE_URL + "/jobs/create-job",
  UPDATE_JOB: BASE_URL + "/jobs/update-job",
  DELELTE_JOB: BASE_URL + "/jobs/delete-job",
  ROLE_BASE_JOB: BASE_URL + "/jobs/role",
  SEARCH_JOB: BASE_URL + "/jobs/searching-job",
  DETAIL_JOB: BASE_URL + "/jobs/details",
  MULTI_DELETE_JOB: BASE_URL + "/jobs/multi-delete",
};

export const students = {
  APPLY_JOB: BASE_URL + "/students/applyjob",
  ALL_JOBS: BASE_URL + "/students/jobs",
};

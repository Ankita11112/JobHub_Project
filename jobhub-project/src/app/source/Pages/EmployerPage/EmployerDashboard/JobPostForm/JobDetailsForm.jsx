import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Stepper,
  Step,
  StepLabel,
  Checkbox,
  ListItemText,
} from "@mui/material";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const steps = [
  "Job Details",
  "Candidate & Interviewer Insights",
  "Final Review & Submission",
];

const JobDetailsForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    jobDetails: {
      company: "",
      jobTitle: "",
      jobRole: "",
      jobType: "",
      workType: "",
      salary: "",
      benefits: [],
      jobLocation: "",
    },
    candidatesInterviewer: {
      minimumEducation: "",
      englishLevelRequired: "",
      totalExperienceRequired: "",
      gender: "",
      age: "",
      jobDescription: "",
      interviewMethod: "",
      address: "",
      communicationPreferences: "",
    },
  });

  const benefitsOptions = [
    "Health Insurance",
    "Retirement Plans",
    "Paid Time Off",
    "ESCI",
    "Provident Fund",
    "Flexible Working Hours",
  ];

  const navigate = useNavigate();

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prevStep) => prevStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevStep) => prevStep - 1);
    }
  };

  const handleSubmit = () => {
    if (!validateFormData()) return;
  console.log("Form Data Submitted:", formData);
    localStorage.setItem("formData", JSON.stringify([formData]));  
    toast.success("Form Submitted Successfully!");
    setTimeout(() => {
      navigate("/employerdashboard");
    }, 6000);
  };

  const handleEdit = () => {
    setActiveStep(0);
  };

  const validateFormData = () => {
    const { jobDetails } = formData;
    if (!jobDetails.company || !jobDetails.jobTitle) {
      toast.error("Please fill all required fields in Job Details!");
      return false;
    }
    return true;
  };

  const handleChange = (section, field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: { ...prevData[section], [field]: value },
    }));
  };

  const renderTextField = (label, section, field, required = false, multiline = false, rows = 1) => (
    <TextField
      fullWidth
      label={label}
      variant="outlined"
      required={required}
      multiline={multiline}
      rows={rows}
      value={formData[section][field]}
      onChange={(e) => handleChange(section, field, e.target.value)}
    />
  );

  const renderSelectField = (label, section, field, options) => (
    <FormControl fullWidth required>
      <InputLabel>{label}</InputLabel>
      <Select
        value={formData[section][field]}
        label={label}
        onChange={(e) => handleChange(section, field, e.target.value)}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            {renderTextField("Company Name", "jobDetails", "company", true)}
            <Box sx={{ display: "flex", gap: "20px" }}>
              {renderTextField("Job Title", "jobDetails", "jobTitle", true)}
              {renderTextField("Job Role / Category", "jobDetails", "jobRole", true)}
            </Box>
            <Box sx={{ display: "flex", gap: "20px" }}>
              {renderSelectField("Job Type", "jobDetails", "jobType", [
                "Part-Time",
                "Full-Time",
              ])}
              {renderSelectField("Work Type", "jobDetails", "workType", [
                "Work-From-Office",
                "Work-From-Home",
              ])}
            </Box>
            {renderTextField("Salary", "jobDetails", "salary", true)}
            <FormControl fullWidth>
              <InputLabel>Benefits</InputLabel>
              <Select
                multiple
                label="Benefits"
                value={formData.jobDetails.benefits}
                onChange={(e) =>
                  handleChange("jobDetails", "benefits", e.target.value)
                }
                renderValue={(selected) => selected.join(", ")}
              >
                {benefitsOptions.map((benefit) => (
                  <MenuItem key={benefit} value={benefit}>
                    <Checkbox
                      checked={formData.jobDetails.benefits.includes(benefit)}
                    />
                    <ListItemText primary={benefit} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {renderTextField("Job Location", "jobDetails", "jobLocation", true)}
          </>
        );
      case 1:
        return (
          <>
            {renderTextField("Minimum Education", "candidatesInterviewer", "minimumEducation", true)}
            {renderTextField("English Level Required", "candidatesInterviewer", "englishLevelRequired", true)}
            {renderTextField("Total Experience Required", "candidatesInterviewer", "totalExperienceRequired", true)}
            {renderSelectField("Gender", "candidatesInterviewer", "gender", [
              "Male",
              "Female",
              "Any",
            ])}
            {renderTextField("Age", "candidatesInterviewer", "age", true)}
            {renderTextField("Job Description", "candidatesInterviewer", "jobDescription", false, true, 4)}
            {renderSelectField("Interview Method", "candidatesInterviewer", "interviewMethod", [
              "In-Person",
              "Virtual",
            ])}
            {renderTextField("Address", "candidatesInterviewer", "address")}
            {renderTextField(
              "Communication Preferences",
              "candidatesInterviewer",
              "communicationPreferences",
              false,
              true,
              2
            )}
          </>
        );
      case 2:
        return <ReviewPage formData={formData} handleEdit={handleEdit} handleSubmit={handleSubmit} />;
      default:
        return <Typography>Unknown Step</Typography>;
    }
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #4caf50, #ffffff)",
        minHeight: "100vh",
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        sx={{
          boxShadow: "0px 3px 5px -1px rgba(0, 0, 0, 0.2)",
          borderRadius: "10px",
          backgroundColor: "white",
          padding: "30px",
        }}
      >
        <Box textAlign="center" mb={5}>
          <Typography variant="h3" gutterBottom>
            {steps[activeStep]}
          </Typography>
          <Typography variant="h6">
            {activeStep === steps.length - 1
              ? "Finalize Your Job Posting"
              : "Provide the Required Information"}
          </Typography>
        </Box>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {renderStepContent(activeStep)}
          {activeStep < steps.length - 1 && (
            <Box display="flex" justifyContent="space-between" mt={3}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                variant="contained"
                sx={{
                  background: "radial-gradient(circle, rgba(46,138,69,1) 0%, rgba(79,170,92,1) 95%)",
                  color: "white",
                  px: 3
                }}
              >
                Back
              </Button>
              <Button
                variant="contained"
                onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
                sx={{
                  background: "radial-gradient(circle, rgba(46,138,69,1) 0%, rgba(79,170,92,1) 95%)",
                  color: "white",
                  px: 3
                }}>
                {activeStep === steps.length - 1 ? "Submit" : "Next"}
              </Button>
            </Box>
          )}
        </form>
      </Container>
    </Box>
  );
};

const ReviewPage = ({ formData, handleEdit, handleSubmit }) => {
  const sectionAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const cardStyle = {
    padding: "20px",
    marginBottom: "20px",
    borderRadius: "10px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={sectionAnimation}
      style={{
        padding: "20px",
        backgroundColor: "rgba(121,121,121,0.2)",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography variant="h5" gutterBottom>
        Final Review
      </Typography>
      <Typography variant="body1" gutterBottom>
        Job Details:
      </Typography>
      <Box style={cardStyle}>
        {Object.entries(formData.jobDetails).map(([key, value]) => (
          <Typography key={key}>
            {key}: {Array.isArray(value) ? value.join(", ") : value}
          </Typography>
        ))}
      </Box>
      <Typography variant="body1" gutterBottom>
        Candidate & Interviewer Insights:
      </Typography>
      <Box style={cardStyle}>
        {Object.entries(formData.candidatesInterviewer).map(([key, value]) => (
          <Typography key={key}>
            {key}: {value}
          </Typography>
        ))}
      </Box>
      <Box display="flex" justifyContent="space-between" mt={3}>
        <Button variant="contained" sx={{
          background: "radial-gradient(circle, rgba(46,138,69,1) 0%, rgba(79,170,92,1) 95%)",
          color: "white",
          px: 3
        }} onClick={handleEdit}>
          Edit
        </Button>
        <Button variant="contained" sx={{
          background: "radial-gradient(circle, rgba(46,138,69,1) 0%, rgba(79,170,92,1) 95%)",
          color: "white",
          px: 3
        }} onClick={handleSubmit}>
          Confirm & Submit
        </Button>
      </Box>
    </motion.div>
  );
};

export default JobDetailsForm;
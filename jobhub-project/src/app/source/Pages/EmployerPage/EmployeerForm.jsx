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
} from "@mui/material";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const EmployeeForm = () => {
  const navigate = useNavigate();
  const initialEmployerData = {
    profileImg: "",
    companyName: "",
    fullName: "",
    mobile: "",
    email: "",
    gender: "",
    country: "",
    city: "",
    source: "",
    gstNumber: "",
  };

  const [employerData, setEmployerData] = useState(initialEmployerData);
  const [profileImg, setProfileImg] = useState("");

  // Handler to update employer data
  const updateEmployerData = (field, value) => {
    setEmployerData((prevData) => ({ ...prevData, [field]: value }));
  };

  // Handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64Image = reader.result;
        setProfileImg(base64Image); // Store base64 image data
        updateEmployerData("profileImg", base64Image);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Save form data to local storage
    localStorage.setItem("employerFormData", JSON.stringify(employerData));

    toast.success("Form Submitted and Saved Successfully!");
    setTimeout(() => {
      navigate("/employerdashboard");
    }, 2000);
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
        style={{
          boxShadow:
            "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
          borderRadius: "10px",
          backgroundColor: "white",
          padding: "30px",
        }}
      >
        <Box textAlign="center" mb={5}>
          <Typography
            variant="h3"
            sx={{ fontSize: { xs: "35px", lg: "45px" } }}
            gutterBottom
          >
            Employer Registration Form
          </Typography>
          <Typography variant="h6">
            Kindly complete the registration form to find talented candidates
          </Typography>
        </Box>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
          onSubmit={handleSubmit}
        >
          <Button variant="outlined" component="label" fullWidth>
            Upload Profile Image
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleImageUpload}
            />
          </Button>
          {profileImg && (
            <Box textAlign="center" mt={2}>
              <img
                src={profileImg}
                alt="Uploaded Preview"
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            </Box>
          )}
          <TextField
            fullWidth
            label="Company Name"
            variant="outlined"
            placeholder="Enter Your Company Name"
            required
            value={employerData.companyName}
            onChange={(e) => updateEmployerData("companyName", e.target.value)}
          />
          <Box sx={{ display: "flex", gap: "20px" }}>
            <TextField
              fullWidth
              label="Full Name"
              variant="outlined"
              placeholder="Enter Your Name"
              required
              value={employerData.fullName}
              onChange={(e) => updateEmployerData("fullName", e.target.value)}
            />
            <TextField
              fullWidth
              label="Mobile"
              variant="outlined"
              placeholder="Enter Mobile Number"
              required
              value={employerData.mobile}
              onChange={(e) => updateEmployerData("mobile", e.target.value)}
            />
          </Box>
          <Box sx={{ display: "flex", gap: "20px" }}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              placeholder="Enter Your Email"
              required
              value={employerData.email}
              onChange={(e) => updateEmployerData("email", e.target.value)}
            />
            <FormControl fullWidth>
              <InputLabel>Gender</InputLabel>
              <Select
                value={employerData.gender}
                onChange={(e) => updateEmployerData("gender", e.target.value)}
                label="Gender"
                required
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ display: "flex", gap: "20px" }}>
            <FormControl fullWidth>
              <InputLabel>Country</InputLabel>
              <Select
                value={employerData.country}
                onChange={(e) => updateEmployerData("country", e.target.value)}
                label="Country"
                required
              >
                <MenuItem value="India">India</MenuItem>
                <MenuItem value="USA">USA</MenuItem>
                <MenuItem value="Canada">Canada</MenuItem>
                <MenuItem value="Australia">Australia</MenuItem>
              </Select>
            </FormControl>
            <TextField
              fullWidth
              label="City"
              variant="outlined"
              placeholder="Enter City"
              required
              value={employerData.city}
              onChange={(e) => updateEmployerData("city", e.target.value)}
            />
          </Box>
          <TextField
            fullWidth
            label="GST Number"
            variant="outlined"
            placeholder="Enter GST Number"
            value={employerData.gstNumber}
            onChange={(e) => updateEmployerData("gstNumber", e.target.value)}
          />
          <TextField
            fullWidth
            label="From where you heard about this"
            variant="outlined"
            placeholder="Enter Source"
            required
            value={employerData.source}
            onChange={(e) => updateEmployerData("source", e.target.value)}
          />
          <Box textAlign="center">
            <Typography
              variant="h6"
              sx={{ fontSize: "14px", color: "green" }}
            >
              *Kindly ensure all fields are filled out accurately, as this form
              can only be submitted once. Your attention to detail is highly
              appreciated.
            </Typography>
          </Box>
          <Box textAlign="center">
            <Button
              type="submit"
              style={{
                border: "1px solid green",
                padding: "15px 60px",
                backgroundColor: "green",
                color: "white",
              }}
            >
              Submit
            </Button>
          </Box>
        </form>
      </Container>
    </Box>
  );
};

export default EmployeeForm;
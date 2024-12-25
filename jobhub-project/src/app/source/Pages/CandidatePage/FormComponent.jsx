import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Select,
  MenuItem,
  Fade,
  Input,
} from "@mui/material";
import { applyForJob } from "../../../service/operations/studentApi";
const FormComponent = () => {
  const jobId = localStorage.getItem("jobId");

  const [isMounted, setIsMounted] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [number, setNumber] = useState(0);
  const [qualification, setQualification] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");
  const [address, setAddress] = useState("");
  const [resume, setResume] = useState(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = async () => {
    await applyForJob({
      firstname,
      lastname,
      email,
      dob,
      number,
      qualification,
      gender,
      role,
      address,
      resume,
      jobId,
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100%",
        background: "linear-gradient(to bottom, #4caf50, #ffffff)",
        padding: "20px",
      }}
    >
      <Fade in={isMounted} timeout={1000}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            boxShadow:
              "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
            borderRadius: "10px",
            backgroundColor: "white",
            padding: "30px",
            width: "100%",
            maxWidth: "600px",
          }}
        >
          <Typography
            variant="h5"
            component="h1"
            gutterBottom
            fontWeight="bold"
            textAlign="center"
          >
            Candidate Registration Form
          </Typography>
          <Typography variant="body2" mb={4} textAlign="center">
            Kindly complete the registration form below to apply. Your
            opportunity awaits!
          </Typography>
          <form
            onSubmit={handleSubmit}
            style={{ width: "100%", display: "flex", flexDirection: "column" }}
          >
            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                label="First Name"
                variant="outlined"
                placeholder="Enter Your First Name"
                required
                onChange={(e) => setFirstname(e.target.value)}
              />
            </Box>
            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                label="Last Name"
                variant="outlined"
                placeholder="Enter Your Last Name"
                required
                onChange={(e) => setLastname(e.target.value)}
              />
            </Box>
            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                label="Mobile"
                variant="outlined"
                placeholder="Enter Mobile Number"
                required
                onChange={(e) => setNumber(e.target.value)}
              />
            </Box>
            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                variant="outlined"
                placeholder="Enter Email Address"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>
            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                label="D.O.B"
                type="date"
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                required
                onChange={(e) => setDob(e.target.value)}
              />
            </Box>
            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                label="Qualification"
                variant="outlined"
                placeholder="Enter Your Qualification"
                required
                onChange={(e) => setQualification(e.target.value)}
              />
            </Box>
            <Box sx={{ mb: 3 }}>
              <Select
                fullWidth
                displayEmpty
                variant="outlined"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <MenuItem value="" disabled>
                  Select Gender
                </MenuItem>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </Box>
            <Box sx={{ mb: 3 }}>
              <Select
                fullWidth
                displayEmpty
                variant="outlined"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <MenuItem value="" disabled>
                  Select Profile
                </MenuItem>
                <MenuItem value="Developer">Developer</MenuItem>
                <MenuItem value="Designer">Designer</MenuItem>
                <MenuItem value="Manager">Manager</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </Box>
            <Box sx={{ mb: 3 }}>
              <Typography variant="body2" gutterBottom>
                Upload Resume
              </Typography>
              <Input
                type="file"
                fullWidth
                inputProps={{ accept: ".pdf,.doc,.docx" }}
                onChange={(e) => setResume(e.target.files[0])}
              />
              <a href="https://resume-creator.jobhub.world/">
                <Typography component="span">
                  Need a resume?{" "}
                  <span style={{ color: "blue" }}>Create one now !</span>
                </Typography>
              </a>
            </Box>
            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                label="Address"
                variant="outlined"
                placeholder="Enter Your Address"
                multiline
                rows={3}
                required
                onChange={(e) => setAddress(e.target.value)}
              />
            </Box>
            <Button
              type="submit"
              variant="contained"
              color="success"
              sx={{
                mt: 2,
                fontWeight: "bold",
                fontSize: "1.1rem",
                padding: "15px 60px",
                alignSelf: "center",
              }}
            >
              Submit
            </Button>
          </form>
        </Box>
      </Fade>
    </Box>
  );
};

export default FormComponent;

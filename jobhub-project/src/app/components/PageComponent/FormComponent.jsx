import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, Select, MenuItem, Fade, Input, Grid2 } from '@mui/material';
import axios from "axios";

const FormComponent = () => {
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
  const [experience, setExperience] = useState("");
  const [resume, setResume] = useState(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("https://jobhub-project-backend.onrender.com/api/v1/form", {
        firstname,
        lastname, email, dob, number, qualification, gender, role, address, experience, resume
      }, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Submitted!!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box
      sx={{
        width: '100vw',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(to bottom, #4caf50, #ffffff)',
        overflow: 'auto',
        py: 4,
      }}
    >
      <Fade in={isMounted} timeout={1000}>
        <Box
          sx={{
            maxWidth: 800,
            width: '100%',
            padding: 4,
            boxShadow: 6,
            borderRadius: 2,
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            textAlign: 'center',
          }}
        >
          <Typography variant="h5" component="h1" gutterBottom fontWeight="bold">
            Candidate Registration Form
          </Typography>
          <Typography variant="body2" mb={4}>
            Kindly complete the registration form below to apply. Your opportunity awaits!
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid2 container spacing={2}> {/* Changed to Grid2 */}
              <Grid2 item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  variant="outlined"
                  placeholder="Enter Your First Name"
                  required
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </Grid2>
              <Grid2 item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  variant="outlined"
                  placeholder="Enter Your Last Name"
                  required
                  onChange={(e) => setLastname(e.target.value)}
                />
              </Grid2>
              <Grid2 item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Mobile"
                  variant="outlined"
                  placeholder="Enter Mobile Number"
                  required
                  onChange={(e) => setNumber(e.target.value)}
                />
              </Grid2>
              <Grid2 item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  variant="outlined"
                  placeholder="Enter Email Address"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid2>
              <Grid2 item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="D.O.B"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  variant="outlined"
                  required
                  onChange={(e) => setDob(e.target.value)}
                />
              </Grid2>
              <Grid2 item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Qualification"
                  variant="outlined"
                  placeholder="Enter Your Qualification"
                  required
                  onChange={(e) => setQualification(e.target.value)}
                />
              </Grid2>
              <Grid2 item xs={12} sm={6}>
                <Select
                  fullWidth
                  displayEmpty
                  variant="outlined"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                >
                  <MenuItem value="" disabled>Select Gender</MenuItem>
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </Grid2>
              <Grid2 item xs={12} sm={6}>
                <Select
                  fullWidth
                  displayEmpty
                  variant="outlined"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                >
                  <MenuItem value="" disabled>Select Profile</MenuItem>
                  <MenuItem value="Developer">Developer</MenuItem>
                  <MenuItem value="Designer">Designer</MenuItem>
                  <MenuItem value="Manager">Manager</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </Grid2>
              <Grid2 item xs={12}>
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
              </Grid2>
              <Grid2 item xs={12}>
                <Typography variant="body2" gutterBottom>
                  Upload Resume
                </Typography>
                <Input
                  type="file"
                  fullWidth
                  inputProps={{ accept: '.pdf,.doc,.docx' }}
                  onChange={(e) => setResume(e.target.files[0])}
                />
              </Grid2>
              <Grid2 item xs={12}>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  color="success"
                  sx={{ mt: 2, fontWeight: 'bold', fontSize: '1.1rem' }}
                >
                  Submit
                </Button>
              </Grid2>
            </Grid2>
          </form>
        </Box>
      </Fade>
    </Box>
  );
};

export default FormComponent;

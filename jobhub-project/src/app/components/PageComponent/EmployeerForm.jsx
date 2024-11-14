import React from "react";
import { Container, Box, Typography, Grid, TextField, Button, Select, MenuItem, InputLabel, FormControl } from "@mui/material";

const EmployeeForm = () => {
    return (
        <>
            <Box sx={{
                background: 'linear-gradient(to bottom, #4caf50, #ffffff)',
                overflow: 'auto',
                minHeight: '100vh',
                padding: '20px 0',
            }}> 
                <Container
                    style={{
                        boxShadow: '0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)',
                        borderRadius: "10px",
                        backgroundColor: "white",
                        padding: '30px',
                    }}
                >
                    <Box textAlign="center" mb={5}>
                        <Typography variant="h3" gutterBottom>
                            Employee Registration Form
                        </Typography>
                        <Typography variant="h6">
                            Kindly complete the registration form to find talented candidates
                        </Typography>
                    </Box>
                    <form>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Company Name"
                                    variant="outlined"
                                    placeholder="Enter Your Company Name"
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Full Name"
                                    variant="outlined"
                                    placeholder="Enter Your Name"
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Mobile"
                                    variant="outlined"
                                    placeholder="Enter Mobile Number"
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Email"
                                    variant="outlined"
                                    placeholder="Enter Your Email"
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth variant="outlined" required>
                                    <InputLabel>Gender</InputLabel>
                                    <Select
                                        label="Gender"
                                    >
                                        <MenuItem value="Male">Male</MenuItem>
                                        <MenuItem value="Female">Female</MenuItem>
                                        <MenuItem value="Other">Other</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="No. Of Openings"
                                    variant="outlined"
                                    placeholder="Enter Number"
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth variant="outlined" required>
                                    <InputLabel>Profile</InputLabel>
                                    <Select
                                        label="Profile"
                                    >
                                        <MenuItem value="Web Designer">Web Designer</MenuItem>
                                        <MenuItem value="Web Developer">Web Developer</MenuItem>
                                        <MenuItem value="Data Entry">Data Entry</MenuItem>
                                        <MenuItem value="Document Verification">Document Verification</MenuItem>
                                        <MenuItem value="Telecaller">Telecaller</MenuItem>
                                        <MenuItem value="Receptionist">Receptionist</MenuItem>
                                        <MenuItem value="Other">Other</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Mode Of Interview"
                                    variant="outlined"
                                    placeholder="Online/Offline"
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth variant="outlined" required>
                                    <InputLabel>Experience</InputLabel>
                                    <Select
                                        label="Experience"
                                    >
                                        <MenuItem value="0-1 Years">0-1 Years</MenuItem>
                                        <MenuItem value="1-2 Years">1-2 Years</MenuItem>
                                        <MenuItem value="2-3 Years">2-3 Years</MenuItem>
                                        <MenuItem value="3-4 Years">3-4 Years</MenuItem>
                                        <MenuItem value="4-5 Years">4-5 Years</MenuItem>
                                        <MenuItem value="Other">Other</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Job Timing"
                                    variant="outlined"
                                  placeholder="Ex:- 9:30AM to 6:30PM"
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Employment Type"
                                    variant="outlined"
                                    placeholder="Part-Time/Full-Time"
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} textAlign="center">
                                <Button
                                    style={{
                                        border: '1px solid green',
                                        padding: '15px 60px',
                                        backgroundColor: 'green',
                                        color: 'white',
                                    }}
                                >
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Container>
            </Box>
        </>
    );
};

export default EmployeeForm;

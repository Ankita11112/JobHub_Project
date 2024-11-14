import React from "react";
import { Container,  Box, Typography, Grid2, TextField, Button, Select, Input, MenuItem, InputLabel, FormControl } from "@mui/material";



const EmployeeForm = () => {
   

    return (
      <>
        <Box   sx={{
               
                background: 'linear-gradient(to bottom, #4caf50, #ffffff)',
                overflow: 'auto',
                
        }}> 
            <Container
                style={{  boxShadow: '0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)', borderRadius: "10px", backgroundColor: "white" }}
            >
                <Box mt={12} mb={5} textAlign="center">
                    <Typography className="pt-10" variant="h3">
                       Employee Registration Form
                    </Typography>
                    <Typography className="pt-3" variant="h6">
                    Kindly complete the registration form to find talented condidate</Typography>
                    <form>
                          <Grid2  spacing={2}>
              <Grid2 xs={12} sm={6} marginTop={3}>
                <TextField
                  style={{ width: '95%' }}
                  label="Company Name"
                  variant="outlined"
                  placeholder="Enter Your Company Name"
                  required
                />
              </Grid2>
              <Grid2 xs={12} sm={6} marginTop={2}>
                <TextField
                  style={{ width: '45%', margin: '0 20px' }}
                  label="Full Name"
                  variant="outlined"
                  placeholder="Enter Your Name"
                  required
                                />
                  <TextField
                  style={{ width: '45%', margin: '0 20px'  }}
                  label="Mobile"
                  variant="outlined"
                  placeholder="Enter Mobile Number"
                  required
                />
                </Grid2>  
                <Grid2 xs={12} sm={6} marginTop={2}>
                  <TextField
                    style={{ width: "45%", margin: '0 20px' }}
                    label="Email"
                    variant="outlined"
                    placeholder="Enter Your Email"
                    required
                                />
                                
                                  <FormControl variant="outlined" required
                             style={{width: '45%', margin: '0 20px'}}>
                                
        <InputLabel>Gender</InputLabel>
                                <Select
                                   
          name="role"
          label="Role"
        >
          <MenuItem value="admin">Male</MenuItem>
          <MenuItem value="editor">Female</MenuItem>
          <MenuItem value="viewer">Other</MenuItem>
        </Select>
      </FormControl>
                </Grid2> 
                 <Grid2 xs={12} sm={6} marginTop={2}>
                 <TextField
                  style={{ width: '45%', margin: '0 20px' }}
                  label="No. Of Opening"
                  variant="outlined"
                  placeholder="Enter Number"
                  required
                                />
                       <FormControl variant="outlined" required
                             style={{width: '45%', margin: '0 20px'}}>
                                
        <InputLabel>Profile</InputLabel>
                                <Select
                                   
          name="role"
          label="Role"
        >
          <MenuItem value="admin">Web Desginer</MenuItem>
          <MenuItem value="editor">Web Developer</MenuItem>
          <MenuItem value="viewer">Data Entry</MenuItem>
          <MenuItem value="admin">Document Verification</MenuItem>
          <MenuItem value="editor">Telecaller</MenuItem>
          <MenuItem value="viewer">Receptionist</MenuItem>
          <MenuItem value="viewer">Other</MenuItem>
          
        </Select>
      </FormControl>
                </Grid2> 
                 <Grid2 xs={12} sm={6} marginTop={2}>
              
                  <TextField
                  style={{ width: '45%', margin: '0 20px'  }}
                  label="Mode Of Interview"
                  variant="outlined"
                  placeholder="Online/Offline"
                  required
                  />
                  <FormControl variant="outlined" required
                             style={{width: '45%', margin: '0 20px'}}>
                                
        <InputLabel>Experience</InputLabel>
                                <Select
                                   
          name="role"
          label="Role"
        >
          <MenuItem value="admin">0-1 Years</MenuItem>
          <MenuItem value="editor">1-2 Years</MenuItem>
          <MenuItem value="viewer">2-3 Years</MenuItem>
          <MenuItem value="admin">3-4 Years</MenuItem>
          <MenuItem value="editor">4-5 Years</MenuItem>
          <MenuItem value="viewer">Other</MenuItem>
          
        </Select>
      </FormControl>
                </Grid2> 
                 <Grid2 xs={12} sm={6} marginTop={2}>
                <TextField
                  style={{ width: '45%', margin: '0 20px' }}
                  label="Job Timining"
                  variant="outlined"
                  placeholder="Ex:- 9:30AM to 6:30PM"
                  required
                  />
                  <TextField
                  style={{ width: '45%', margin: '0 20px'  }}
                  label="Employment Type"
                  variant="outlined"
                  placeholder="PartTime/FullTime"
                  required
                />
                </Grid2> 
                <Grid2>
                  <Button style={{border: '1px solid green', padding: '15px 60px 15px 60px', margin: '40px 0', backgroundColor: 'green', color: 'white'}}>
                    Submit
                  </Button>
                            </Grid2>
                          
                
            </Grid2>
                    </form>
               </Box>
          </Container>
          </Box>
        </>
    )
}

export default EmployeeForm;
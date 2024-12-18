import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { Grid, TextField, Button, Box } from "@mui/material";

const ContactForm = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease-in-out", 
      
    });
  }, []);

  return (
    <>
      <Box>
        <Box
          sx={{
            maxWidth: "1146px",
            margin: "auto",
            padding: "20px",
            paddingBottom: "80px",
          }}
        >
          <Grid container spacing={5}>
            {/* First Name */}
            <Grid
              item
              xs={12}
              sm={6}
              data-aos="fade-right" 
            >
              <TextField
                fullWidth
                label="First Name"
                variant="outlined"
                placeholder="Enter First Name*"
              />
            </Grid>
            {/* Last Name */}
            <Grid
              item
              xs={12}
              sm={6}
              data-aos="fade-left" 
            >
              <TextField
                fullWidth
                label="Last Name"
                variant="outlined"
                placeholder="Enter Last Name*"
              />
            </Grid>
            {/* Email Address */}
            <Grid
              item
              xs={12}
              sm={6}
              data-aos="fade-right" 
              data-aos-delay="200" 
            >
              <TextField
                fullWidth
                label="Email Address"
                variant="outlined"
                placeholder="Enter Email Address*"
              />
            </Grid>
            {/* Phone Number */}
            <Grid
              item
              xs={12}
              sm={6}
              data-aos="fade-left" 
              data-aos-delay="200" 
            >
              <TextField
                fullWidth
                label="Phone Number"
                variant="outlined"
                placeholder="Enter Phone Number*"
              />
            </Grid>
            {/* Message */}
            <Grid
              item
              xs={12}
              data-aos="fade-up" 
              data-aos-delay="400" 
            >
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                placeholder="Enter Message"
                multiline
                rows={4}
              />
            </Grid>
            {/* Submit Button */}
            <Grid
              item
              xs={12}
              sx={{ justifyContent: "center", display: "flex" }}
              data-aos="zoom-in" 
              data-aos-delay="600" 
            >
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="success"
                  fullWidth
                  sx={{
                    height: "60px",
                    fontSize: "18px",
                    margin: "30px 0",
                    backgroundColor: "#41A748",
                    "&:hover": {
                      backgroundColor: "#41a900",
                    },
                  }}
                >
                  Send Us
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default ContactForm;

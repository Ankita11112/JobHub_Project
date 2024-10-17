import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import bgImage from '../../assets/Images/bgImage.png';
import HeaderImage from '../../assets/Images/HeaderImage.png';

const Header = () => {

  return (
    <>
     <Box sx={{
       backgroundImage: `url(${bgImage})`,
       backgroundRepeat:"no-repeat",
       backgroundSize: "100%", // Position the image in the center
          width: '100%',
          height: "auto"
     }}>
        <Grid container sx={{
             width: "80%",
        }}>
          <Grid item xs={12} md={6}>
          <Stack
              spacing={2}
              sx={{
                paddingTop: "12%",
                paddingBottom: "10%",
                height: { xs: "auto", md: "580px" }, // Adjust height based on screen size
                width: "100%",
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  fontWeight: "bold",
                  fontFamily: "Roboto, sans-serif",
                  justifyContent: "left",
                  fontSize: { xs: "40px", sm: "50px", md: "40px" },
                }}
              >
                Find Your Career With <span style={{color: "green"}}> JOBHUB</span>
              </Typography>
              <Typography
                className="pt-3"
                sx={{
                  fontSize: "18px",
                  fontFamily: '"Roboto", sans-serif',
                  fontWeight: "bold",
                  color: "text.primary",
                }}
              >
               Your dream job just click away
              </Typography>
              <Box
                sx={{ width: { xs: "100%", sm: "auto" } }}
                className="mt-[20px]"
              >
                <Button
                //   onClick={onButtonClick}
                  variant="contained"
                  sx={{
                    background:
                      "green",
                    border: 0,
                    borderRadius: 1,
                    boxShadow: "0 3px 5px 2px rgba(63,59,56 .3)",
                    color: "white",
                    height: "60px",
                    width: { xs: "100%", sm: "auto" },
                    padding: "0 30px",
                    fontSize: "18px",
                  }}
                  className="max-sm:my-20 max-sm:text-[12px]"
                >
                  Apply Now
                </Button>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={HeaderImage} width={500} height={500} alt="HeaderImage" />
          </Grid>
        </Grid>
     </Box>
    </>
  )
}

export default Header
import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import bgImage from '../../assets/Images/bgImage.png';
import HeaderImage from '../../assets/Images/HeaderImage.png';

const Header = () => {

  return (
    <>
      <Box sx={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: '100%',
        height: "auto",
        display: "flex",
        justifyContent: "center",
      }}>
        <Grid container sx={{
          width: "80%",
          my: { xs: 4, sm: 8 }
        }} columnSpacing={4}>
          <Grid item xs={12} md={6}>
          <Box sx={{
            mt: 5
          }}>
              <Typography
                variant="h1"
                sx={{
                  width: "100%",
                  fontWeight: "bold",
                  fontFamily: "Roboto, sans-serif",
                  justifyContent: "left",
                  fontSize: { xs: "40px", sm: "50px", md: "60px" },
                }}
              >
                Find Your Career With <span style={{ color: "green" }}> JOBHUB</span>
              </Typography>
              <Typography
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
                className="pt-[50px]"
              >
                <Button
                  // onClick={onButtonClick}
                  variant="contained"
                  sx={{
                    background:
                      "green",
                    border: 0,
                    borderRadius: 1,
                    boxShadow: "0 3px 5px 2px rgba(63,59,56 .3)",
                    color: "white",
                    height: "50px",
                    width: { xs: "100%", sm: "auto" },
                    padding: "0px 40px",
                    fontSize: "14px",
                  }}
                  className="max-sm:my-20 max-sm:text-[12px]"
                >
                  Apply Now
                </Button>
          </Box>
            
              <Grid container sx={{
                width: "100%",
                pt: 10
              }}>
              <Grid item xs={8} sm={9} sx={{ 
                  maxWidth: '400px',
                  width: { xs: "100%", sm: "auto" },
                  pt: {xs: 2, sm: 3}
                   }}>
              <TextField
                variant="outlined"
                placeholder="Search Job"
                fullWidth
              />
              </Grid>
              <Grid item xs={4} sm={3}>
                <Button
                  // onClick={onButtonClick}
                  variant="contained"
                  sx={{
                    background: "green",
                    border: 0,
                    borderRadius: 1,
                    boxShadow: "0 3px 5px 2px rgba(63,59,56 .3)",
                    color: "white",
                    mt: 3,
                    ml: 2,
                    height: "50px",
                    width: { xs: "100%", sm: "auto" },
                    fontSize: "14px",
                  }}
                >
                 Search
                </Button>
              </Grid>
              </Grid>
              </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{
            display: { xs: "none", sm: "none", md: "block" },
          }}>
            <img src={HeaderImage} width="85%" height="auto" sx={{
              px: 2,
            }} alt="HeaderImage" />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Header;
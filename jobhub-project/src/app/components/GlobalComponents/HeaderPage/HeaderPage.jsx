import { Box, Grid2, TextField, Typography } from '@mui/material';
import React from 'react';
import ButtonComponent from '../ButtonComponent/ButtonComponent.jsx';

const HeaderPage = ({ backgroundImage, headerText, subText, buttonTitle1, buttonTitle2, onButtonClick1, onButtonClick2, imgSrc, containerSection }) => {
  return (
    <>
      <Box sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "100%",
        backgroundSize: "cover",
        width: '100%',
        py: { xs: 4, sm: 2 },
        height: "auto",
      }}>
        <Grid2 container 
        sx={{
          width: "80%",  
          margin: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" }, 
        }}
        >
          
          {/* Content Section */}
          <Grid2 item xs={12} md={6} sx={{
              width: {xs: "none", sm:"none", md: "50%"},
              pt: 5,
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              flexDirection: "column",
          }}>
              <Typography
                variant="h1"
                sx={{
                  width: {sm: "80%", md: "100%"},
                  fontWeight: "bold",
                  fontFamily: "Roboto, sans-serif",
                  textAlign: { xs: "center", md: "left" },
                  fontSize: { xs: "40px", sm: "50px", md: "60px" },
                }}
              >
                {headerText}
              </Typography>
              <Typography
                sx={{
                  width: "100%",
                  fontSize: "19px",
                  fontFamily: '"Roboto", sans-serif',
                  fontWeight: "bold",
                  textAlign: { xs: "center", md: "left" },
                  color: "text.primary",
                  pt: { xs: 2 }
                }}
              >
                {subText}
              </Typography>
              <Box
                sx={{ width: "100%", display: "flex", justifyContent: { xs: "center", md: "flex-start"}, pt: "50px" }}
              >
                <ButtonComponent title={buttonTitle1} onClick={onButtonClick1} />
              </Box>

              {containerSection && (
                <Grid2 container sx={{
                  width: "100%",
                  pt: {xs: 8, sm: 8, md: 4},
                  mb: {xs: 8, sm: 8}
                }}>
                  <Grid2 item xs={12} sm={8} sx={{
                    width: { xs: "100%", md : "50%" },
                    pt: { xs: 0, sm: 4, md: 6 }
                  }}>
                    <TextField
                      variant="outlined"
                      placeholder="Search Job"
                      fullWidth
                    />
                  </Grid2>
                  <Grid2 item xs={12} sm={4} sx={{
                    width: { xs: "100%", md : "100%", lg : "40%" },
                    pt: { xs: 4, sm: 4, md: 6 },
                    pl: { sm: 2 },
                    display: "flex",
                    justifyContent: { xs: "center", md: "flex-start" },
                  }}>
                    <ButtonComponent title={buttonTitle2} onClick={onButtonClick2} />
                  </Grid2>
                </Grid2>
              )}
          </Grid2>

          {/* Image Section */}
          <Grid2 item xs={12} md={6} sx={{
            width: {xs: "none", sm:"none", md: "50%"},
            display: {xs: "none", sm: "none", md: "flex", lg: "flex"},
            justifyContent: { xs: "center", md: "flex-end" },
            mt: { xs: 4, md: 0 },
          }}>
            <img src={imgSrc} style={{ width: "100%", height: "auto", }} alt="HeaderImage" />
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
};

export default HeaderPage;


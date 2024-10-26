import { Box, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import ButtonComponent from '../ButtonComponent/ButtonComponent.jsx';

const HeaderPage = ({ backgroundImage, headerText, subText, buttonTitle1, buttonTitle2, onButtonClick1, onButtonClick2, imgSrc }) => {

  return (
    <>
      <Box sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: { xs: "center", sm: "center", md: "-500px 0px" },
        backgroundSize: "cover",
        width: '100%',
        py: { xs: 4, sm: 8 },
        height: "auto",
        display: "flex",
        justifyContent: "center",
        pl: { md: 8 }
      }}>
        <Grid container sx={{
          width: "88%",
          display: "flex",
          justifyContent: "center",
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
                  textAlign: { xs: "center", md: "left" },
                  fontSize: { xs: "40px", sm: "50px", md: "60px" },
                }}
              >
                {headerText}
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
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
                sx={{ width: "100%", display: "flex", flexGrow: 1, justifyContent: { xs: "center", md: "left" } }}
                className="pt-[50px]"
              >
                <ButtonComponent title={buttonTitle1} onClick={onButtonClick1} />
              </Box>

              <Grid container sx={{
                width: "100%",
                pt: 10
              }}>
                <Grid item xs={12} sm={8} sx={{
                  maxWidth: '400px',
                  width: { xs: "100%", sm: "auto" },
                  pt: { xs: 0, sm: 3 }
                }}>
                  <TextField
                    variant="outlined"
                    placeholder="Search Job"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4} sx={{
                  pt: { xs: 2, md: 3 },
                  pl: { sm: 2, md: 2 },
                  alignContent: { xs: "center", md: "left" }
                }}>
                  <ButtonComponent title={buttonTitle2} onClick={onButtonClick2} />
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{
            display: { xs: "none", sm: "none", md: "block" },
          }}>
            <img src={imgSrc} width="90%" height="auto" alt="HeaderImage" />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default HeaderPage;
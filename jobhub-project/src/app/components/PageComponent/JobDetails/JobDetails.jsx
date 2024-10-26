import { Box, Grid2, Typography } from '@mui/material'
import React from 'react'

const JobDetails = () => {
  return (
    <>
      <Box sx={{
        py: 5,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        color: "white",
        width: "100%",
        display: "flex",
          justifyContent: "center",
          alignItems: "center",
      }}>
        <Grid2 container spacing={5} sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          <Grid2 item xs={12} sx={{
            margin: "auto"
          }}>
            <Box sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: {xs: 4, md: 1},
            }}>
              <Typography variant="h5" gutterBottom component="div"
              style={{
                fontWeight: "bold"
              }}
              >Live jobs: </Typography>
              <Typography variant="h5" gutterBottom component="div"
              style={{
                fontWeight: "bold"
              }}
              > 1,200</Typography>
            </Box>
          </Grid2>
          <Grid2 item xs={12} sx={{
            margin: "auto"
          }}>
            <Box sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: {xs: 4, md: 1},
            }}>
              <Typography variant="h5" gutterBottom component="div" 
              style={{
                fontWeight: "bold"
              }}
              >Companies: </Typography>
              <Typography variant="h5" gutterBottom component="div" 
              style={{
                fontWeight: "bold"
              }}
              >200</Typography>
            </Box>
          </Grid2>
          <Grid2 item xs={12} sx={{
            margin: "auto"
          }}>
            <Box sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: {xs: 4, md: 1},
            }}>
              <Typography variant="h5" gutterBottom component="div" 
              style={{
                fontWeight: "bold"
              }}
              >Process: </Typography>
              <Typography variant="h5" gutterBottom component="div" 
              style={{
                fontWeight: "bold"
              }}
              >550</Typography>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </>
  )
}

export default JobDetails
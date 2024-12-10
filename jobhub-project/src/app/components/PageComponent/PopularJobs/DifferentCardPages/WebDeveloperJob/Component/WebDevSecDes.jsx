import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React from 'react';
import html from '../../../../../../assets/Images/WebDeveloper/html.png'
import css from '../../../../../../assets/Images/WebDeveloper/css.png'
import js from '../../../../../../assets/Images/WebDeveloper/js.png'
import rec from '../../../../../../assets/Images/WebDeveloper/rec.png'
import node from '../../../../../../assets/Images/WebDeveloper/node.png'

export default function WebDevSecDes() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          mb:'30px'
        }}
      >
        <Typography

          variant="h4"
          sx={{
            textAlign: 'center',
            marginBottom: 4,
            fontSize: { xs: 20, sm: 40, md: 50 }
          }}
        >
          Top Technology For <span style={{ color: 'green' }}> Web Developer</span>
        </Typography>

        <Box>
          <Grid container spacing={9} justifyContent="center">
            <Grid item sm={2} md={2}  >
              <Box sx={{ objectFit: 'cover' }}><img style={{ height: '11rem' }} src={html} /></Box>
            </Grid>
            <Grid item sm={2} md={2} >
              <Box sx={{ objectFit: 'contain' }}><img style={{ height: '11rem' }} src={css} /></Box>
            </Grid>
            <Grid item sm={2} md={2} >
              <Box sx={{ objectFit: 'contain' }}><img style={{ height: '11rem' }} src={js} /></Box>
            </Grid>
            <Grid item sm={2} md={2} >
              <Box sx={{ objectFit: 'contain' }}><img style={{ height: '11rem' }} src={node} /></Box>
            </Grid>
            <Grid item sm={2} md={2} >
              <Box sx={{ objectFit: 'contain' }}><img style={{
                height: '11rem',

              }} src={rec} /></Box>
            </Grid>

          </Grid>
        </Box>
      </Box>
    </>
  );
}

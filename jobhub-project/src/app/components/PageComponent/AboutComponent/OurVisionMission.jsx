import React from 'react';
import { Box, Typography, Card, CardContent, Grid2 } from '@mui/material';
import Our_Vission_Mission_Image from '../../../assets/Images/AboutPage/Our_Vission_Mission_Image.png';

const MissionVisionSection = () => {
  return (
    <Box sx={{ paddingTop: '30px', backgroundColor: '#d3f1ec' }}>
      <Grid2 container  alignItems="center" justifyContent={'center'}>
        {/* Left Image */}
        <Grid2  xs={12} md={6}>
          <Box
            component="img"
            src={Our_Vission_Mission_Image}
            alt="Person pointing"
            sx={{
              width: '100%',      
              height: 'auto',
              borderRadius: 2,
              objectFit: 'cover',
            }}
          />
        </Grid2>

        {/* Right Content */}
        <Grid2 xs={12} md={6}
        sx={{width: '50%'}}>
          {/* Mission Card */}
          <Card sx={{ marginBottom: 2, boxShadow: 3}}>
            <CardContent>
              <Typography variant="h5" gutterBottom color="primary">
                Our Mission
              </Typography>
              <Typography variant="body1">
                To empower job seekers and employers by providing a comprehensive platform that simplifies the job search and hiring process. We are committed to connecting talented professionals with top companies through innovative tools, real-time job listings, and personalized 
career resources. Our mission is to create a seamless experience 
that enhances career growth, bridges the gap between talent and opportunity, and helps businesses thrive with the best candidates.
              </Typography>
            </CardContent>
          </Card>

          {/* Vision Card */}
          <Card sx={{ boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom color="primary">
                Our Vision
              </Typography>
              <Typography variant="body1">
                To revolutionize the way people connect with opportunities by creating a dynamic and inclusive platform where talent   meets
the right opportunities. We envision a world where job seekers
seamlessly discover meaningful careers, and employers find the
best-fit candidates to drive their success, fostering professional growth, innovation, and diversity in every industry.
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default MissionVisionSection;

import { Box, Grid2, Typography } from '@mui/material';
import React from 'react';
import GlobalSwiper from '../GlobalComponents/GlobalSwiper/GlobalSwiper';
import ResumeBg from '../../assets/Images/bgImages/PartnersBg.png';
import Resume1 from "../../assets/Images/ResumeImages/Resume1.png";
import Resume2 from "../../assets/Images/ResumeImages/Resume2.png";
import Resume3 from "../../assets/Images/ResumeImages/Resume3.png";
import Resume4 from "../../assets/Images/ResumeImages/Resume4.png";
import Resume5 from "../../assets/Images/ResumeImages/Resume5.png";
import Resume6 from "../../assets/Images/ResumeImages/Resume6.png";

const ResumeSection = () => {
  const resumeItems = [
    { image: Resume1 },
    { image: Resume2 },
    { image: Resume3 },
    { image: Resume4 },
    { image: Resume5 },
    { image: Resume6 },
  ];
  return (
    <>
      <Box id = "resumeSwiper" sx={{ pt: {xs: 14, md: 10}, width: '80%', mx: 'auto' }}>
        <Grid2 container sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
           pb : {xs: 4}
        }}>
            <Grid2 item xs={12}>
            <Typography variant="h3" component="h2" align="center" sx={{
              fontSize: {xs: "35px", md: "45px",
              backgroundImage: `url(${ResumeBg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              }
            }}>
            Build <span style={{color: "green"}}>Your Resume</span> In Two Minutes
            </Typography>
            </Grid2>
        </Grid2>       
         <GlobalSwiper resumeItems = {resumeItems}/>
      </Box>
    </>
  )
}

export default ResumeSection
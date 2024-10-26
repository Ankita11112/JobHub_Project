import { Box, Typography } from '@mui/material';
import Grid2 from '@mui/material/Grid2';
import React from 'react';
import job1 from "../../assets/Images/PopularJobs/job1.png";
import job2 from "../../assets/Images/PopularJobs/job2.png";
import job3 from "../../assets/Images/PopularJobs/job3.png";
import job4 from "../../assets/Images/PopularJobs/job4.png";
import job5 from "../../assets/Images/PopularJobs/job5.png";
import job6 from "../../assets/Images/PopularJobs/job6.png";
import job7 from "../../assets/Images/PopularJobs/job7.png";
import job8 from "../../assets/Images/PopularJobs/job8.png";
import job9 from "../../assets/Images/PopularJobs/job9.png";
import job10 from "../../assets/Images/PopularJobs/job10.png";
import job11 from "../../assets/Images/PopularJobs/job11.png";
import job12 from "../../assets/Images/PopularJobs/job12.png";
import job13 from "../../assets/Images/PopularJobs/job13.png";
import job14 from "../../assets/Images/PopularJobs/job14.png";
import job15 from "../../assets/Images/PopularJobs/job15.png";
import DifferentJobCard from '../GlobalComponents/JobCard/DifferentJobCard';
import PopularJobsBg from "../../assets/Images/bgImages/PartnersBg.png";

const PopularJobs = () => {
  const jobTypes = [
    { image: job1, title: 'Security' },
    { image: job2, title: 'Hospital' },
    { image: job3, title: 'Field Sales' },
    { image: job4, title: 'Hotel & Staff' },
    { image: job5, title: 'House Worker' },
    { image: job6, title: 'House Cleaning' },
    { image: job7, title: 'Construction' },
    { image: job8, title: 'Delivery' },
    { image: job9, title: 'Ware House Staff' },
    { image: job10, title: 'Trades Person' },
    { image: job11, title: 'Doctor' },
    { image: job12, title: 'Restaurant' },
    { image: job13, title: 'Telecaller' },
    { image: job14, title: 'Driver' },
    { image: job15, title: 'Factory' },
  ];

  return (
    <>
      <Box sx={{ pt: 10, width: '80%', mx: 'auto' }}>
        <Grid2
          container
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mb: 8,
          }}
        >
          <Grid2 item xs={12}>
            <Typography variant="h3" component="h2" align="center" sx={{
              fontSize: { xs: "35px", md: "45px" },
              backgroundImage: `url(${PopularJobsBg})`,
              backgroundSize: "cover",
            }}>
              Popular <span style={{ color: 'green' }}>Jobs</span>
            </Typography>
          </Grid2>
        </Grid2>

        <Grid2
          container
          spacing={4}
          sx={{
            display: 'flex',
            justifyContent: { xs: 'center', md: 'space-between', lg: 'space-between' },
            alignItems: 'center',
          }}
        >
          {jobTypes.slice(0, 15).map((item, index) => (
            <Grid2
              item
              key={index}
              xs={12}
              sm={6}
              md={4}
              lg={2.4}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mt: { xs: 5, sm: 5, md: "index >= 5 ? 5 : 0" }, // Adds gap after the first 5 cards
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)', // Hover effect to slightly enlarge the card
                },
              }}
            >
              <DifferentJobCard jobTypes={item} />
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </>
  );
};

export default PopularJobs;

import { Box, Typography } from '@mui/material';
import Grid2 from '@mui/material/Grid2';
import React from 'react';
import job1 from "../../../assets/Images/PopularJobs/job1.png";
import job2 from "../../../assets/Images/PopularJobs/job2.png";
import job3 from "../../../assets/Images/PopularJobs/job3.png";
import job4 from "../../../assets/Images/PopularJobs/job4.png";
import job5 from "../../../assets/Images/PopularJobs/job5.png";
import job6 from "../../../assets/Images/PopularJobs/job6.png";
import job7 from "../../../assets/Images/PopularJobs/job7.png";
import job8 from "../../../assets/Images/PopularJobs/job8.png";
import job9 from "../../../assets/Images/PopularJobs/job9.png";
import job10 from "../../../assets/Images/PopularJobs/job10.png";
import job11 from "../../../assets/Images/PopularJobs/job11.png";
import job12 from "../../../assets/Images/PopularJobs/job12.png";
import job13 from "../../../assets/Images/PopularJobs/job13.png";
import job14 from "../../../assets/Images/PopularJobs/job14.png";
import job15 from "../../../assets/Images/PopularJobs/job15.png";
import DifferentJobCard from '../../GlobalComponents/JobCard/DifferentJobCard';
import PopularJobsBg from "../../../assets/Images/bgImages/PartnersBg.png";
import { useNavigate } from 'react-router-dom';

const PopularJobs = ({ id }) => {
  const navigate = useNavigate();
  const jobTypes = [
    { image: job13, title: 'Telecaller', onClick: () => navigate('/telecaller') },
    { image: job2, title: 'Document Verification', onClick: () => navigate('/documentverification') },
    { image: job3, title: 'Data Entry', onClick: () => navigate('/dataentry')},
    { image: job5, title: 'Web Designer', onClick: () => navigate('/webdesigner') },
    { image: job6, title: 'Graphic Designer', onClick: () => navigate('/graphicdesigner') },
    { image: job10, title: 'Web Developer', onClick: () => navigate('/webdeveloper') },
    { image: job7, title: 'Construction', onClick: () => navigate('/construction') },
    { image: job11, title: 'Front Office', onClick: () => navigate('/frontoffice') },
    { image: job12, title: 'Backend Office', onClick: () => navigate('/backoffice') },
    { image: job14, title: 'House Keeping', onClick: () => navigate('/housekeeping') },
    { image: job8, title: 'Delivery', onClick: () => navigate('/delivery') },
    { image: job1, title: 'Security Guard', onClick: () => navigate('/securityguard') },
    { image: job4, title: 'Hotel Staff', onClick: () => navigate('/hotelstaff') },
    { image: job9, title: 'Ware House Staff', onClick: () => navigate('/warehousestaff') },
    { image: job15, title: 'Factory Workers', onClick: () => navigate('/factory') },
  ];

  return (
    <>
      <Box id={id} sx={{ pt: 10, width: '80%', mx: 'auto' }}>
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
              <DifferentJobCard jobTypes={item} onClick={item.onClick} />
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </>
  );
};

export default PopularJobs;

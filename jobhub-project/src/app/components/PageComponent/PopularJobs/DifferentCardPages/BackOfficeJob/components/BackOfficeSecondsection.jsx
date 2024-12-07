import React from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import DescriptionBg from '../../../../../../assets/Images/bgImages/PartnersBg.png';
import tickImg from '../../../../../../assets/Images/DocVerifyImage/tickImg.png';
import DataBg from '../../../../../../assets/Images/bgImages/TeleBg.png';
import image1 from '../../../../../../assets/Images/BackOfficeImages/second.png';

const BackOfficeSecondsection = () => {
  const items = [

    {
      icon: tickImg,
      description:
        '<strong>Role and Responsibilities : </strong> Almost all business related administrative and operational assignments such as database assistance/co-ordination and paperwork.',
    },
    {
      icon: tickImg,
      description:
        '<strong>Impact on Organizational Success : </strong>Gladly helps manage front end of an organization, thus increasing the general efficiency and results of an organization.',
    },
    {
      icon: tickImg,
      description:
        '<strong>Responsibilities: </strong> Oversees the administrative and secretarial work, paperwork, human resource functions, systems, and records, and reports.',
    },
    {
      icon: tickImg,
      description:
        '<strong>Benefits : </strong>Strengthens data security and business processes to improve the outcome of an organization.',
    },
  ];

  return (
    <Box
      sx={{
        width: '100%',
        mx: 'auto',
        my: 10,
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: { xs: 'none', md: `url(${DataBg})` },
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        alignItems: 'center',
        px: { xs: 2, md: 8 },
      }}
    >
      {/* Image and Content Section */}
      <Grid
        container
        spacing={4}
        justifyContent='center'
        alignItems='flex-start'
        sx={{
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        {/* Content Section (Left side on md screens and above) */}
        <Grid item size={{ xs: 12, md: 6 }}>


          {items.map((item, index) => (
            <Box
              key={index}
              sx={{ display: 'flex', mb: 3 }} // Reduced margin for closer spacing
            >
              <Box
                component='img'
                src={item.icon}
                alt={`Icon ${index}`}
                sx={{ height: '30px', width: '30px', mr: 2 }}
              />

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '14px', md: '16px' },
                }}
                dangerouslySetInnerHTML={{ __html: item.description }}   // bold text
              />
            </Box>
          ))}
        </Grid>

        {/* Image Section (Right side on md screens and above) */}
        <Grid
          item
          size={{ xs: 12, md: 6 }}
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box
            component='img'
            src={image1}
            alt='Graphic Design'
            sx={{
              width: '90%',
              maxWidth: '400px',
              maxHeight: '350px',
              objectFit: 'cover',
              borderRadius: 2,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default BackOfficeSecondsection;

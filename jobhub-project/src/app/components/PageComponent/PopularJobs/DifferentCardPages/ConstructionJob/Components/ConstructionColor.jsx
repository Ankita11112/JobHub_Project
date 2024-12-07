import React from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import DescriptionBg from '../../../../../../assets/Images/bgImages/PartnersBg.png';
import tickImg from '../../../../../../assets/Images/DocVerifyImage/tickImg.png';
import DataBg from '../../../../../../assets/Images/bgImages/TeleBg.png';

import image1 from '../../../../../../assets/Images/ConstructionImages/construction meeting .png';

const ConstructionColor = () => {
  const items = [

    {
      icon: tickImg,
      description:
        'Purpose: A construction meeting is exclusivelygoal-oriented for addressing the progressof the operations, problems, and scheduling of activities.',
    },
    {
      icon: tickImg,
      description:
        'Participants: These are the project managers, contractors, architects and engineers.',
    },
    {
      icon: tickImg,
      description:
        'Topics: Topics include schedule, cost,precautionary measures and supplies on the materials to be used.',
    },
    {
      icon: tickImg,
      description:
        'Objective: Makes certain that all the project members understand all the objectives, scope and timelines of the project.',
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
        {/* Heading and Content Section (Left side on md screens and above) */}
        <Grid item size={{ xs: 12, md: 6 }}>
          {/* <Typography
            variant='h4'
            component='h2'
            sx={{
              fontWeight: 'bold',
              mb: 4,
              fontSize: { xs: '28px', md: '32px' },
            }}
          >
            Color Theory and Consumer Behavior
          </Typography> */}

          {items.map((item, index) => (
            <Box
              key={index}
              sx={{ display: 'flex', alignItems: 'center', mb: 3 }} // Reduced margin for closer spacing
            >
              <Box
                component='img'
                src={item.icon}
                alt={`Icon ${index}`}
                sx={{ height: '30px', width: '30px', mr: 2 }}
              />
              <Typography
                variant='body1'
                sx={{
                  fontSize: { xs: '14px', md: '16px' },
                }}
              >
                {item.description}
              </Typography>
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

export default ConstructionColor;

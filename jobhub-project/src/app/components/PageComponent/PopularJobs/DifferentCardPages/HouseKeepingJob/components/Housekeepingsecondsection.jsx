import React from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import DescriptionBg from '../../../../../../assets/Images/bgImages/PartnersBg.png';
import tickImg from '../../../../../../assets/Images/DocVerifyImage/tickImg.png';
import DataBg from '../../../../../../assets/Images/bgImages/TeleBg.png';
import image1 from '../../../../../../assets/Images/HousekeepingImages/second.png'

const Housekeepingsecondsection = () => {
  const items = [



    {
      icon: tickImg,
      description:
        'Remove dirt and dust from windows, mirrors, glasses and other similar surfaces in order to give new and neat look to all areas.',
    },
    {
      icon: tickImg,
      description:
        'When it comes to lifestyle cleanliness should be practiced in bathroom, kitchen, and other utilities to foster health and order of business or living.',
    },
    {
      icon: tickImg,
      description:
        'When it comes to lifestyle cleanliness should be practiced in bathroom, kitchen, and other utilities to foster health and order of business or living.',
    },
    {
      icon: tickImg,
      description:
        'When it comes to lifestyle cleanliness should be practiced in bathroom, kitchen, and other utilities to foster health and order of business or living.',
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
        <Grid item size={{
          xs: 12, md: 6

        }}>

          {items.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex', mb: 3,

              }} // Reduced margin for closer spacing
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
            component="img"
            src={image1}
            alt="Graphic Design"
            sx={{
              width: '90%',
              maxWidth: '370px',
              maxHeight: '370px',
              objectFit: 'cover',
            }}
          />


        </Grid>
      </Grid>
    </Box>
  );
};

export default Housekeepingsecondsection;

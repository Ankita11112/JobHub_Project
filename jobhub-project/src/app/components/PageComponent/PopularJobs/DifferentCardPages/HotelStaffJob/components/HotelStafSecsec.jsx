import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import Grid from '@mui/material/Grid2';
import DescriptionBg from '../../../../../../assets/Images/bgImages/PartnersBg.png';
import tickImg from '../../../../../../assets/Images/DocVerifyImage/tickImg.png';
import DataBg from '../../../../../../assets/Images/bgImages/TeleBg.png';
import image1 from '../../../../../../assets/Images/HotelImages/second.png'

const HotelStafSecsec = () => {
  const items = [
    {
      icon: tickImg,
      description:
        '<strong>Clerical Desk Services:</strong> Employees handle guest registration, check-in, check-out, and address all guest inquiries.',
    },
    {
      icon: tickImg,
      description:
        '<strong>Housekeeping:</strong>Housekeeping: Staff maintain clean rooms to ensure guests enjoy a hygienic and comfortable environment.',
    },
    {
      icon: tickImg,
      description:
        '<strong>Catering and Dining:</strong> Cottages prepare and serve first-class meals, adhering to dining standards and providing excellent service.',
    },
    {
      icon: tickImg,
      description:
        '<strong>  Repair Services:</strong> The maintenance team addresses any machinery issues to ensure smooth operations.',
    },
    {
      icon: tickImg,
      description:
        '<strong>Security: </strong> The security department handles all safety and security concerns to ensure guest safety.',
    },
    {
      icon: tickImg,
      description:
        '<strong>Organizational Goal:</strong>  All departments work together to ensure guest comfort, hospitality, and overall satisfaction.',
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
      <Container>

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

                }}
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
                mt:3,
                width: '90%',
                maxWidth: '500px',
                maxHeight: '370px',
                objectFit: 'cover',
              }}
            />


          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HotelStafSecsec;

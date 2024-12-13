import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import Grid from '@mui/material/Grid2';
import DescriptionBg from '../../../../../../assets/Images/bgImages/PartnersBg.png';
import tickImg from '../../../../../../assets/Images/DocVerifyImage/tickImg.png';
import DataBg from '../../../../../../assets/Images/bgImages/TeleBg.png';
import image1 from '../../../../../../assets/Images/HotelImages/first.png';

const HotelStafFirstSec = () => {
  const items = [
    {
      icon: tickImg,
      description:
        '<strong>Guest Assistance:</strong> Also meet the guests’ needs in cases like answering their questions, or helping them with the check-ins/outs and in fact fending for the guests’ comfort.',
    },

    {
      icon: tickImg,
      description:
        '<strong>Housekeeping:</strong> Clean the rooms and official places which are part of guest rooms and other areas accessible to the guests.',
    },
    {
      icon: tickImg,
      description:
        '<strong>Dining Services:</strong>Please guests by bringing the orders, taking reservations and offering to guests in so far as meals are concerned..',
    },
    {
      icon: tickImg,
      description:
        '<strong>Problem Resolution:</strong>Attend to customers and solve their complaints and other related concerns in a manner which meets hotel quality.',
    },
    {
      icon: tickImg,
      description:
        '<strong>Safety and Security:</strong> Writing, practicing, put into action safety protocols and basically creating a favorable environment for safe keeping both staffs and guests.',
    },


  ];
  return (

    <Box
      sx={{
        width: '100%',
        mx: 'auto',
        my: 8,
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: { xs: 'none', md: `url(${DataBg})` },
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '100% 170px',
        backgroundSize: 'cover',
        alignItems: 'center',
        px: { xs: 2, md: 8 },
      }}
    >
      {/* Title Section */}

      <Grid
        container
        justifyContent='center'
        alignItems='center'
        sx={{ py: 2 }}
      >
        <Grid item xs={12} sx={{ textAlign: 'center' }}>
          <Typography
            variant='h3'
            component='h2'
            sx={{
              fontWeight: 'bold',
              mb: 6,
              fontSize: { xs: '35px', md: '45px' },
              position: 'relative',
              '&::after': {
                content: '""',
                display: 'block',
                width: '100%',
                height: '40px',
                backgroundImage: `url(${DescriptionBg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                position: 'absolute',
                bottom: '-30px',
                left: 0,
              },
            }}
          >
            Hotel Staff
          </Typography>

          <Container>
            <Typography
              variant='h5'
              component='h2'
              sx={{

                mb: 4,
                fontSize: { xs: '14px', md: '20px' },
                textAlign: 'center',
              }}


            >
              Hotel employees are responsible for guest satisfaction by offering services like registration, accommodation cleaning services, food service and offering response to guests to improve satisfaction.

            </Typography></Container>

        </Grid>
      </Grid>

      {/* Image and Content Section */}
      <Container>
        <Grid
          container
          spacing={2}
          justifyContent='center'
          sx={{
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          {/* Image Section (Left side on md screens and above) */}
          <Grid
            item
            size={{ xs: 12, md: 6 }}
            sx={{
              display: { xs: 'block', md: 'block' },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'

              }}
            >
              <Box
                component="img"
                src={image1}
                alt="Graphic Design"
                sx={{
                  mt: 2,
                  width: '90%',
                  maxWidth: '470px',
                  maxHeight: '370px',
                  objectFit: 'cover',
                  borderRadius: 2,
                }}
              />
            </Box>

          </Grid>


          {/* Content Section (Right side on md screens and above) */}
          <Grid item size={{ xs: 12, md: 6 }}>
            <Typography
              variant='h4'
              component='h2'
              sx={{
                fontWeight: '500',
                mb: 4,
                fontSize: { xs: '28px', md: '32px' },
              }}
            >
              Key Responsibilities:
            </Typography>
            {items.map((item, index) => (
              <Box
                key={index}
                sx={{ display: 'flex', mb: 4 }}
              >
                <Box
                  component="img"
                  src={item.icon}
                  alt={`Icon ${index}`}
                  sx={{ height: '30px', width: '30px', mr: 2 }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '14px', md: '16px' },
                  }}
                  dangerouslySetInnerHTML={{ __html: item.description }} // bold text
                />
              </Box>
            ))}
          </Grid>

        </Grid>  </Container>
    </Box>
  );
};
export default HotelStafFirstSec;
import React from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import DescriptionBg from '../../../../../../assets/Images/bgImages/PartnersBg.png';
import tickImg from '../../../../../../assets/Images/DocVerifyImage/tickImg.png';
import DataBg from '../../../../../../assets/Images/bgImages/TeleBg.png';
import image1 from '../../../../../../assets/Images/DeliveryImages/second.png'

const DeliverySeconddesc = () => {
  const items = [
    {
      icon: tickImg,
      description:
        '<strong>Definition :</strong> Goods/service will always be delivered on Time Delivery to elaborate that will always deliver in the exact time it was supposed to be delivered and it is also a reflection of the reliability and management of logistical activities.',
    },

    {
      icon: tickImg,
      description:
        '<strong>Customer Satisfaction:</strong> Timely delivery builds trust and customer satisfaction because a customer will have an expectation or a smooth operation, so by delivering in time the delivery supports that expectation or smooth operation, or at least customer experience',
    },

    {
      icon: tickImg,
      description:
        '<strong>Business Impact :</strong> Some examples of such delivery schedules are guaranteed delivery schedules, which relieve penalties or delays, a better image for the company through better customer service, increased repeat business and clients loyalty.',
    },
    {
      icon: tickImg,
      description:
        '<strong>Operational Efficiency:</strong> It simplifies supply chain operation free of inefficiencies like technologies are introduced to achieve on time delivery, effective coordination, optimized routes and real time tracking.',
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
              maxWidth: '470px',
              maxHeight: '470px',
              objectFit: 'cover',
            }}
          />


        </Grid>
      </Grid>
    </Box>
  );
};

export default DeliverySeconddesc;

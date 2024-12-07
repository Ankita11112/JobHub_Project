import React from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import DescriptionBg from '../../../../../../assets/Images/bgImages/PartnersBg.png';
import tickImg from '../../../../../../assets/Images/DocVerifyImage/tickImg.png';
import DataBg from '../../../../../../assets/Images/bgImages/TeleBg.png';
import image1 from '../../../../../../assets/Images/DeliveryImages/first.png';

const Deliveryfirstdesc = () => {
  const items = [
    {
      icon: tickImg,
      description:
        '<strong>Delivery Driver:</strong> Makes sure the goods are delivered safely and withthe required speed by picking up goods from places, following the routes, and taking care of handled items, update customers as wellas collect proofs and take care of the delivery vehicle.',
    },

    {
      icon: tickImg,
      description:
        '<strong>Delivery Manager:</strong> Planes delivery operations by making schedules,managing staff, resolving problems, enforcing compliance, keepingrecords, giving inputs in the teams to enhance processes.',
    },

    {
      icon: tickImg,
      description:
        '<strong>Logistics and Delivery Associate:</strong>  Coordinates pickups and optimizesroutes; tracks schedules, uses technology for reporting, and analyzes data to improve supply chain transport efficiency.',
    },
    {
      icon: tickImg,
      description:
        '<strong>Courier/Parcel Delivery Agent:</strong>   Sorts parcels, verifies recipients, getsconfirmations, handles returns, behaves professionally with customers.',
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
            Delivery
          </Typography>
          <Typography
            variant='h5'
            component='h2'
            sx={{

              mb: 4,
              fontSize: { xs: '14px', md: '20px' },
              textAlign: 'center',
            }}
          >
            Delivery entails the proper and appropriate transfer of products or services to specified recipients at required intervals. They include meeting set program work deadlines, confirming orders,
            delivering high calibre customer relations, implementing safety measures and requirements, and documentation regarding their operations.
          </Typography>
        </Grid>
      </Grid>

      {/* Image and Content Section */}
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
                width: '90%',
                maxWidth: '470px',
                maxHeight: '470px',
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
            Roles and Responsibilities
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

      </Grid>
    </Box>
  );
};
export default Deliveryfirstdesc;
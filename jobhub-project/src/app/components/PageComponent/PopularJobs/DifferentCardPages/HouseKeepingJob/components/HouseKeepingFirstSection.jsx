import React from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import DescriptionBg from '../../../../../../assets/Images/bgImages/PartnersBg.png';
import tickImg from '../../../../../../assets/Images/DocVerifyImage/tickImg.png';
import DataBg from '../../../../../../assets/Images/bgImages/TeleBg.png';
import image1 from '../../../../../../assets/Images/HousekeepingImages/first.png';

const HouseKeepingFirstSection = () => {
  const items = [
    {
      icon: tickImg,
      description:
        '<strong>Cleaning:</strong> Clean spaces, sanitize bathrooms, manage waste, handle laundry,and follow COVID-19 precautions.',
    },

    {
      icon: tickImg,
      description:
        '<strong>Organizing:</strong> Make the structure of furniture more organized, replace used items and keep closets/shelves clean and in order.',
    },
    {
      icon: tickImg,
      description:
        '<strong>Laundry:</strong> Clothing and linen services include washing, drying, folding andironing of clothes and related fabrics. Subtle material must always be treated properly.',
    },
    {
      icon: tickImg,
      description:
        '<strong>Maintenance Reporting:</strong> Report and/or bring any damages which need to be repaired to the management’s attention.Check whether all the appliances an utilities are working or not.',
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
            House Keeping
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
            The act of cleaning and tidying up and other chores associated with living spaces, working environments or any environment but a natural one. Housekeepers have many sweep
            and clean responsibilities and other repair and maintenance tasks.

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
                maxWidth: '370px',
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

      </Grid>
    </Box>
  );
};
export default HouseKeepingFirstSection;
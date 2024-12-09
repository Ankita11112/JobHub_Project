import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import DescriptionBg from '../../../../../../assets/Images/bgImages/PartnersBg.png';
import tickImg from '../../../../../../assets/Images/DocVerifyImage/tickImg.png';
import DataBg from '../../../../../../assets/Images/bgImages/TeleBg.png';
import image1 from '../../../../../../assets/Images/ConstructionImages/Planning & Design .png';

const ConstructionDescription = () => {
  const items = [
    {
      icon: tickImg,
      description:
        'Collaborative Environment: Plans, sketches, models, and computers are scattered at a worktable and few architects and engineers discuss something.',
    },
    {
      icon: tickImg,
      description:
        'Focus on Precision: , where great emphasis is put on precision and exact computation, demonstrated by equipment such as rulers, pencils, and CAD applications.',
    },
    {
      icon: tickImg,
      description:
        'Conceptual Phase: The establishment is the beginning or putting into a concrete form of thoughts, designs and concepts which are to be built. ',
    },
    {
      icon: tickImg,
      description:
        'Interior designing: an interior designer formulates and integrates design, colour and style into aesthetical and utilization of space. ',
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
            Construction
          </Typography>
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

          {/* Content Section (Right side on md screens and above) */}
          <Grid item size={{ xs: 12, md: 6 }}>
            {items.map((item, index) => (
              <Box
                key={index}
                sx={{ display: 'flex', alignItems: 'center', mb: 4 }}
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
        </Grid>
      </Container>
    </Box>
  );
};

export default ConstructionDescription;


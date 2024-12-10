import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import DescriptionBg from '../../../../../../assets/Images/bgImages/PartnersBg.png';
import tickImg from '../../../../../../assets/Images/DocVerifyImage/tickImg.png';
import DataBg from '../../../../../../assets/Images/bgImages/TeleBg.png';
import image1 from '../../../../../../assets/Images/GraphicImages/Color Theory.png';

const GraphicColor = () => {
  const items = [
    {
      icon: tickImg,
      description: 'Which color converts best?',
    },
    {
      icon: tickImg,
      description:
        'However, colors do play an important role in determining consumer behavior and directly affect buying decisions as well as brand perceptions.',
    },
    {
      icon: tickImg,
      description:
        'Color psychology helps designers understand the approach one should have in creating designs that are engaging, relating both to functionality and aesthetic appeal.',
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
      <Container>
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
            <Typography
              variant='h4'
              component='h2'
              sx={{
                fontWeight: 'bold',
                mb: 4,
                fontSize: { xs: '28px', md: '32px' },
              }}
            >
              Color Theory and Consumer Behavior
            </Typography>

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
      </Container>
    </Box>
  );
};

export default GraphicColor;

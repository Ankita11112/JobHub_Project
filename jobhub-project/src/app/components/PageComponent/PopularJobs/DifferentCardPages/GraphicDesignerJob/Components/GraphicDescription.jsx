import React from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import DescriptionBg from '../../../../../../assets/Images/bgImages/PartnersBg.png';
import tickImg from '../../../../../../assets/Images/DocVerifyImage/tickImg.png';
import DataBg from '../../../../../../assets/Images/bgImages/TeleBg.png';
import image1 from '../../../../../../assets/Images/GraphicImages/Graphicimg.png';

const GraphicDescription = () => {
  const items = [
    {
      icon: tickImg,
      description:
        'Graphic designing is an art profession that deals with the provision of visual communications to support one brand or the other. Adobe Creative Suite applications such as Photoshop, Illustrator and InDesign help designers translate their ideas effectively thus catering for the target audiences.',
    },
    {
      icon: tickImg,
      description:
        'Choosing effective typography is essential; applying an appropriate typeface with the right emotional meaning is important for design. Colour theory affects people and solidifies branding which is the way in which a designer comes up with positive and pleasure associations easily while layout fundamentals makes it easy for a designer to create aesthetic orderly and balanced plans.',
    },
    {
      icon: tickImg,
      description:
        'Real-life logo design experience helps brands achieve memorable identities, while consistent visuals across media enhance recognition and drive marketing success.',
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
            Graphic Design <span style={{ color: 'green' }}>Insights</span>
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
            component='img'
            src={image1}
            alt='Graphic Design'
            sx={{
              width: '90%',
              maxHeight: '400px',
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
    </Box>
  );
};

export default GraphicDescription;

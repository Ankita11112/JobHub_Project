import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import DescriptionBg from '../../../../../../assets/Images/bgImages/PartnersBg.png';
import tickImg from '../../../../../../assets/Images/DocVerifyImage/tickImg.png';
import DataBg from '../../../../../../assets/Images/bgImages/TeleBg.png';
import image1 from '../../../../../../assets/Images/GuardImages/first.png';

const Secfirstdesc = () => {
  const items = [
    {
      icon: tickImg,
      description:
        '<strong>Surveillance and Monitoring:</strong>  They protect life on patrol areas, monitor CCTVs and alarms; and detect security breach.',
    },
    {
      icon: tickImg,
      description:
        '<strong>Access Control: </strong> Revising to, Identify occupying own to b justify, maintain visitors and vehicle records and restrain unauthorized accession and protection.',
    },
    {
      icon: tickImg,
      description:
        '<strong>Emergency Response:</strong>  Alerts to alarms, and assists evacuations or medical situations, when required for service to emergency.',
    },
    {
      icon: tickImg,
      description:
        '<strong>Property Protection:</strong> It will help limit theft and damage as well as check up on locks and windows and secure your assets.',
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
            Security Guard
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
              The duty of a security guard is to safely and securely guard premises and property, and protect people. Their purpose is to keep them secured to secure an unauthorized
              access, monitors their activities as well as minimizes the emergencies.

            </Typography>
          </Container>
        </Grid>
      </Grid>
      <Container>

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
                  maxWidth: '430px',
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
      </Container>
    </Box>
  );
};
export default Secfirstdesc;

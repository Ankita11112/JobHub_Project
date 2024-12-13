import React from 'react';
import { Box, Container, Grid2, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import DescriptionBg from '../../../../../../assets/Images/bgImages/PartnersBg.png';
import tickImg from '../../../../../../assets/Images/DocVerifyImage/tickImg.png';
import DataBg from '../../../../../../assets/Images/bgImages/TeleBg.png';
import image1 from '../../../../../../assets/Images/FrontOfficeImages/first .png';
import List from './List';

const FrontDescription = () => {

  return (
    <>
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
              <strong>Front Office</strong>
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
                A Receptionist is responsible for the first contact an organization has with its visitors and customers
                and ensures that the organization’s image, whether breached or formal, is maintained. Front desk
                staff has an explicit function to perform in order to maintain proper spiraling and serve as the first
                line of touch points.

              </Typography>
            </Container>
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
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box
                component="img"
                src={image1}
                alt="FrontDesk"
                sx={{
                  width: '90%',
                  maxWidth: '350px',
                  maxHeight: '350px',
                  objectFit: 'cover',
                  borderRadius: 2,
                }}
              />
            </Grid>



            <Grid item size={{ xs: 12, md: 6 }}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography
                  variant='h4'
                  component='h2'
                  sx={{

                    mb: 4,
                    fontSize: { xs: '28px', md: '32px' },
                    textAlign: 'center',
                  }}
                > <strong> Key Responsibilities</strong>

                </Typography>
              </Box>

              <List
                head={'Front Desk Management:'}
                one={'Respond to inquiries from visitors, clients, and employees professionally.'}
                two={'Field, filter, and transfer telephone calls to appropriate departments'}
              />

              <List
                head={'Administrative Support:'}
                one={'  Handle incoming and outgoing communications such as emails, parcels, and letters.'}
                two={' Maintain schedules and calendars for appointments.'}
              />

              <List
                head={' Customer Service:'}
                one={'Provide prompt and courteous answers to questions via in-person interactions, email, or phone calls.'}
                two={'Share details about the company’s profile, services, and any applicable privacy and security policies.'}
              />


            </Grid>


          </Grid>
        </Container>


      </Box>

    </>


  );
};

export default FrontDescription;


import React from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import DescriptionBg from '../../../../../../assets/Images/bgImages/PartnersBg.png';
import tickImg from '../../../../../../assets/Images/DocVerifyImage/tickImg.png';
import DataBg from '../../../../../../assets/Images/bgImages/TeleBg.png';
import image1 from '../../../../../../assets/Images/BackOfficeImages/first.png';

const BackDescription = () => {
  const items = [
    {
      icon: tickImg,
      description:
        '<strong>Data Management:</strong> Record, sort, and keep up to date records and database. To uphold the accuracy of information, one has to enter, verify, as well as update data in an appropriate time.',
    },

    {
      icon: tickImg,
      description:
        '<strong>Coordination and Support:</strong> Support other departments like sales, marketing, or Human Resources with their back-end work. Consult with other vendors, suppliers, and other stakeholders as required.',
    },
    {
      icon: tickImg,
      description:
        '<strong>System and Workflow Maintenance:</strong> Make sure that the backend strategic processes run smoothly. Handle simple complaints and refer clients to other technical departments for high-level complaints.',
    },
    {
      icon: tickImg,
      description:
        '<strong>Process Optimization:</strong> Identify problems in the backend process and suggest improvements. Assist organizations in enhancing their efficiency to meet performance objectives.',
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
            Back Office
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
            The job of Backend Office Executive is therefore very important as they are key in facilitating the normal running of the  organization. They send paperwork and data processing and operation works to
            the front end teams so that administrative and operation works can go smoothly.

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
                maxWidth: '500px',
                maxHeight: '400px',
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
              fontWeight: 'bold',
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
export default BackDescription;
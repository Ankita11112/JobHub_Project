import React from 'react';
import { Box, Card, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import DescriptionBg from '../../../../../../assets/Images/bgImages/PartnersBg.png';
import tickImg from '../../../../../../assets/Images/DocVerifyImage/tickImg.png';
import DataBg from '../../../../../../assets/Images/bgImages/TeleBg.png';
import image1 from '../../../../../../assets/Images/ConstructionImages/construction meeting .png';
import last from '../../../../../../assets/Images/FrontOfficeImages/second.gif';

const FrontGif = () => {
  const items = [



    {
      icon: tickImg,
      description:
        'Resolve Complaints Efficiently: Address and resolve customer complaints or concerns, ensuring customer satisfaction while adhering to company policies. ',
    },
    {
      icon: tickImg,
      description:
        '  Follow-Up on Customer Requests: Maintain consistent follow-ups with customers to ensure their issues are resolved or their inquiries are addressed completely.',
    },
    {
      icon: tickImg,
      description:
        ' Gather Customer Feedback: Collect and record feedback from clients to help improve the quality of services offered by the company.',
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
        backgroundPosition: '100% 170px',
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
            Customer Service:
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
         <Card sx={{
          background: "linear-gradient(to bottom, #ffffff, #4caf50)",
          p: 9
         }}>
          <Box
            component="img"
            src={last}
            alt="Graphic Design"
            sx={{
              width: '100%',
              maxWidth: '500px', // Adjusted size
              maxHeight: '500px',
              borderRadius: 2,
              // marginTop: '30px',
              transform: 'scale(1.3)', 
            }}/>
            </Card>



        </Grid>
      </Grid>
    </Box>
  );
};

export default FrontGif;


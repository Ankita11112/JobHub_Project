import React from 'react';
import { Box, Card, CardContent, Grid2, Typography } from '@mui/material';
import WebDesignImg from '../../../../../../assets/Images/WebDesignImgs/frontendImg.png';
import BrandContentImg from '../../../../../../assets/Images/WebDesignImgs/BrandContent.png';
import UiUxDesignImg from '../../../../../../assets/Images/WebDesignImgs/UxDesign.png';
import webImg1 from '../../../../../../assets/Images/WebDesignImgs/webImg1.png';
import webImg2 from '../../../../../../assets/Images/WebDesignImgs/webImg2.png';
import webImg3 from '../../../../../../assets/Images/WebDesignImgs/webImg3.png';

const WebDesignCard = () => {
  const cardContent = [
    {
      img: WebDesignImg,
      title: "Front-End Designer",
      description:
        "A Front-End Designer combines design and coding skills to create visually appealing, responsive websites using HTML, CSS, and JavaScript.",
      img1: webImg1,
    },
    {
      img: BrandContentImg,
      title: "Brand and Content Designer",
      description:
        "Creates cohesive visual identities, engaging content, and compelling brand stories that resonate and connect with people.",
      img1: webImg2,
    },
    {
      img: UiUxDesignImg,
      title: "UI/UX Designer",
      description:
        "Creates user-friendly, people-centered designs that simplify interactions and elevate the digital experience.",
      img1: webImg3,
    },
  ];

  const containerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    mb: 10,
    px: 5,
  };

  const cardStyles = {
    position: 'relative',
    '&:hover .hiddenImg': {
      transform: 'translateX(-100px)', // Smoothly move the image to the left
    },
  };

  const hiddenImg = {
    position: 'absolute',
    top: '66%',
    left: '2%',
    transform: 'translateX(-100%, -100%)', // Center the image
    width: '150px',
    height: '150px',
    transition: 'transform 0.5s ease', // Smooth transition
    zIndex: -1, // Keep the image behind the card
  };

  return (
    <Box sx={{ py: 10, width: '100%', display: 'grid', placeItems: 'center' }}>
      <Grid2 container sx={containerStyles}>
        <Grid2 item xs={12} md={12}>
          <Typography
            variant="h3"
            component="h2"
            sx={{ textAlign: 'center', fontSize: { xs: '35px', md: '45px' } }}
          >
            Key Roles in Modern <span style={{ color: 'green' }}>Web Design</span>
          </Typography>
          <Typography
            variant="body2"
            component="h6"
            sx={{
              textAlign: 'center',
              fontSize: { xs: '15px', md: '17px' },
              px: { md: '10%' },
              pt: 2,
            }}
          >
            A creative, detail-oriented Web designer working with HTML, CSS, JavaScript
            languages and thinking in UI/UX perspective. Both a Figma and Adobe XD user, I
            create and optimize interfaces for a responsive, mobile-first design so that
            websites are aesthetically pleasing, intuitive, and have no issues with
            compatibility across all devices.
          </Typography>
        </Grid2>
      </Grid2>

      <Grid2 container spacing={5} sx={{ width: '80%' }}>
        {cardContent.map((item, index) => (
          <Grid2
            item
            key={index}
            xs={12}
            sm={8}
            md={4}
            sx={{ width: { sm: '100%', md: '30%' }, ...cardStyles }}
          >
            <Card sx={{ width: '100%', height: '450px' }}>
              <img
                src={item.img}
                style={{ width: '100%', height: '50%' }}
                alt={`${item.title} illustration`}
              />
              <CardContent sx={{ height: '100%' }}>
                <Typography
                  variant="h4"
                  component="h3"
                  sx={{
                    fontSize: { xs: '22px', md: '30px' },
                    textAlign: 'center',
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  component="h6"
                  sx={{
                    textAlign: 'justify',
                    fontSize: { xs: '13px', md: '17px' },
                    pt: index === 0 ? 2 : index === 1 ? 4 : 6,
                    pb: index === 0 ? 3 : index === 1 ? 6 : 7,
                  }}
                >
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
            <Box
              sx={{
                ...hiddenImg,
              }}
              className="hiddenImg"
            >
              <img
                src={item.img1}
                style={{ height: '100%', width: '100%' }}
                alt={`${item.title} cartoon`}
              />
            </Box>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default WebDesignCard;

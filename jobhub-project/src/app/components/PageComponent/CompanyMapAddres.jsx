import React from 'react';
import { Box, Typography } from '@mui/material';

const MapSection = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px',
        overflow: 'hidden',  
         padding: "80px 0 10px 0"
      }}
    >
      {/* Heading */}
      {/* <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', textAlign: 'center' }}>
        Our Location
      </Typography> */}

      {/* Embedded Google Map */}
      <Box
        sx={{
          width: '100%',
          height: '400px',
          borderRadius: '8px',
                  overflow: 'hidden',
           
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.146128406689!2d76.74026721549436!3d30.658015482667473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feb36d2b86ab1%3A0x96c391a4eaa1b5de!2sSushma%20Infinium!5e0!3m2!1sen!2sin!4v1694708439924!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </Box>
  );
};

export default MapSection;

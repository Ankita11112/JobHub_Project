import React from 'react';
import { Box, Typography } from '@mui/material';
import tickImg from '../../../../../../assets/Images/DocVerifyImage/tickImg.png';

export default function List({ head, one, two }) {
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box
          component="img"
          src={tickImg}
          alt="Icon 1"
          sx={{ height: '30px', width: '30px', mr: 2 }}
        />
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: '16px', md: '18px' },
            fontWeight: 'bold',
          }}
        >
          {head}
        </Typography>
      </Box>
      <Box sx={{ pl: 4, mb: 2 }}>
        <ul style={{ margin: 0, paddingLeft: '20px', listStyleType: 'disc' }}>
          <li>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '14px', md: '16px' },
              }}
            >
              {one}
            </Typography>
          </li>
          <li>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '14px', md: '16px' },
              }}
            >
              {two}
            </Typography>
          </li>
          {/* <li>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '14px', md: '16px' },
              }}
            >
              {three}
            </Typography>
          </li> */}
        </ul>
      </Box>
    </>
  );
}



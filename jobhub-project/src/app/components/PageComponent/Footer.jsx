import React, { useState } from 'react';
import {
  Box,
  Button,
  IconButton,
  TextField,
  Typography,
  Stack,
  Snackbar,
  Link as MuiLink,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { keyframes } from '@mui/system';
import { Link, useNavigate } from 'react-router-dom'; // React Router Link and useNavigate

export default function Footer() {
  const [email, setEmail] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // Animation: Fade-in effect for the footer
  const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  `;

  const handleSubscribe = (event) => {
    event.preventDefault();
    if (email.includes('@')) {
      setSnackbarOpen(true);
      setEmail('');
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: '#2F3E2F',
        color: 'white',
        py: 6,
        px: { xs: 2, md: 6 },
        
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          gap: 4,
          alignItems: 'center',
        }}
      >
        {/* Left Section: Links */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 8,
          }}
        >
          <Stack spacing={2} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant='h6' gutterBottom>
              Home
            </Typography>
            <InteractiveLink text='About' to='/about' />
            <InteractiveLink text='Contact Us' to='/contact' />
            <InteractiveLink text='Find A Job' to='/#popularSection' />
            <InteractiveLink text='Hire Now' to='/verification' />
          </Stack>

          <Stack spacing={2} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant='h6' gutterBottom>
              Support
            </Typography>
            <InteractiveLink text='Privacy Policy' to='/Privacypolicy' />
            <InteractiveLink
              text='Terms and Conditions'
              to='/Termsandconditions'
            />
          </Stack>

          <Stack spacing={2} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant='h6' gutterBottom>
              Knowledge
            </Typography>
            <InteractiveLink text='Interview Tips' to='#' />
            <InteractiveLink text='Events' to='#' />
          </Stack>
        </Box>

        {/* Right Section: Social Media and Subscription */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
            gap: 2,
          }}
        >
          <Typography variant='h6' gutterBottom>
            Follow Us
          </Typography>
          <Stack direction='row' spacing={2}>
            <a
              href='https://www.linkedin.com/company/v-recruit-ers/posts/?feedView=all'
              target='_blank'
              rel='noreferrer'
            >
              <AnimatedIcon icon={<LinkedInIcon />} />
            </a>
            <a
              href='https://www.facebook.com/profile.php?id=61562070471655&mibextid=ZbWKwL'
              target='_blank'
              rel='noreferrer'
            >
              <AnimatedIcon icon={<FacebookIcon />} />
            </a>
            <a
              href='https://www.instagram.com/vrecruiters12/'
              target='_blank'
              rel='noreferrer'
            >
              <AnimatedIcon icon={<InstagramIcon />} />
            </a>
          </Stack>

          <form onSubmit={handleSubscribe}>
            <Stack direction='row' spacing={1} alignItems='center'>
              <TextField
                size='small'
                placeholder='Enter Your Email'
                variant='outlined'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  border: 'none',
                  bgcolor: 'white',
                  borderRadius: 4,
                  input: { color: 'black' },
                  width: { xs: '100%', md: 'auto' },
                }}
              />
              <Button
                type='submit'
                variant='contained'
                color='success'
                sx={{
                  transition: 'transform 0.3s',
                  borderRadius: '15px',
                  '&:hover': {
                    transform: 'scale(1.1)',
                  },
                }}
              >
                Subscribe
              </Button>
            </Stack>
          </form>
        </Box>
      </Box>

      {/* Snackbar for Subscription */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        message='Subscribed successfully!'
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </Box>
  );
}

// Interactive Link Component
const InteractiveLink = ({ text, to }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (to && to.includes('#')) {
      e.preventDefault();
      const [path, anchor] = to.split('#');
      if (path) {
        navigate(path);
        setTimeout(() => {
          const target = document.querySelector(`#${anchor}`);
          if (target) target.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      } else {
        const target = document.querySelector(`#${anchor}`);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <MuiLink
      component={Link}
      to={to}
      onClick={handleClick}
      color='inherit'
      underline='hover'
      sx={{
        cursor: 'pointer',
        transition: 'color 0.3s',
        '&:hover': { color: '#66bb6a' },
      }}
    >
      {text}
    </MuiLink>
  );
};

// Animated Icon Component
const AnimatedIcon = ({ icon }) => (
  <IconButton
    sx={{
      transition: 'transform 0.3s, color 0.3s',
      '&:hover': { transform: 'scale(1.2)', color: '#66bb6a' },
    }}
  >
    {icon}
  </IconButton>
);
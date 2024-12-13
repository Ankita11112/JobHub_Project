import React, { useState } from 'react';
import {
  Box,
  IconButton,
  Typography,
  Card,
  CardContent,
  Button,
  keyframes,
} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CloseIcon from '@mui/icons-material/Close';

// Keyframe for the popup/landing effect
const popupAnimation = keyframes`
  0% { transform: scale(0.8); opacity: 0; }
  50% { transform: scale(1.2); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
`;

const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const ChatAi = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState('Hi there! How can I help you?'); 

  const handleOpenChat = () => {
    setIsOpen(true);
  };

  const handleCloseChat = () => {
    setIsOpen(false);
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 30,
        zIndex: 1300,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
      }}
    >
      {/* Chat Popup Card */}
      {isOpen && (
        <Card
          sx={{
            position: 'absolute',
            bottom: 80, 
            right: 0,
            width: 300,
            boxShadow: 3,
            borderRadius: '8px',
            animation: `${popupAnimation} 0.3s ease-out`,
          }}
        >
          <CardContent>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 2,
              }}
            >
              <Typography variant='h6' fontWeight='bold'>
                Find a Right Job 
              </Typography>
              <IconButton onClick={handleCloseChat}>
                <CloseIcon />
              </IconButton>
            </Box>
            <Typography variant='body1' sx={{ marginBottom: 2 }}>
              {content}
            </Typography>
            <Button
              href='https://wa.me/+919518035030?text=Hello%20Jobhub.world%2C%20I%20would%20like%20to%20know%20more%20about%20your%20Jobs.'
              target='_blank'
              rel='noopener noreferrer'
              variant='contained'
              color='success'
              fullWidth
              sx={{
                textTransform: 'none',
                fontSize: '14px',
                padding: '10px',
                borderRadius: '4px',
              }}
            >
              Start Chat
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Floating WhatsApp Icon Button */}
      <IconButton
        onClick={handleOpenChat}
        sx={{
          borderRadius: '50%',
          backgroundColor: 'transparent',
          animation: `${popupAnimation} 0.8s ease-out`,
          transition: 'transform 0.5s ease',
          '&:hover': {
            transform: 'scale(1.1)',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },
        }}
      >
        <WhatsAppIcon
          sx={{
            color: 'white',
            backgroundColor: '#17980E',
            borderRadius: 1,
            fontSize: 50,
            animation: `${pulseAnimation} 5s infinite`,
          }}
        />
      </IconButton>
    </Box>
  );
};

export default ChatAi;

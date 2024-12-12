import React, { useState } from 'react';
import { Box, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Modal, Typography, Card, CardContent } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WorkIcon from '@mui/icons-material/Work';
import PowerSettingsNewRoundedIcon from '@mui/icons-material/PowerSettingsNewRounded';
import ReduceCapacityRoundedIcon from '@mui/icons-material/ReduceCapacityRounded';
import jobhublogo from '../../../../../../assets/Images/logo.png';
import { useNavigate } from 'react-router-dom';
import WorkOutlineRoundedIcon from '@mui/icons-material/WorkOutlineRounded';

export const DashboardSidebar = () => {
  const [active, setActive] = useState("Dashboards");
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const handleExit = () => {
    // Log out logic, e.g., clearing user session, cookies, or tokens
    console.log("User logged out");
    navigate("/verification"); 
  };

  const handleNavigation = (menu, path) => {
    setActive(menu);
    navigate(path);
  };

  const menuItems = [
    { name: 'Dashboard', icon: <DashboardIcon />, path: '/employerdashboard/' },
    { name: 'Create New Job', icon: <WorkOutlineRoundedIcon />, path: '/employerdashboard/jobpostdetailsform' },
    { name: 'My Jobs', icon: <WorkIcon />, path: '/employerdashboard/my-jobs' },
    { name: 'Selected Candidates', icon: <ReduceCapacityRoundedIcon />, path: '/employerdashboard/selected-candidates' },
  ];

  return (
    <Box
      sx={{
        maxWidth: {xs: 240, sm: 240, md: 250},
        miniWidth: {xs: 240, sm: 240, md: 250},
        backgroundColor: '#f0f4f7',
        height: '100vh',
        boxShadow: 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Box>
      <Box
          component="img"
          src={jobhublogo}
          alt="Logo"
          sx={{ width: 100, height: 'auto' }}
          onClick={() => navigate('/')}
        /> 
        <Box
          sx={{
            padding: '16px',
            textAlign: 'center',
            backgroundColor: '#d9ebe6',
          }}
        >
          <Box sx={{ fontWeight: 'bold', fontSize: '14px', marginTop: '8px' }}>Jobhub World</Box>
        </Box>
        {/* Menu Items */}
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.name} disablePadding>
              <ListItemButton
                onClick={() => handleNavigation(item.name, item.path)}
                sx={{
                  backgroundColor: active === item.name ? '#4caf50' : 'transparent',
                  color: active === item.name ? '#fff' : '#000',
                  '&:hover': {
                    backgroundColor: '#4caf50',
                    color: '#fff',
                  },
                }}
              >
                <ListItemIcon sx={{ color: active === item.name ? '#fff' : 'green' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Button variant="contained" fullWidth color="error" sx={{px: 2}} onClick={handleOpen}>
        <PowerSettingsNewRoundedIcon sx={{mr: 1}} /> Logout  
      </Button>
         
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Overlay effect
          }}
        >
          <Card
            sx={{
              maxWidth: 400,
              width: '100%',
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: 3,
              textAlign: 'center',
              padding: '20px',
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ marginBottom: '20px' }}>
                Are you sure you want to logout?
              </Typography>
              <Button
                variant="contained"
                color="success"
                sx={{ marginRight: '10px' }}
                onClick={handleExit}
              >
                Exit
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={handleClose}
              >
                Cancel
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Modal>

      </Box>
    </Box>
  );
};
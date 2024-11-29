import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import ButtonComponent from '../../../../components/GlobalComponents/ButtonComponent/ButtonComponent';
import Grid from '@mui/material/Grid2';
import React, { useState } from 'react';
import DashboardNav from './Components/DashboardNavbar/DashboardNav';
import { DashboardSidebar } from './Components/DashboardSidebar/DashboardSidebar';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PostCard from './Components/Main-Post-Card/PostCard';
import JobPostCard from './Components/Main-Post-Card/JobPostCard';

const EmployerDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          overflowY: "scroll",
          overflowX: "hidden",
          position: "relative", // Ensures toggle button stays positioned correctly
        }}
      >
        {/* Sidebar and Navbar Grid */}
        <Grid container sx={{ height: "100%" }}>
          {/* Sidebar */}
          {isSidebarOpen && (
            <Grid
              item
              sx={{
                width: { xs: 240, sm: 240, md: 250 },
                transition: "width 0.3s ease",
              }}
            >
              <DashboardSidebar
                isSidebarOpen={isSidebarOpen}
                toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
              />
            </Grid>
          )}

          {/* Navbar */}
          <Grid
            item
            sx={{
              flexGrow: 1,
              width: isSidebarOpen ? `calc(100% - ${250}px)` : "100%",
              transition: "width 0.3s ease",
            }}
          >
            <DashboardNav />
            <JobPostCard/>
          </Grid>
        </Grid>

        {/* Toggle Button */}
        <Button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          sx={{
            position: "absolute",
            top: "30px",
            left: isSidebarOpen ? `${220}px` : "-20px", // Adjust position based on sidebar state
            zIndex: 10,
            color: "green",
            borderRadius: "5%",
            // width: "10px",
            // height: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "left 0.3s ease",
            '&:hover': {
              backgroundColor: '#34A853',
              color: 'white',
              boxShadow: '0px 4px 10px rgba(0, 128, 0, 0.3)',
            },
          }}
        >
          {isSidebarOpen ? (<ArrowBackIosIcon />) : (<ArrowForwardIosIcon />)}
        </Button>
      </Box>
    </>
  );
};

export default EmployerDashboard;
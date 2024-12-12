import { Box, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React, { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Outlet } from 'react-router-dom';
import { AdminDashboardSidebar } from './Components/AdminDashboardSidebar/AdminDashboardSidebar';
import AdminDashboardNav from './Components/AdminDashboardNavbar/AdminDashboardNav';

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          overflowY: "scroll",
          background: "linear-gradient(to bottom, #ffffff, rgba(7, 188, 12, 0.3))",
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
              <AdminDashboardSidebar
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
            <AdminDashboardNav />
           <Outlet/>
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

export default AdminDashboard;
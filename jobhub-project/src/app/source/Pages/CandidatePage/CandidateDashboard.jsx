import { Box, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Outlet } from 'react-router-dom';
// import { CandidateDashboardSidebar } from './Components/CandidateDashboardSidebar/CandidateDashboardSidebar';
import CandidateDashboardNav from './Components/CandidateDashboardNavbar/CandidateDashboardNav';
import PageComponent from '../../../components/PageComponent/PageComponent'
import NavAppBar from '../../../components/Navbar/NavAppbar';

const CandidateDashboard = () => {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <>
      <NavAppBar />

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
          {/* {isSidebarOpen && (
            <Grid
              item
              sx={{
                width: { xs: 240, sm: 240, md: 250 },
                transition: "width 0.3s ease",
              }}
            >
              <CandidateDashboardSidebar
                isSidebarOpen={isSidebarOpen}
                toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
              />
            </Grid>
          )} */}

          {/* Navbar */}

          <Grid
            item
            sx={{
              flexGrow: 1,
              // width: isSidebarOpen ? `calc(100% - ${250}px)` : "100%",
              width: "100%",
              transition: "width 0.3s ease",
            }}
          >
            <CandidateDashboardNav />
            <Outlet />
          </Grid>

        </Grid>
      </Box>

    </>
  );
};

export default CandidateDashboard;

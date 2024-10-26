import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import jobhublogo from '../../assets/Images/logo.png';

const pages = ['Home', 'About', 'Services', 'Contact Us'];

function NavAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{
        // boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)', 
        bgcolor: 'background.paper',
        borderBottom: "1px solid #dadada"
      }}>
        <Toolbar disableGutters>
          {/* Image for large screens */}
          <Box
            component="img"
            src={jobhublogo}
            alt="Logo"
            sx={{
              display: { xs: 'none', md: 'flex' },
              width: 120,
              height: 'auto',
              mr: -2,
              ml: 14,
            }}
          />

          {/* Mobile menu icon */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
              sx={{
                ml: 2,
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Image for mobile screens */}
          <Box
            component="img"
            src={jobhublogo}
            alt="Logo"
            sx={{
              display: { xs: 'flex', md: 'none' },
              width: 120,
              height: 'auto',
              mr: 2,

            }}
          />

          {/* Menu items for larger screens - Positioned to the right */}
          <Box sx={{
            flexGrow: 1,
             display: { xs: 'none', md: 'flex' }, 
             justifyContent: 'center',
             ml:10
          }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 0, color: 'black', display: 'block', padding: '20px', ":hover": { color: '#34a853' } }}
              >
                {page}
                {/* <Button variant='contained'>buhghf</Button> */}
              </Button>
            ))}
          </Box>
          <Box sx={{
           display: { xs: 'none', md: 'flex' },
           justifyContent: "center",
           mr: 14
          }}>
          <Button onClick={handleCloseNavMenu} sx={{
              my: 4, color: 'black', display: 'block', margin: '30px', padding: '10px 20px', border: '1px solid #34A853', '&:hover': {
                backgroundColor: '#34A853',
                color: 'white'
              }
            }}>
             Hire Now
            </Button>
            <Button onClick={handleCloseNavMenu} sx={{
              my: 4, color: 'black', display: 'block', margin: '30px', padding: '10px 30px', border: '1px solid #34a853', '&:hover': {
                backgroundColor: '#34a853',
                color: 'white'
              }
            }}>
             Admin
            </Button>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>


  );
}

export default NavAppBar;

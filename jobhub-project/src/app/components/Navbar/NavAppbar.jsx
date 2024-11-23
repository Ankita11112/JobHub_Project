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
import { useNavigate } from 'react-router-dom';
import ButtonComponent from '../GlobalComponents/ButtonComponent/ButtonComponent';

const pages = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact Us', path: '/contact' }
];

function NavAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavigate = (path) => {
    navigate(path);
    handleCloseNavMenu();
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{
        bgcolor: 'background.paper',
        borderBottom: "1px solid #dadada"
      }}>
        <Toolbar disableGutters>
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
            onClick={() => handleNavigate('/')}
          />

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
              sx={{ ml: 2 }}
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
                <MenuItem key={page.label} onClick={() => handleNavigate(page.path)}>
                  <Typography textAlign="center">{page.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            component="img"
            src={jobhublogo}
            alt="Logo"
            sx={{
              display: { xs: 'flex', md: 'none' },
              width: 120,
              height: 'auto',
            }}
            onClick={() => handleNavigate('/')}
          />

          <Box sx={{
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'center',
            mx: 6
          }}>
            {pages.map((page) => (
              <Button
                key={page.label}
                onClick={() => handleNavigate(page.path)}
                sx={{ my: 0, color: 'black', display: 'block', padding: '20px', ":hover": { color: '#34a853' } }}
              >
                {page.label}
              </Button>
            ))}
          </Box>

          <Box sx={{
            display: { xs: 'none', md: 'flex' },
            justifyContent: "center",
            mr: 19
          }}>
            <ButtonComponent
              title="Login"
              onClick={handleCloseNavMenu}
              sx={{
                my: 4,
                px: {lg: 5},
                color: 'black',
                display: 'block',
                py: 2,
                border: '1px solid #34A853',
                background: 'linear-gradient(45deg, #34A853, white)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                '&:hover': {
                  backgroundColor: '#34A853',
                  color: 'white',
                  boxShadow: '0px 4px 10px rgba(0, 128, 0, 0.3)',
                },
                '&:active': {
                  transform: 'scale(0.95)',
                },
              }}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavAppBar;

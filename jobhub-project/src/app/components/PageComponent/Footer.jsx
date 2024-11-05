import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  TextField,
  Typography,
  Link,
  Stack,
  Snackbar,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { keyframes } from "@mui/system";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // Animation: Fade-in effect for the footer
  const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  `;

  const handleSubscribe = (event) => {
    event.preventDefault();
    if (email.includes("@")) {
      setSnackbarOpen(true);
      setEmail("");
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <>
      <Box
      sx={{
        backgroundColor: "#2F3E2F",
        color: "white",
        py: 6,
        px: { xs: 2, md: 6 },
        animation: `${fadeIn} 1s ease-in-out`,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          gap: 4,
          alignItems: "center",
        }}
      >
        {/* Left Section: Links */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 8,
          }}
        >
          <Stack spacing={2} sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography variant="h6" gutterBottom>
              Home
            </Typography>
            <InteractiveLink text="About" />
            <InteractiveLink text="Services" />
            <InteractiveLink text="Contact Us" />
            <InteractiveLink text="Find A Job" />
            <InteractiveLink text="Hire Now" />
          </Stack>

          <Stack spacing={2} sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography variant="h6" gutterBottom>
              Support
            </Typography>
            <InteractiveLink text="Privacy Policy" />
            <InteractiveLink text="Terms and Conditions" />
          </Stack>

          <Stack spacing={2} sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography variant="h6" gutterBottom>
              Knowledge
            </Typography>
            <InteractiveLink text="Interview Tips" />
            <InteractiveLink text="Events" />
          </Stack>
        </Box>

        {/* Right Section: Social Media and Subscription */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            gap: 2,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <Stack direction="row" spacing={2}>
            <AnimatedIcon icon={<LinkedInIcon />} />
            <AnimatedIcon icon={<TwitterIcon />} />
            <AnimatedIcon icon={<YouTubeIcon />} />
            <AnimatedIcon icon={<FacebookIcon />} />
            <AnimatedIcon icon={<InstagramIcon />} />
          </Stack>

          <form onSubmit={handleSubscribe}>
            <Stack direction="row" spacing={1} alignItems="center">
              <TextField
                size="small"
                placeholder="Enter Your Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  border : "none",
                  bgcolor: "white",
                  borderRadius: 4,
                  input: { color: "black" },
                  width: { xs: "100%", md: "auto" },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                color="success"
                sx={{
                  transition: "transform 0.3s",
                  borderRadius: "15px",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                Subscribe
              </Button>
            </Stack>
          </form>
        </Box>
      </Box>

      {/* <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        message="Subscribed successfully!"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        icon={<CheckCircleIcon color="success" />}
      /> */}
    </Box>
    </>
  );
}

// Interactive Link Component with hover effect
const InteractiveLink = ({ text }) => (
  <Link
    href="#"
    color="inherit"
    underline="hover"
    sx={{
      transition: "color 0.3s",
      "&:hover": { color: "#66bb6a" },
    }}
  >
    {text}
  </Link>
);

const AnimatedIcon = ({ icon }) => (
  <IconButton
    sx={{
      transition: "transform 0.3s, color 0.3s",
      "&:hover": { transform: "scale(1.2)", color: "#66bb6a" },
    }}
  >
    {icon}
  </IconButton>
);

import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  Typography,
  IconButton,
  TextField,
  Avatar,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import EditIcon from "@mui/icons-material/Edit";
import AccountCircle from "@mui/icons-material/AccountCircle";
import SaveIcon from "@mui/icons-material/Save";
import PhoneVBg from "../../../../../../assets/Images/bgImages/PhoneVBg.png";

const EmployerProfile = ({ data, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(null); // Tracks which field is being edited.
  const [editMode, setEditMode] = useState(false); // Tracks whether editing mode is enabled.
  const [profileData, setProfileData] = useState({ ...data });

  const handleEditClick = (field) => {
    setIsEditing(field);
  };

  const handleSaveClick = () => {
    setIsEditing(null);
    if (onUpdate) {
      onUpdate(isEditing, profileData[isEditing]);
    }
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
    setIsEditing(null);
  };

  const handleChange = (field, value) => {
    setProfileData((prevData) => ({ ...prevData, [field]: value }));
  };

  return (
    <Box
      sx={{
        p: 4,
        minHeight: "80vh",
        overflow: "hidden",
      }}
    >
      <Card
        sx={{
          m: 1,
          p: 4,
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          backgroundImage: `url(${PhoneVBg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "70vh",
          borderRadius: "16px",
          overflowY: "scroll",
        }}
      >
        <Grid container spacing={4}>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              mx:"auto" 
            }}
          >
            <Avatar
              src={data.profileImg}
              alt="Profile"
              sx={{
                width: 150,
                height: 150,
                mb: 3,
                mx: "auto",
                border: "3px solid green",
              }}
            />
            <Typography
              variant="h5"
              fontWeight="bolder"
              sx={{
                color: "#e0e0e0",
                backgroundColor: "green",
                px: 2,
                py: 1,
                borderRadius: "8px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.4)",
                textAlign: "center",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Employer Profile
            </Typography>
          </Grid>

          <Grid item size={12}>
            <Card
              sx={{
                p: 4,
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                backdropFilter: "blur(10px)",
                borderRadius: "16px",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  mb: 3,
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "green",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Employer Details
                <IconButton
                  sx={{ ml: 1, cursor: "pointer" }}
                  onClick={toggleEditMode}
                >
                  <EditIcon sx={{ color: "green" }} />
                </IconButton>
              </Typography>
              {Object.entries(profileData).map(([field, value]) => (
                <Box
                  key={field}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 2,
                    borderBottom: "1px solid #e0e0e0",
                    pb: 1,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <AccountCircle sx={{ color: "#4caf50", mr: 2 }} />
                    {isEditing === field ? (
                      <TextField
                        value={value}
                        label={field}
                        onChange={(e) => handleChange(field, e.target.value)}
                        fullWidth
                        variant="filled"
                        size="small"
                      />
                    ) : (
                      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                        {value || "Not Provided"}
                      </Typography>
                    )}
                  </Box>
                  {editMode && (
                    <IconButton
                      onClick={() =>
                        isEditing === field ? handleSaveClick() : handleEditClick(field)
                      }
                      sx={{ color: "#4caf50" }}
                    >
                      {isEditing === field ? <SaveIcon /> : <EditIcon />}
                    </IconButton>
                  )}
                </Box>
              ))}
              {editMode && (
                <Button
                  variant="contained"
                  fullWidth
                  onClick={toggleEditMode}
                  sx={{
                    mt: 2,
                    backgroundColor: "#4caf50",
                    "&:hover": { backgroundColor: "#43a047" },
                  }}
                >
                  Save All Changes
                </Button>
              )}
            </Card>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default EmployerProfile;

import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar, GridToolbarContainer } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import { Typography } from '@mui/material';
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FullscreenIcon from "@mui/icons-material/Fullscreen";

export default function SelectedCandidates() {
  const { data, loading } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100000,
    editable: true,
  });

  const updateGridData = () => {
   const updatedData = [...gridData];
   updatedData.push({
    id: updatedData.length + 1,
    fullName: "Jane Smith",
    email: "jane.smith@example.com",
    city: "Pune",
    country: "India",
   });
setGridData(updatedData);
  }

  const handleFullScreenToggle = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      if (window.innerWidth < 768) {
        screen.orientation
          .lock("landscape")
          .catch((err) => console.error("Orientation lock failed:", err));
      }
    } else {
      document.exitFullscreen();
      if (window.innerWidth < 768) {
        screen.orientation.unlock();
      }
    }
    // toggleFullScreen();
  };

  const CustomToolbar = () => {
    return (
      <GridToolbarContainer className="flex justify-between">
        {/* <IconButton onClick={handleBackClick} sx={{ mb: 1 }}> */}
        <IconButton sx={{ mb: 1 }}>
          <ArrowBackIcon />
        </IconButton>
        <GridToolbar />
        <div>
          <button
            className="text-[#1976d2] font-medium text-[14px] h-12 w-24 rounded-md text-md"
            // onClick={onAddDataclick}
          >
            ADD DATA
          </button>
          {/* <IconButton onClick={handleFullScreenToggle}> */}
          <IconButton onClick={handleFullScreenToggle}>
            <FullscreenIcon />
          </IconButton>
        </div>
      </GridToolbarContainer>
    );
  };

  return (
    <>
    <Box sx={{ height: 520, width: '100%' }}>
    <Typography variant='h3' component='h3'
    sx={{
      textAlign: "center",
      mt: 3,
      mb: 3,
    }}
    >
      Selected Candidates
    </Typography>
      <DataGrid
        {...data}
        loading={loading}
         slots={{ toolbar: CustomToolbar }}
        rowHeight={40}
        checkboxSelection
        disableRowSelectionOnClick
        // rows={gridData} 
        // columns={columns} 
        pageSize={5}
      />
    </Box>
    </>
  );
}




import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar, GridToolbarContainer } from '@mui/x-data-grid';
import { Typography, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import axios from 'axios';

export default function SelectedCandidates() {
  const [gridData, setGridData] = useState([]); // State for rows
  const [loading, setLoading] = useState(true); // State for loading

  // Mock data
  const mockData = [
    {
      id: "mock-1",
      firstName: "John",
      lastName: "Doe",
      mobile: "1234567890",
      dob: "1990-01-01",
      qualification: "B.Sc Computer Science",
      gender: "Male",
      profile: "Software Engineer",
      resume: "resume1.pdf",
    },
    {
      id: "mock-2",
      firstName: "Jane",
      lastName: "Smith",
      mobile: "1234567891",
      dob: "1991-02-02",
      qualification: "M.Sc Physics",
      gender: "Female",
      profile: "Data Scientist",
      resume: "resume2.pdf",
    },
    {
      id: "mock-3",
      firstName: "Michael",
      lastName: "Johnson",
      mobile: "1234567892",
      dob: "1992-03-03",
      qualification: "B.A. Economics",
      gender: "Male",
      profile: "Financial Analyst",
      resume: "resume3.pdf",
    },
    {
      id: "mock-4",
      firstName: "Emily",
      lastName: "Davis",
      mobile: "1234567893",
      dob: "1993-04-04",
      qualification: "MBA",
      gender: "Female",
      profile: "Marketing Manager",
      resume: "resume4.pdf",
    },
    {
      id: "mock-5",
      firstName: "Daniel",
      lastName: "Brown",
      mobile: "1234567894",
      dob: "1994-05-05",
      qualification: "B.Tech Mechanical",
      gender: "Male",
      profile: "Mechanical Engineer",
      resume: "resume5.pdf",
    },
    {
      id: "mock-6",
      firstName: "Sophia",
      lastName: "Wilson",
      mobile: "1234567895",
      dob: "1995-06-06",
      qualification: "B.A. English Literature",
      gender: "Female",
      profile: "Content Writer",
      resume: "resume6.pdf",
    },
    {
      id: "mock-7",
      firstName: "David",
      lastName: "Taylor",
      mobile: "1234567896",
      dob: "1996-07-07",
      qualification: "B.Sc Mathematics",
      gender: "Male",
      profile: "Statistician",
      resume: "resume7.pdf",
    },
    {
      id: "mock-8",
      firstName: "Olivia",
      lastName: "Anderson",
      mobile: "1234567897",
      dob: "1997-08-08",
      qualification: "M.Sc Chemistry",
      gender: "Female",
      profile: "Research Scientist",
      resume: "resume8.pdf",
    },
    {
      id: "mock-9",
      firstName: "James",
      lastName: "Thomas",
      mobile: "1234567898",
      dob: "1998-09-09",
      qualification: "BBA",
      gender: "Male",
      profile: "Business Analyst",
      resume: "resume9.pdf",
    },
    {
      id: "mock-10",
      firstName: "Isabella",
      lastName: "Martinez",
      mobile: "1234567899",
      dob: "1999-10-10",
      qualification: "B.Sc Biology",
      gender: "Female",
      profile: "Biologist",
      resume: "resume10.pdf",
    },
  ];  

  // Fetch data from MongoDB
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/candidates'); // Replace with your API endpoint
        const data = response.data.map((item) => ({
          id: item._id, // Ensure each row has a unique 'id'
          firstName: item.firstName,
          lastName: item.lastName,
          mobile: item.mobile,
          dob: item.dob,
          qualification: item.qualification,
          gender: item.gender,
          profile: item.profile,
          resume: item.resume,
        }));
        // Combine mock data with backend data
        setGridData([...mockData, ...data]);
      } catch (error) {
        console.error('Error fetching data:', error);
        // If backend fetch fails, use only mock data
        setGridData(mockData);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Define columns
  const columns = [
    { field: 'firstName', headerName: 'First Name', flex: 1 },
    { field: 'lastName', headerName: 'Last Name', flex: 1 },
    { field: 'mobile', headerName: 'Mobile', flex: 1 },
    { field: 'dob', headerName: 'D.O.B', flex: 1 },
    { field: 'qualification', headerName: 'Qualification', flex: 1 },
    { field: 'gender', headerName: 'Gender', flex: 1 },
    { field: 'profile', headerName: 'Profile', flex: 1 },
    { field: 'resume', headerName: 'Resume', flex: 1 },
  ];

  const handleFullScreenToggle = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      if (window.innerWidth < 768) {
        screen.orientation
          .lock('landscape')
          .catch((err) => console.error('Orientation lock failed:', err));
      }
    } else {
      document.exitFullscreen();
      if (window.innerWidth < 768) {
        screen.orientation.unlock();
      }
    }
  };

  const CustomToolbar = () => (
    <GridToolbarContainer className="flex justify-between">
      <IconButton sx={{ mb: 1 }}>
        <ArrowBackIcon />
      </IconButton>
      <GridToolbar />
      <div>
        <button className="text-[#1976d2] font-medium text-[14px] h-12 w-24 rounded-md text-md">
          ADD DATA
        </button>
        <IconButton onClick={handleFullScreenToggle}>
          <FullscreenIcon />
        </IconButton>
      </div>
    </GridToolbarContainer>
  );

  return (
    <Box sx={{ height: 520, width: '100%' }}>
      <Typography
        variant="h3"
        component="h3"
        sx={{
          textAlign: 'center',
          mt: 3,
          mb: 3,
        }}
      >
        Selected Candidates
      </Typography>
      <DataGrid
        slots={{ toolbar: CustomToolbar }}
        rowHeight={40}
        checkboxSelection
        disableRowSelectionOnClick
        rows={gridData} // Pass fetched rows
        columns={columns} // Pass defined columns
        pageSize={5}
        loading={loading} // Show loading spinner
      />
    </Box>
  );
}



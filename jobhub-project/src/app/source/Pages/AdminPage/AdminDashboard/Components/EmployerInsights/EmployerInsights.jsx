import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar, GridToolbarContainer } from '@mui/x-data-grid';
import { Typography, IconButton, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import axios from 'axios';

export default function EmployerInsights() {
  const [gridData, setGridData] = useState([]); // State for rows
  const [loading, setLoading] = useState(true); // State for loading
  const [selectedEmployersId, setSelectedEmployersId] = useState([]);

  // Mock data
  const mockData = [
    {
      id: "mock-1",
      companyName: "Tech Solutions Ltd.",
      fullName: "John Doe",
      mobile: "1234567890",
      email: "john.doe@example.com",
      gender: "Male",
      country: "USA",
      city: "New York",
      gstNumber: "GST12345",
      source: "LinkedIn",
    },
    {
      id: "mock-2",
      companyName: "Innovatech Pvt. Ltd.",
      fullName: "Jane Smith",
      mobile: "1234567891",
      email: "jane.smith@example.com",
      gender: "Female",
      country: "India",
      city: "Mumbai",
      gstNumber: "GST54321",
      source: "Referral",
    },
    {
      id: "mock-3",
      companyName: "FinanceCorp LLC",
      fullName: "Michael Johnson",
      mobile: "1234567892",
      email: "michael.johnson@example.com",
      gender: "Male",
      country: "UK",
      city: "London",
      gstNumber: "GST67890",
      source: "Website",
    },
    {
      id: "mock-4",
      companyName: "Market Experts Inc.",
      fullName: "Emily Davis",
      mobile: "1234567893",
      email: "emily.davis@example.com",
      gender: "Female",
      country: "Australia",
      city: "Sydney",
      gstNumber: "GST09876",
      source: "Job Portal",
    },
    {
      id: "mock-5",
      companyName: "Mechanical Innovators",
      fullName: "Daniel Brown",
      mobile: "1234567894",
      email: "daniel.brown@example.com",
      gender: "Male",
      country: "Canada",
      city: "Toronto",
      gstNumber: "GST34567",
      source: "Career Fair",
    },
  ];
   

  // Fetch data from MongoDB
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/employer'); // Replace with your API endpoint
        const data = response.data.map((item) => ({
          id: item._id, // Ensure each row has a unique 'id'
          companyName: item.companyName,
          fullName: item.fullName,
          mobile: item.mobile,
          email: item.email,
          gender: item.gender,
          country: item.country,
          city: item.city,
          gstNumber: item.gstNumber,
          source: item.source,
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
    { field: 'companyName', headerName: 'Company Name', flex: 1 },
    { field: 'fullName', headerName: 'Full Name', flex: 1 },
    { field: 'mobile', headerName: 'Mobile', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'gender', headerName: 'Gender', flex: 1 },
    { field: 'country', headerName: 'Country', flex: 1 },
    { field: 'city', headerName: 'City', flex: 1 },
    { field: 'gstNumber', headerName: 'GST Number', flex: 1 },
    { field: 'source', headerName: 'Source', flex: 1 },
  ];

    const selectedEmployersHandler = () => {
      if (selectedEmployersId.length === 0) {
        toast.error("Please select at least one student");
      } else {
        console.log(selectedEmployersId);
      }
    };

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
      <Button variant= "text" color="success" onClick={selectedEmployersHandler}
        >
          Select Employers
        </Button>
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
        Employer Insights
      </Typography>
      <DataGrid
        slots={{ toolbar: CustomToolbar }}
        rowHeight={40}
        checkboxSelection
        RowSelectionOnClick
        onRowSelectionModelChange={(e) => setSelectedEmployersId(e)}
        rows={gridData} // Pass fetched rows
        columns={columns} // Pass defined columns
        pageSize={5}
        loading={loading} // Show loading spinner
      />
    </Box>
  );
}



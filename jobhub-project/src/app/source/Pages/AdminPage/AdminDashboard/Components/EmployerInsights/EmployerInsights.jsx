import React, {useState} from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
// import { useDemoData } from '@mui/x-data-grid-generator';
import { Typography } from '@mui/material';

const initialData = [
  { id: 1, fullName: "Maneesh", email: "maneesh321@gmail.com", city: "Zirakpur", country: "India" },
  { id: 2, fullName: "John Doe", email: "john.doe@example.com", city: "Chandigarh", country: "India" },
];

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "fullName", headerName: "Full Name", width: 150 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "city", headerName: "City", width: 150 },
  { field: "country", headerName: "Country", width: 150 },
];

export default function EmployerInsights() {
  const [gridData, setGridData] = useState(initialData);
  // const { data, loading } = useDemoData({
  //   dataSet: 'Commodity',
  //   rowLength: 100000,
  //   editable: true,
  // });

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

  return (
    <Box sx={{ height: 520, width: '100%' }}>
    <Typography variant='h3' component='h3'
    sx={{
      textAlign: "center",
      mt: 3,
      mb: 3,
    }}
    >
      Employer Insights
    </Typography>
      <DataGrid
        // {...data}
        // loading={loading}
        // rowHeight={40}
        checkboxSelection
        disableRowSelectionOnClick
        rows={gridData} 
        columns={columns} 
        pageSize={5}
      />
    </Box>
  );
}
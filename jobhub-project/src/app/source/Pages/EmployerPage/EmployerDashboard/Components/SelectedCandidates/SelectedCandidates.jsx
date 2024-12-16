import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import { Typography } from '@mui/material';

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

  return (
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
        rowHeight={40}
        checkboxSelection
        disableRowSelectionOnClick
        // rows={gridData} 
        // columns={columns} 
        pageSize={5}
      />
    </Box>
  );
}
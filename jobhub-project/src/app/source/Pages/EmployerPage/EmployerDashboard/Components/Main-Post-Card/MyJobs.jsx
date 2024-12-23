import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import { Typography } from "@mui/material";
import { myJobs } from "../../../../../../service/operations/employeeApi";

export default function MyJobs() {
  const token = JSON.parse(localStorage.getItem("token"));

  const [myJob, setMyJob] = useState([]);
  const { data, loading } = useDemoData({
    dataSet: "Commodity",
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
  };

  // TODO: style the data in your frontend
  const fetchData = async () => {
    const response = await myJobs(token);
    setMyJob(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box sx={{ height: 520, width: "100%" }}>
      <Typography
        variant="h3"
        component="h3"
        sx={{
          textAlign: "center",
          mt: 3,
          mb: 3,
        }}
      >
        Job Listings
      </Typography>
      <DataGrid
        {...data}
        loading={loading}
        slots={{ toolbar: GridToolbar }}
        rowHeight={40}
        checkboxSelection
        disableRowSelectionOnClick
        pageSize={5}
      />
    </Box>
  );
}

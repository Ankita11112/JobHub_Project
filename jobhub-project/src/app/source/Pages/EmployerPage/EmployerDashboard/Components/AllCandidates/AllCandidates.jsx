// import React, { useState, useEffect } from "react";
// import Box from "@mui/material/Box";
// import { DataGrid, GridToolbar, GridToolbarContainer } from "@mui/x-data-grid";
// import { Typography, IconButton} from "@mui/material";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import FullscreenIcon from "@mui/icons-material/Fullscreen";
// // import axios from "axios";
// import { myStudents } from "../../../../../../service/operations/employeeApi";

// export default function AllCandidates() {
//   const token = JSON.parse(localStorage.getItem("token"));
//   const [studentsData, setStudentsData] = useState([]);
//   const [gridData, setGridData] = useState([]); // State for rows
//   const [loading, setLoading] = useState(true); // State for loading

//   // Mock data
//   const mockData = [
//     {
//       id: "mock-1",
//       firstName: "John",
//       lastName: "Doe",
//       email: "john.doe@example.com",
//       mobileNumber: "1234567890",
//       dob: "1990-01-01",
//       gender: "Male",
//       qualification: "B.Sc Computer Science",
//       role: "Software Engineer",
//       address: "123 Main St, City, Country",
//       file: "resume1.pdf",
//       jobs: ["job-1", "job-2"],
//     },
//     {
//       id: "mock-2",
//       firstName: "Jane",
//       lastName: "Smith",
//       email: "jane.smith@example.com",
//       mobileNumber: "1234567891",
//       dob: "1991-02-02",
//       gender: "Female",
//       qualification: "M.Sc Physics",
//       role: "Data Scientist",
//       address: "456 Elm St, City, Country",
//       file: "resume2.pdf",
//       jobs: ["job-3", "job-4"],
//     },
//     {
//       id: "mock-3",
//       firstName: "Michael",
//       lastName: "Johnson",
//       email: "michael.johnson@example.com",
//       mobileNumber: "1234567892",
//       dob: "1992-03-03",
//       gender: "Male",
//       qualification: "B.A. Economics",
//       role: "Financial Analyst",
//       address: "789 Oak St, City, Country",
//       file: "resume3.pdf",
//       jobs: ["job-5", "job-6"],
//     },
//     {
//       id: "mock-4",
//       firstName: "Emily",
//       lastName: "Davis",
//       email: "emily.davis@example.com",
//       mobileNumber: "1234567893",
//       dob: "1993-04-04",
//       gender: "Female",
//       qualification: "MBA",
//       role: "Marketing Manager",
//       address: "321 Pine St, City, Country",
//       file: "resume4.pdf",
//       jobs: ["job-7", "job-8"],
//     },
//     {
//       id: "mock-5",
//       firstName: "Daniel",
//       lastName: "Brown",
//       email: "daniel.brown@example.com",
//       mobileNumber: "1234567894",
//       dob: "1994-05-05",
//       gender: "Male",
//       qualification: "B.Tech Mechanical",
//       role: "Mechanical Engineer",
//       address: "654 Maple St, City, Country",
//       file: "resume5.pdf",
//       jobs: ["job-9", "job-10"],
//     },
//     {
//       id: "mock-6",
//       firstName: "Sophia",
//       lastName: "Wilson",
//       email: "sophia.wilson@example.com",
//       mobileNumber: "1234567895",
//       dob: "1995-06-06",
//       gender: "Female",
//       qualification: "B.A. English Literature",
//       role: "Content Writer",
//       address: "987 Cedar St, City, Country",
//       file: "resume6.pdf",
//       jobs: ["job-11", "job-12"],
//     },
//     {
//       id: "mock-7",
//       firstName: "David",
//       lastName: "Taylor",
//       email: "david.taylor@example.com",
//       mobileNumber: "1234567896",
//       dob: "1996-07-07",
//       gender: "Male",
//       qualification: "B.Sc Mathematics",
//       role: "Statistician",
//       address: "432 Birch St, City, Country",
//       file: "resume7.pdf",
//       jobs: ["job-13", "job-14"],
//     },
//     {
//       id: "mock-8",
//       firstName: "Olivia",
//       lastName: "Anderson",
//       email: "olivia.anderson@example.com",
//       mobileNumber: "1234567897",
//       dob: "1997-08-08",
//       gender: "Female",
//       qualification: "M.Sc Chemistry",
//       role: "Research Scientist",
//       address: "765 Spruce St, City, Country",
//       file: "resume8.pdf",
//       jobs: ["job-15", "job-16"],
//     },
//     {
//       id: "mock-9",
//       firstName: "James",
//       lastName: "Thomas",
//       email: "james.thomas@example.com",
//       mobileNumber: "1234567898",
//       dob: "1998-09-09",
//       gender: "Male",
//       qualification: "BBA",
//       role: "Business Analyst",
//       address: "321 Aspen St, City, Country",
//       file: "resume9.pdf",
//       jobs: ["job-17", "job-18"],
//     },
//     {
//       id: "mock-10",
//       firstName: "Isabella",
//       lastName: "Martinez",
//       email: "isabella.martinez@example.com",
//       mobileNumber: "1234567899",
//       dob: "1999-10-10",
//       gender: "Female",
//       qualification: "B.Sc Biology",
//       role: "Biologist",
//       address: "654 Willow St, City, Country",
//       file: "resume10.pdf",
//       jobs: ["job-19", "job-20"],
//     },
//   ];


//   // Fetch data from MongoDB
//   const fetchStudents = async () => {
//     const response = await myStudents(token);
//     console.log("response...", response);
//     console.log("token", token);
//   };

//   // Fetch data from MongoDB
//   useEffect(() => {
//     fetchStudents();
//          response.data.map((item) => ({
//           id: item._id,
//           firstName: item.firstName,
//           lastName: item.lastName,
//           email: item.email,
//           mobileNumber: item.mobileNumber,
//           dob: item.dob,
//           gender: item.gender,
//           qualification: item.qualification,
//           role: item.role,
//           address: item.address,
//           file: item.file,
//           jobs: item.jobs,
//         }));
//     setGridData([...mockData, ...studentsData]);
//     console.log("data fetching...",studentsData);                                             
//   }, []);


//   // Define columns
//   const columns = [
//     { field: 'firstName', headerName: 'First Name', flex: 1 },
//     { field: 'lastName', headerName: 'Last Name', flex: 1 },
//     { field: 'email', headerName: 'Email Address', flex: 1 },
//     { field: 'mobileNumber', headerName: 'Mobile', flex: 1 },
//     { field: 'dob', headerName: 'D.O.B', flex: 1 },
//     { field: 'gender', headerName: 'Gender', flex: 1 },
//     { field: 'qualification', headerName: 'Qualification', flex: 1 },
//     { field: 'role', headerName: 'Role', flex: 1 },
//     { field: 'address', headerName: 'Address', flex: 1 },
//     { field: 'file', headerName: 'File', flex: 1 },
//     { field: 'jobs', headerName: 'Jobs', flex: 1 },
//   ];

//   const handleFullScreenToggle = () => {
//     if (!document.fullscreenElement) {
//       document.documentElement.requestFullscreen();
//       if (window.innerWidth < 768) {
//         screen.orientation
//           .lock('landscape')
//           .catch((err) => console.error('Orientation lock failed:', err));
//       }
//     } else {
//       document.exitFullscreen();
//       if (window.innerWidth < 768) {
//         screen.orientation.unlock();
//       }
//     }
//   };

//   const CustomToolbar = () => (
//     <GridToolbarContainer className="flex justify-between">
//       <IconButton sx={{ mb: 1 }}>
//         <ArrowBackIcon />
//       </IconButton>
//       <GridToolbar />
//       <div>
//         <button className="text-[#1976d2] font-medium text-[14px] h-12 w-24 rounded-md text-md">
//           ADD DATA
//         </button>
//         <IconButton onClick={handleFullScreenToggle}>
//           <FullscreenIcon />
//         </IconButton>
//       </div>
//     </GridToolbarContainer>
//   );

//   return (
//     <Box sx={{ height: 520, width: '100%' }}>
//     <Typography
//       variant="h3"
//       component="h3"
//       sx={{
//         textAlign: 'center',
//         mt: 3,
//         mb: 3,
//       }}
//     >
//       All Candidates
//     </Typography>
//     <DataGrid
//       slots={{ toolbar: CustomToolbar }}
//       rowHeight={40}
//       checkboxSelection
//       disableRowSelectionOnClick
//       rows={gridData} // Pass fetched rows
//       columns={columns} // Pass defined columns
//       pageSize={5}
//       loading={loading} // Show loading spinner
//     />
//   </Box>
//   );
// }


import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar, GridToolbarContainer } from "@mui/x-data-grid";
import { Typography, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import { myStudents } from "../../../../../../service/operations/employeeApi";

export default function AllCandidates() {
  const token = JSON.parse(localStorage.getItem("token"));
  const [gridData, setGridData] = useState([]); // State for rows
  const [loading, setLoading] = useState(true); // State for loading

  // Mock data
  const mockData = [
    {
      id: "mock-1",
      firstName: "John Peter",
      lastName: "Doe",
      email: "john.doe@example.com",
      mobileNumber: "1234567890",
      dob: "1990-01-01",
      gender: "Male",
      qualification: "B.Sc Computer Science",
      role: "Software Engineer",
      address: "123 Main St, City, Country",
      file: "resume1.pdf",
      jobs: ["job-1", "job-2"],
    },
    // More mock data...
  ];

  // Fetch data from MongoDB
  const fetchStudents = async () => {
    try {
      const response = await myStudents(token);
      console.log("response....", response.students);
      if (response.students && response.students.length > 0) {
        const formattedData = response.students[0].map((item) => ({
          id: item._id,
          firstName: item.firstName,
          lastName: item.lastName,
          email: item.email,
          mobileNumber: item.mobileNumber,
          dob: item.dob,
          gender: item.gender,
          qualification: item.qualification,
          role: item.role,
          address: item.address,
          file: item.file,
          jobs: item.jobs,
        }));
        setGridData(formattedData);
      } else {
        setGridData(mockData); // Use mock data if API data is empty
      }
    } catch (error) {
      console.error("Error fetching student data:", error);
      setGridData(mockData); // Use mock data on error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // Define columns
  const columns = [
    { field: "firstName", headerName: "First Name", flex: 1, width: "250px" },
    { field: "lastName", headerName: "Last Name", flex: 1, width: "250px" },
    { field: "email", headerName: "Email Address", flex: 1, width: "250px" },
    { field: "mobileNumber", headerName: "Mobile", flex: 1, width: "250px" },
    { field: "dob", headerName: "D.O.B", flex: 1, width: "250px" },
    { field: "gender", headerName: "Gender", flex: 1, width: "250px" },
    { field: "qualification", headerName: "Qualification", flex: 1, width: "250px" },
    { field: "role", headerName: "Role", flex: 1, width: "250px" },
    { field: "address", headerName: "Address", flex: 1, width: "250px" },
    { field: "file", headerName: "File", flex: 1, width: "250px" },
    { field: "jobs", headerName: "Jobs", flex: 1, width: "250px" },
  ];

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
        All Candidates
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
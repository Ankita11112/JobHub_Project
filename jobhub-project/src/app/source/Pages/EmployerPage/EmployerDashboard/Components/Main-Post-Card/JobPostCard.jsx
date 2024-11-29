// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Card,
//   CardContent,
//   Typography,
//   Button,
//   Dialog,
// } from "@mui/material";
// import Grid from "@mui/material/Grid2";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// const JobPostCard = () => {
//   const [jobPosts, setJobPosts] = useState([]);
// //   const [open, setOpen] = useState(null);
// const navigate = useNavigate();

//   useEffect(() => {
//     const storedData = localStorage.getItem("formData");

//     if (storedData){
//       try{
//         setJobPosts(JSON.parse(storedData));
//       }catch (error) {
//         console.error("Error parsing job posts from localStorage:", error);
//         toast.error("Failed to load job postings.");
//       }
//     }
//   }, []);

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         gap: 2,
//         padding: 3,
//         backgroundColor: "#f5f5f5",
//         minHeight: "100vh",
//       }}
//     >
//       <Typography variant="h4" gutterBottom>
//         Job Postings
//       </Typography>
//       {jobPosts.length === 0 ? (
//         <Typography variant="h6" color="textSecondary">
//           No job postings available. Please create a new job post.
//         </Typography>
//       ) : (
//         <Grid container spacing={3}>
//           {jobPosts.map((post, index) => (<>
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <Card
//                 sx={{
//                   borderRadius: "10px",
//                   boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//                 }}
//               >
//                 <CardContent>
//                   <Typography variant="h5" gutterBottom>
//                     {post.jobDetails.jobTitle}
//                   </Typography>
//                   <Typography variant="subtitle1" color="textSecondary">
//                     {post.jobDetails.company}
//                   </Typography>
//                   <Typography variant="body2" mt={2}>
//                     <strong>Role:</strong> {post.jobDetails.jobRole}
//                   </Typography>
//                   <Typography variant="body2">
//                     <strong>Type:</strong> {post.jobDetails.jobType}
//                   </Typography>
//                   <Typography variant="body2">
//                     <strong>Location:</strong> {post.jobDetails.jobLocation}
//                   </Typography>
//                   <Typography variant="body2" mt={1}>
//                     <strong>Salary:</strong> {post.jobDetails.salary}
//                   </Typography>
//                   <Typography variant="body2" mt={1}>
//                     <strong>Benefits:</strong>{" "}
//                     {post.jobDetails.benefits.length > 0
//                       ? post.jobDetails.benefits.join(", ")
//                       : "None"}
//                   </Typography>
//                   <Button
//                     variant="contained"
//                     color="green"
//                     fullWidth
//                     sx={{ mt: 2 }}
//                     onClick={() => {
//                     //   toast.success(`Viewing details for ${post.jobDetails.jobTitle}`);
//                       navigate("/jobpostdetails")
//                     }}
//                   >
//                     View Details
//                   </Button>
//                 </CardContent>
//               </Card>
//             </Grid>
//             </>
//           ))}
//         </Grid>
//       )}
//     </Box>
//   );
// };

// export default JobPostCard;


import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  Typography,
  Chip,
  IconButton,
  Button,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import PostCard from "./PostCard";

const JobPostCard = () => {
  const [jobPosts, setJobPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = localStorage.getItem("formData");

    if (storedData) {
      try {
        setJobPosts(JSON.parse(storedData));
      } catch (error) {
        console.error("Error parsing job posts from localStorage:", error);
      }
    }
  }, []);

  return (
    <>
    <Box>
     <PostCard/>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
        padding: 3,
        // backgroundColor: "#f9f9f9",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Job Postings
      </Typography>
      {jobPosts.length === 0 ? (
        <Typography variant="h6" color="textSecondary">
          No job postings available. Please create a new job post.
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {jobPosts.map((post, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  borderRadius: "10px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                  p: 2,
                  backgroundColor: "#fff",
                  position: "relative",
                  minWidth: "350px",
                  maxWidth: "400px",
                  width: "250px"
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 2,
                  }}
                >
                  <Typography variant="h6">{post.jobDetails.jobTitle}</Typography>
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                </Box>

                {/* Job Post Details */}
                <Typography variant="subtitle2" color="textSecondary">
                  {post.jobDetails.company} - {post.jobDetails.jobLocation}
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" mt={1}>
                  {post.jobDetails.jobType} • ₹{post.jobDetails.salary}
                </Typography>
                
                {/* Role, Benefits, Job Description */}
                {/* <Typography variant="body2" color="textSecondary" mt={2}>
                  <strong>Role:</strong> {post.jobDetails.jobRole}
                </Typography> */}
                <Typography variant="body2" color="textSecondary">
                  <strong>Benefits:</strong>{" "}
                  {post.jobDetails.benefits.length > 0
                    ? post.jobDetails.benefits.join(", ")
                    : "None"}
                </Typography>
                {/* <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    flexWrap: "wrap",
                    marginTop: 2,
                  }}
                >
                  {post.jobDetails.tags?.map((tag, i) => (
                    <Chip key={i} label={tag} size="small" />
                  ))}
                </Box> */}

                {/* Posted Date and Favorite Button */}
                {/* <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: 2,
                  }}
                >
                  <Typography variant="caption" color="textSecondary">
                    Posted on: {post.jobDetails.postedDate}
                  </Typography>
                  <IconButton>
                    <FavoriteBorderIcon />
                  </IconButton>
                </Box> */}

                {/* View Details Button */}
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ mt: 1, background: "green" }}
                  onClick={() => navigate("/jobpostdetails")}
                >
                  View Details
                </Button>
              </Card>
            </Grid>
          ))}
          {jobPosts.map((post, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                  sx={{
                  borderRadius: "10px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                  padding: 2,
                  backgroundColor: "#fff",
                  position: "relative",
                  minWidth: "350px",
                  maxWidth: "400px",
                  width: "250px"
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 2,
                  }}
                >
                  <Typography variant="h6">{post.jobDetails.jobTitle}</Typography>
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                </Box>

                {/* Job Post Details */}
                <Typography variant="subtitle2" color="textSecondary">
                  {post.jobDetails.company} - {post.jobDetails.jobLocation}
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" mt={1}>
                  {post.jobDetails.jobType} • ₹{post.jobDetails.salary}
                </Typography>
                
                {/* Role, Benefits, Job Description */}
                {/* <Typography variant="body2" color="textSecondary" mt={2}>
                  <strong>Role:</strong> {post.jobDetails.jobRole}
                </Typography> */}
                <Typography variant="body2" color="textSecondary">
                  <strong>Benefits:</strong>{" "}
                  {post.jobDetails.benefits.length > 0
                    ? post.jobDetails.benefits.join(", ")
                    : "None"}
                </Typography>
                {/* <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    flexWrap: "wrap",
                    marginTop: 2,
                  }}
                >
                  {post.jobDetails.tags?.map((tag, i) => (
                    <Chip key={i} label={tag} size="small" />
                  ))}
                </Box> */}

                {/* Posted Date and Favorite Button */}
                {/* <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: 2,
                  }}
                >
                  <Typography variant="caption" color="textSecondary">
                    Posted on: {post.jobDetails.postedDate}
                  </Typography>
                  <IconButton>
                    <FavoriteBorderIcon />
                  </IconButton>
                </Box> */}

                {/* View Details Button */}
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ mt: 1, background: "green" }}
                  onClick={() => navigate("/jobpostdetails")}
                >
                  View Details
                </Button>
              </Card>
            </Grid>
          ))}
          {jobPosts.map((post, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                  sx={{
                  borderRadius: "10px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                  padding: 2,
                  backgroundColor: "#fff",
                  position: "relative",
                  minWidth: "350px",
                  maxWidth: "400px",
                  width: "250px"
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 2,
                  }}
                >
                  <Typography variant="h6">{post.jobDetails.jobTitle}</Typography>
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                </Box>

                {/* Job Post Details */}
                <Typography variant="subtitle2" color="textSecondary">
                  {post.jobDetails.company} - {post.jobDetails.jobLocation}
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" mt={1}>
                  {post.jobDetails.jobType} • ₹{post.jobDetails.salary}
                </Typography>
                
                {/* Role, Benefits, Job Description */}
                {/* <Typography variant="body2" color="textSecondary" mt={2}>
                  <strong>Role:</strong> {post.jobDetails.jobRole}
                </Typography> */}
                <Typography variant="body2" color="textSecondary">
                  <strong>Benefits:</strong>{" "}
                  {post.jobDetails.benefits.length > 0
                    ? post.jobDetails.benefits.join(", ")
                    : "None"}
                </Typography>
                {/* <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    flexWrap: "wrap",
                    marginTop: 2,
                  }}
                >
                  {post.jobDetails.tags?.map((tag, i) => (
                    <Chip key={i} label={tag} size="small" />
                  ))}
                </Box> */}

                {/* Posted Date and Favorite Button */}
                {/* <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: 2,
                  }}
                >
                  <Typography variant="caption" color="textSecondary">
                    Posted on: {post.jobDetails.postedDate}
                  </Typography>
                  <IconButton>
                    <FavoriteBorderIcon />
                  </IconButton>
                </Box> */}

                {/* View Details Button */}
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ mt: 1, background: "green" }}
                  onClick={() => navigate("/jobpostdetails")}
                >
                  View Details
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
    </Box>
    </>
  );
};

export default JobPostCard;

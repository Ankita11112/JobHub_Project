import React, { useEffect, useState } from "react";
import { Box, Container, Card, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
// import { Outlet, useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import JobDetails from "./JobDetails";
import CandidateFullJobDetails from "./CandidateFullJobDetails";
import { allJobs } from "../../../../../service/operations/studentApi";

const CandidateJobPostCard = () => {
  const navigate = useNavigate();
  const [jobsData, setJobsData] = useState([]);
  const [isViewJobDetails, setIsViewJobDetails] = useState("");

  const fetchAllJobs = async () => {
    const response = await allJobs();
    setJobsData(response);
  };

  useEffect(() => {
    fetchAllJobs();
    console.log(jobsData);
  }, []);

  const handleViewDetails = (id) => {
    // navigate("/candidatedashboard/candidatejobpostdetails");
    setIsViewJobDetails(id);
  };

  const handleApplyNow = (id) => {
    JSON.stringify(localStorage.setItem("jobId", id));
    navigate("/candidatedashboard/registration");
  };

  return (
    <Box
      sx={{
        py: 4,
      }}
    >
      {jobsData.map((data) => (
        <Grid container spacing={2} sx={{ mx: 2 }}>
          <Grid item size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
            <Card
              sx={{
                background: "white",
                boxShadow:
                  "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
                px: 2,
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  textAlign: "center",
                  my: 3,
                  fontWeight: "bold",
                  color: "#333",
                }}
              >
                Available Jobs
              </Typography>
              <Grid container>
                <Grid item size={12}>
                  <Card
                    sx={{
                      padding: 3,
                      borderRadius: 2,
                      boxShadow: 3,
                      backgroundColor: "#fff",
                      mt: 2,
                      border: "0.1px solid gray",
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          mb: 1,
                          fontWeight: "bold",
                          color: "#333",
                        }}
                      >
                        {data.jobTitle} - {data.jobLocation}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          mb: 1,
                          color: "#666",
                        }}
                      >
                        VitalTech Solutions Pvt. Ltd. | Mohali, Punjab
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          mb: 2,
                          fontWeight: "bold",
                          color: "#000",
                        }}
                      >
                        ₹30,000 - ₹35,000 a month | Full-time | Night shift
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        backgroundColor: "#f1f1f1",
                        padding: 2,
                        borderRadius: 1,
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#555",
                          mb: 1,
                        }}
                      >
                        ✔ Work Schedule – *5 Days working.
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#555",
                          mb: 1,
                        }}
                      >
                        ✔ Chat and Email coordination with customers.
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#555",
                          mb: 1,
                        }}
                      >
                        ✔ Effective communication via mail/chat.
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#555",
                          mb: 1,
                        }}
                      >
                        ✔ Assist digital team with online campaigns.
                      </Typography>
                    </Box>

                    <Box display="flex" justifyContent="space-between" mt={2}>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "green",
                          color: "white",
                          mr: 2,
                          "&:hover": {
                            backgroundColor: "#004d40",
                          },
                        }}
                        onClick={() => handleViewDetails(data._id)}
                      >
                        View Details
                      </Button>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "green",
                          color: "white",
                          "&:hover": {
                            backgroundColor: "greenYellow",
                          },
                        }}
                        onClick={() => handleApplyNow(data._id)}
                      >
                        Apply Now
                      </Button>
                    </Box>
                  </Card>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          {/* Right Grid: Dynamic Content */}
          <Grid item size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
            <Card
              sx={{
                background: "white",
                boxShadow:
                  "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
              }}
            >
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    textAlign: "center",
                    my: 3,
                    fontWeight: "bold",
                    color: "#333",
                  }}
                >
                  Job Details
                </Typography>
              </Box>
              {isViewJobDetails !== "" && (
                <CandidateFullJobDetails jobId={isViewJobDetails} />
              )}
              {/* <Outlet /> */}
            </Card>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export default CandidateJobPostCard;

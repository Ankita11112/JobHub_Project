import React from 'react'
import { Box, Grid2, Typography } from '@mui/material'
import TelecallerBg from '../../../../../../assets/Images/bgImages/PartnersBg.png';

const JobhubTelecaller = () => {
    return (
        <>
            <Box sx={{
                py: { xs: 6, md: 8 },
                width: "80%",
                mx: "auto",
            }}>
                <Grid2 container sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexGrow: 1,
                    mb: 5,
                    px: 5,
                    width: "100%",
                }}>
                    <Grid2 item xs={12} md={12}>
                        <Typography variant="h3" component="h2" sx={{
                            textAlign: "center",
                            fontSize: { xs: "35px", md: "45px" },
                            backgroundImage: `url(${TelecallerBg})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",

                        }}>
                            Why apply at JOBHUB for <span style={{ color: "green" }}> Telecaller</span>
                        </Typography>
                    </Grid2>
                </Grid2>
                <Grid2 container sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexGrow: 1,
                    px: 5,
                    width: "100%",
                }}>
                    <Grid2 item xs={12} md={12}>
                        <Typography variant="h3" component="h2" sx={{
                            textAlign: "center",
                            fontSize: { xs: "20px", md: "20px" },
                            pt: 2,
                        }}>
                            JobHub provides a diverse range of Telecaller job opportunities across various industries and companies. Whether you’re interested in customer service, technical support, or sales, you can find suitable positions on the platform.
                        </Typography>
                        <Typography variant="h3" component="h2" sx={{
                            textAlign: "center",
                            fontSize: { xs: "20px", md: "20px" },
                            pt: 2,
                        }}>
                            JobHub ensures that all Telecaller job listings are verified, guaranteeing the authenticity and legitimacy of the opportunities available. 
                        </Typography>
                        <Typography variant="h3" component="h2" sx={{
                            textAlign: "center",
                            fontSize: { xs: "20px", md: "20px" },
                            pt: 2,
                        }}>
                            JobHub simplifies the application process, allowing you to easily apply for multiple Telecaller jobs with just a few clicks. This saves you time and effort during your job search.
                        </Typography>
                        <Typography variant="h3" component="h2" sx={{
                            textAlign: "center",
                            fontSize: { xs: "20px", md: "20px" },
                            pt: 2,
                        }}>
                            JobHub not only connects you with immediate job openings but also offers potential career growth opportunities within the Telecaller industry.
                        </Typography>
                        <Typography variant="h3" component="h2" sx={{
                            textAlign: "center",
                            fontSize: { xs: "20px", md: "20px" },
                            pt: 2,
                        }}>
                           JobHub partners with reputed companies that offer competitive compensation packages for Telecalller roles. You can expect fair and market-aligned remuneration for your skills and expertise.
                        </Typography>
                        <Typography variant="h3" component="h2" sx={{
                            textAlign: "center",
                            fontSize: { xs: "20px", md: "20px" },
                            pt: 1,
                        }}>
                            By choosing Jobhub as your platform to apply for Telecaller jobs, you gain access to a wide range of opportunities, verified job listings, a convenient application process, career growth prospects, and competitive compensation packages.
                        </Typography>
                    </Grid2>
                </Grid2>
            </Box>
        </>
    )
}

export default JobhubTelecaller
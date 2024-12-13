import { Box, Grid2, Typography } from '@mui/material';
import DataBg from '../../../assets/Images/bgImages/TeleBg.png'

import React from 'react';

const GlobaljobCard2 = ({ content, title, subtitle, mainImage, mainImageStyle }) => {
    return (
        <>
            <Box sx={{
                my: { xs: 4, md: 10 } ,
                width: "100%",
                backgroundImage: `url(${DataBg})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}>
                <Grid2 container sx={{
                    width: "80%",
                    mx: "auto",
                }}>
                    <Grid2 item xs={12} md={6} sx={{
                        pt: 10,
                        width: { xs: "100%", sm: "100%", md: "50%" },
                    }}>
                        <Grid2 container>
                            <Grid2 item xs={12} md={12} sx={{
                                textAlign: { xs: "center", sm: "center", md: "left" },
                            }}>
                                <Typography variant="h4" component="h2">{title}</Typography>
                                <Typography variant='body2' component='h5' sx={{
                                    pt: 1,
                                }}>{subtitle}</Typography>
                            </Grid2>
                        </Grid2>
                        <Grid2 container>
                            {content.map((item, index) => (
                                <Grid2 item key={index}>
                                    <Box sx={{
                                        display: "flex",
                                        //alignItems: "",
                                        pt: 2,
                                        width: "100%",
                                    }}>
                                        <Box
                                            component="img"
                                            src={item.icon}
                                            alt={`Icon ${index}`}
                                            sx={{ height: '30px', width: '30px', mr: 2 }}
                                        />
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                fontSize: { xs: '14px', md: '16px' },
                                            }}
                                            dangerouslySetInnerHTML={{ __html: item.description }} // bold text
                                        />
                                    </Box>
                                </Grid2>
                            ))}
                        </Grid2>
                    </Grid2>
                    <Grid2 item xs={12} md={6} sx={{
                        mt: 2,
                        width: { xs: "100%", sm: "100%", md: "50%" },
                        display: "flex",
                        justifyContent: "center",
                        alignContent: 'center',
                        objectFit: 'cover',
                        
                    }}>
                        <img
                            src={mainImage}
                            style={{
                                width: "90%",
                                maxWidth: "80%",
                                height: "auto",
                                ...mainImageStyle, // Apply passed style here
                            }}
                            alt="image"
                        />
                    </Grid2>
                </Grid2>
            </Box>
        </>
    );
};

export default GlobaljobCard2;

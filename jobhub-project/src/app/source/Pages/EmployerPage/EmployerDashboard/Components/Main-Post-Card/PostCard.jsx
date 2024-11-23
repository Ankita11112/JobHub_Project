import React from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material';
import ButtonComponent from '../../../../../../components/GlobalComponents/ButtonComponent/ButtonComponent';
import Grid from '@mui/material/Grid2';
import { useNavigate } from 'react-router-dom';

const PostCard = () => {
    const navigate = useNavigate();
  return (
    <>
         <Grid container sx={{
                displa: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              }}>
              <Grid item size={11}>

              <Box sx={{
                display:"flex",
                justifyContent: "flex-end",
                width : "100%",
              }}>
              <ButtonComponent
                  title="Add Post"
                  onClick={() => navigate("/jobpost")}
                  sx={{
                    my: 3,
                    px: { lg: 4 },
                    color: 'black',
                    display: 'block',
                    py: 1,
                    border: '1px solid #34A853',
                    background: 'linear-gradient(45deg, #34A853, white)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    '&:hover': {
                      backgroundColor: '#34A853',
                      color: 'white',
                      boxShadow: '0px 4px 10px rgba(0, 128, 0, 0.3)',
                    },
                    '&:active': {
                      transform: 'scale(0.95)',
                    },
                  }}
              />
              <ButtonComponent
                  title="Delete Post"
                  onClick={() => alert("Delete Me😐")}
                  sx={{
                    my: 3,
                    ml: {lg: 2},
                    px: { lg: 2 },
                    color: 'black',
                    display: 'block',
                    py: 1,
                    border: '1px solid #34A853',
                    background: 'linear-gradient(45deg, #34A853, white)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    '&:hover': {
                      backgroundColor: '#34A853',
                      color: 'white',
                      boxShadow: '0px 4px 10px rgba(0, 128, 0, 0.3)',
                    },
                    '&:active': {
                      transform: 'scale(0.95)',
                    },
                  }}
                />
              </Box>
                <Card sx={{
                  width: "100%",
                  height: '100vh',
                  boxShadow: '0px 4px 10px rgba(0, 128, 0, 0.3)',
                }}>
                  <CardContent>
                    <Typography>Oops😢 Still no any type of Post</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
    </>
  )
}

export default PostCard
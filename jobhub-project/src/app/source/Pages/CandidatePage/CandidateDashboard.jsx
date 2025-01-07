import { useState } from 'react';
import CandidateDashboardNav from './Components/CandidateDashboardNavbar/CandidateDashboardNav';
import { Outlet } from 'react-router-dom';
import PageComponent from '../../../components/PageComponent/PageComponent'
import RegistrationPage from './RegistrationPage';
import { Modal, Box, Typography } from '@mui/material';

  

 
const CandidateDashboard = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setIsFormSubmitted(true);
  };
  return (
    <>
     <Modal
        open={!isFormSubmitted}
        aria-labelledby='form-popup'
        closeAfterTransition
        disableEscapeKeyDown
      >
        <Box
    
        >
          <Typography
            id='form-popup'
            variant='h6'
            component='h2'
            sx={{ mb: 2 }}
          >
            Please fill out the form
          </Typography>
          {/* Pass the submission handler to DemoForm */}
          <RegistrationPage onSubmit={handleFormSubmit} />
        </Box>
      </Modal>
      <PageComponent>
        <CandidateDashboardNav />
        <Outlet />
      </PageComponent>
      <RegistrationPage/>
    </>
  );
};

export default CandidateDashboard;


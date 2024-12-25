import React from 'react';
import CandidateDashboardNav from './Components/CandidateDashboardNavbar/CandidateDashboardNav';
import { Outlet } from 'react-router-dom';
import PageComponent from '../../../components/PageComponent/PageComponent'

const CandidateDashboard = () => {
  return (
    <>
      <PageComponent>
        <CandidateDashboardNav />
        <Outlet />
      </PageComponent>
    </>
  );
};

export default CandidateDashboard;


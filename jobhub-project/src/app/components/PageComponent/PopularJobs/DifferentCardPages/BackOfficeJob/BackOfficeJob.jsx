import React from 'react'
import PageComponent from '../../../PageComponent'
import bgImage from '../../../../../assets/Images/bgImages/bgImage.png';
import HeaderImage from '../../../../../assets/Images/BackOfficeImages/header.png';
import HeaderPage from '../../../../GlobalComponents/HeaderPage/HeaderPage'
import JobDetails from '../../../JobDetails/JobDetails';
import { useNavigate } from 'react-router-dom';
import BackendCategories from './components/BackendCategories';
import BackDescription from './components/BackDescription';
import BackOfficeSecondsection from './components/BackOfficeSecondsection';

const BackOfficeJob = () => {
  const navigate = useNavigate();
  return (
    <>
      <PageComponent>
        <HeaderPage
          backgroundImage={bgImage}
          headerText=
          {<>
            Back <span style={{ color: "green" }}>Office</span>
          </>}
          subText="Manage administrative tasks, maintain records, and support workflow operations to ensure seamless organizational efficiency.."
          buttonTitle1="Apply Now"
          buttonTitle2="Search"
          // onButtonClick1={handleScrollView}
          onButtonClick1={() => navigate('/registration')}
          onButtonClick2={() => alert("Hire Now clicked!")}
          imgSrc={HeaderImage}
          style={{
            width: "75%",
            height: "auto",
          }}
        />
        <BackendCategories />
        <JobDetails />
        <BackDescription />
        <BackOfficeSecondsection />

      </PageComponent>
    </>
  )
}

export default BackOfficeJob;
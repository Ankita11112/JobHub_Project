import React from 'react'
import PageComponent from '../../../PageComponent'
import bgImage from '../../../../../assets/Images/bgImages/bgImage.png';
import HeaderImage from '../../../../../assets/Images/HousekeepingImages/header.png';
import HeaderPage from '../../../../GlobalComponents/HeaderPage/HeaderPage'
import JobDetails from '../../../JobDetails/JobDetails';
import { useNavigate } from 'react-router-dom';
import HouseKeepingCat from './components/HouseKeepingCat';
import HouseKeepingFirstSection from './components/HouseKeepingFirstSection';
import Housekeepingsecondsection from './components/Housekeepingsecondsection';

const HouseKeepingJob = () => {
  const navigate = useNavigate();
  return (
    <>
      <PageComponent>
        <HeaderPage
          backgroundImage={bgImage}
          headerText=
          {<>
            House <span style={{ color: "green" }}>Keeping</span>
          </>}
          subText="Ensure cleanliness and organization of spaces, maintain hygiene standards, and create a welcoming environment for all occupants."
          buttonTitle1="Apply Now"
          buttonTitle2="Search"
          // onButtonClick1={handleScrollView}
          onButtonClick1={() => navigate('/candidatedashboard')}
          onButtonClick2={() => alert("Hire Now clicked!")}
          imgSrc={HeaderImage}
          style={{
            width: "75%",
            height: "auto",
          }}
        />
        <HouseKeepingCat />
        <JobDetails />
        <HouseKeepingFirstSection />
        <Housekeepingsecondsection />

      </PageComponent>

    </>
  )
}

export default HouseKeepingJob;
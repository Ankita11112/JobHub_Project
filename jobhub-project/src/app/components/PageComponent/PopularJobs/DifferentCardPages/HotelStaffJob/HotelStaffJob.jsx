import React from 'react'
import PageComponent from '../../../PageComponent'
import bgImage from '../../../../../assets/Images/bgImages/bgImage.png';
import HeaderImage from '../../../../../assets/Images/HotelImages/header.png';
import HeaderPage from '../../../../GlobalComponents/HeaderPage/HeaderPage'
import JobDetails from '../../../JobDetails/JobDetails';
import { useNavigate } from 'react-router-dom';
import HotelCat from './components/HotelCat';
import HotelStafFirstSec from './components/HotelStafFirstSec';
import HotelStafSecsec from './components/HotelStafSecsec';


const HotelStaffJob = () => {
  const navigate = useNavigate();
  return (
    <>
      <PageComponent>
        <HeaderPage
          backgroundImage={bgImage}
          headerText=
          {<>
            Hotel<span style={{ color: "green" }}> Staff</span>
          </>}
          subText="Hotel staff offering exceptional customer support, assisting with inquiries, and ensuring a memorable stay by enhancing guest satisfaction."
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

        <HotelCat />
        <JobDetails />
        
          <HotelStafFirstSec />
          <HotelStafSecsec />
    
      </PageComponent>
    </>
  )
}

export default HotelStaffJob;
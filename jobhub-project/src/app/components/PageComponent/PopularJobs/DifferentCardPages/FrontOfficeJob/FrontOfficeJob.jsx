import React from 'react'
import PageComponent from '../../../PageComponent'
import bgImage from '../../../../../assets/Images/bgImages/bgImage.png';
import HeaderImage from '../../../../..//assets/Images/FrontOfficeImages/header.png';
import HeaderPage from '../../../../GlobalComponents/HeaderPage/HeaderPage'
import JobDetails from '../../../JobDetails/JobDetails';
import { useNavigate } from 'react-router-dom';
import FrontCategories from './Components/FrontCategories';
import FrontDescription from './Components/FrontDescription';
import FrontGif from './Components/FrontGif';


const FrontOfficeJob = () => {
  const navigate = useNavigate();
  return (
    <>
      <PageComponent>
        <HeaderPage
          backgroundImage={bgImage}
          headerText=
          {<>
            Front<span style={{ color: "green" }}>Office</span>
          </>}
          subText="The Front Office Executive serves as the first point of contact for visitors and clients, ensuring a welcoming ."
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

        <FrontCategories />
        <JobDetails />
        <FrontDescription />
        <FrontGif />

      </PageComponent>
    </>
  )
}

export default FrontOfficeJob;
import React from 'react'
import PageComponent from '../../../PageComponent'
import bgImage from '../../../../../assets/Images/bgImages/bgImage.png';
import HeaderImage from '../../../../../assets/Images/headerImages/HeaderImage02.png';
import HeaderPage from '../../../../GlobalComponents/HeaderPage/HeaderPage'
import JobDetails from '../../../JobDetails/JobDetails';
import { useNavigate } from 'react-router-dom';

const FactoryJob = () => {
  const navigate = useNavigate();
  return (
    <>
      <PageComponent>
      <HeaderPage
          backgroundImage={bgImage}
          headerText=
          {<>
            Factory <span style={{ color: "green" }}>Workers</span>
          </>}
          subText="Friendly telecaller providing customer support, handling inquiries, and boosting client satisfaction."
          buttonTitle1="Apply Now"
          buttonTitle2="Search"
          // onButtonClick1={handleScrollView}
          onButtonClick1={() => navigate('/registration')}
          onButtonClick2={() => alert("Hire Now clicked!")}
          imgSrc={HeaderImage}
          style= {{
            width: "75%", 
            height: "auto", 
          }}
        />
      <JobDetails/>
      </PageComponent>
    </>
  )
}

export default FactoryJob;
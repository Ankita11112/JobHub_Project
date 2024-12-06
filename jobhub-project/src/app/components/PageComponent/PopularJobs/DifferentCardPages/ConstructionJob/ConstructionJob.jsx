import React from 'react';
import PageComponent from '../../../PageComponent';
import bgImage from '../../../../../assets/Images/bgImages/bgImage.png';

import HeaderImage from '../../../../../assets/Images/ConstructionImages/bg construction.png';
import HeaderPage from '../../../../GlobalComponents/HeaderPage/HeaderPage';
import JobDetails from '../../../JobDetails/JobDetails';
import { useNavigate } from 'react-router-dom';
import ConstructionCategories from './Components/ConstructionCategories';
import ConstructionDescription from './Components/ConstructionDescription';
import ConstructionColor from './Components/ConstructionColor';

const ConstructionJob = () => {
  const navigate = useNavigate();
  return (
    <>
      <PageComponent>
        <HeaderPage
          backgroundImage={bgImage}
          headerText=
          {<>
            Const<span style={{ color: "green" }}>ruction</span>
          </>}
          subText="Find top construction job opportunities, from skilled trades to project management. Build your career with us today!"
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
        <ConstructionCategories />
        <JobDetails />
        <ConstructionDescription />
        <ConstructionColor />

      </PageComponent>
    </>
  )
}

export default ConstructionJob;
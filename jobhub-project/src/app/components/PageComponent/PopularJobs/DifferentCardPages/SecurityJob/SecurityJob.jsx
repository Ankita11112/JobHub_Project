import React from 'react'
import PageComponent from '../../../PageComponent'
import bgImage from '../../../../../assets/Images/bgImages/bgImage.png';
import HeaderImage from '../../../../../assets/Images/GuardImages/header.png';
import HeaderPage from '../../../../GlobalComponents/HeaderPage/HeaderPage'
import JobDetails from '../../../JobDetails/JobDetails';
import { useNavigate } from 'react-router-dom';
import SecCat from './components/SecCat';
import Secfirstdesc from './components/Secfirstdesc';
import SecSecDesc from './components/SecSecDesc';

const SecurityJob = () => {
  const navigate = useNavigate();
  return (
    <>
      <PageComponent>
        <HeaderPage
          backgroundImage={bgImage}
          headerText=
          {<>
            Security <span style={{ color: "green" }}>Guard</span>
          </>}
          subText="Reliable and vigilant professional skilled in ensuring safety, monitoring premises, and responding to emergencies effectively.."
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
        />  <SecCat />
        <JobDetails />
        <Secfirstdesc />
        <SecSecDesc />
      </PageComponent>
    </>
  )
}

export default SecurityJob;
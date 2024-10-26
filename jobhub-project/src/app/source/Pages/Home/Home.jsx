import React from 'react';
import PageComponent from '../../../components/PageComponent/PageComponent';
import HeaderPage from '../../../components/GlobalComponents/HeaderPage/HeaderPage';
import bgImage from '../../../assets/Images/bgImages/bgImage.png';
import HeaderImage from '../../../assets/Images/HeaderImage.png';
import JobCards from '../../../components/PageComponent/JobCards';
import JobDetails from '../../../components/PageComponent/JobDetails/JobDetails';
import PopularJobs from '../../../components/PageComponent/PopularJobs';
import ResumeSection from '../../../components/PageComponent/ResumeSection';
import PartnerSection from '../../../components/PageComponent/PartnerSection';
import ChoiceSection from '../../../components/PageComponent/ChoiceSection';

const Home = () => {
  return (
    <>
      <PageComponent>
        <HeaderPage
          backgroundImage={bgImage}
          headerText=
          {<>
            Find Your Career With <span style={{ color: "green" }}> JOBHUB</span>
          </>}
          subText="Your dream job is just a click away"
          buttonTitle1="Find a Job"
          buttonTitle2="Search"
          onButtonClick1={() => alert("Apply Now clicked!")}
          onButtonClick2={() => alert("Search clicked!")}
          imgSrc={HeaderImage}
        />
        <JobCards />
        <JobDetails/>
        <PopularJobs/>
        <ResumeSection/>
        <PartnerSection/>
        <ChoiceSection/>
      </PageComponent>
    </>
  )
}

export default Home
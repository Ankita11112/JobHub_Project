import React from 'react'
import PageComponent from '../../../PageComponent'
import bgImage from '../../../../../assets/Images/bgImages/bgImage.png';
import HeaderImage from '../../../../../assets/Images/headerImages/HeaderImage03.png';
import HeaderPage from '../../../../GlobalComponents/HeaderPage/HeaderPage'
// import JobDetails from '../../../JobDetails/JobDetails';

const DocVerifyJob = () => {
  return (
    <>
      <PageComponent>
      <HeaderPage
          backgroundImage={bgImage}
          headerText=
          {<>
            Document <span style={{ color: "green" }}>Verification Jobs</span>
          </>}
          subText="Ensure accuracy and trust with our efficient document verification services."
          buttonTitle1="Apply Now"
          buttonTitle2="Search"
          // onButtonClick1={handleScrollView}
          onButtonClick1={() => alert("I am clicked!")}
          onButtonClick2={() => alert("Hire Now clicked!")}
          imgSrc={HeaderImage}
          style= {{
            width: "85%", 
            height: "auto", 
          }}
        />
      {/* <JobDetails/> */}
      </PageComponent>
    </>
  )
}

export default DocVerifyJob;

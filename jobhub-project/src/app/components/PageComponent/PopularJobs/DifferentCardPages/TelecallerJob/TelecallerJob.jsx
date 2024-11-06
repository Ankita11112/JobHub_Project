import React from 'react'
import PageComponent from '../../../PageComponent'
import bgImage from '../../../../../assets/Images/bgImages/bgImage.png';
import HeaderImage from '../../../../../assets/Images/HeaderImage2.png';
import HeaderPage from '../../../../GlobalComponents/HeaderPage/HeaderPage'

const TelecallerJob = () => {
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
          buttonTitle1="Apply Now"
          buttonTitle2="Search"
          // onButtonClick1={handleScrollView}
          onButtonClick1={() => alert("I am clicked!")}
          onButtonClick2={() => alert("Hire Now clicked!")}
          imgSrc={HeaderImage}
        />
      </PageComponent>
    </>
  )
}

export default TelecallerJob
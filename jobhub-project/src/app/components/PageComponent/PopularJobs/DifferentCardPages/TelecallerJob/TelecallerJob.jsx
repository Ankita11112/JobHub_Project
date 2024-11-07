import React from 'react'
import PageComponent from '../../../PageComponent'
import bgImage from '../../../../../assets/Images/bgImages/bgImage.png';
import HeaderImage from '../../../../../assets/Images/headerImages/HeaderImage3.png';
import HeaderPage from '../../../../GlobalComponents/HeaderPage/HeaderPage'
import CategoriesSection from './Components/CategoriesSection';

const TelecallerJob = () => {
  return (
    <>
      <PageComponent>
      <HeaderPage
          backgroundImage={bgImage}
          headerText=
          {<>
            Tele<span style={{ color: "green" }}>caller</span>
          </>}
          subText="Friendly telecaller providing customer support, handling inquiries, and boosting client satisfaction."
          buttonTitle1="Apply Now"
          buttonTitle2="Search"
          // onButtonClick1={handleScrollView}
          onButtonClick1={() => alert("I am clicked!")}
          onButtonClick2={() => alert("Hire Now clicked!")}
          imgSrc={HeaderImage}
          style= {{
            width: "75%", 
            height: "auto", 
          }}
        />
      <CategoriesSection/>
      </PageComponent>
    </>
  )
}

export default TelecallerJob
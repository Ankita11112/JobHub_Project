import React from 'react'
import PageComponent from '../../../PageComponent'
import bgImage from '../../../../../assets/Images/bgImages/bgImage.png';
import HeaderImage from '../../../../../assets/Images/GuardImages/header.png';
import HeaderPage from '../../../../GlobalComponents/HeaderPage/HeaderPage'
import JobDetails from '../../../JobDetails/JobDetails';
import { useNavigate } from 'react-router-dom';
import SecCat from './components/SecCat';

import FirImg from '../../../../../assets/Images/GuardImages/first.png';
import SecImg from '../../../../../assets/Images/GuardImages/Second.png';
import tickImg from '../../../../../assets/Images/DocVerifyImage/tickImg.png';
import GlobalJobCardOne from '../../../../GlobalComponents/GlobalGrid2Section/GlobalJobCardOne';
import GlobalJobCardTwo from '../../../../GlobalComponents/GlobalGrid2Section/GlobalJobCardTwo';


const SecurityJob = () => {
  const navigate = useNavigate();

  const imgoneStyle = {
    maxHeight: '80%'

  }
  const imagetwostyle = {
    maxHeight: '75%'
  }
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
        />
        <SecCat />
        <JobDetails />


        {/* First Desc */}
        <GlobalJobCardOne
          title={""}
          subtitle={" "}
          content={

            [
              {
                icon: tickImg,
                description:
                  '',
              },
              {
                icon: tickImg,
                description:
                  ' ',
              },
              {
                icon: tickImg,
                description:
                  '',
              },

              {
                icon: tickImg,
                description:
                  '',
              },
              {
                icon: tickImg,
                description:
                  '',
              },



            ]} mainImage={FirImg} mainImageStyle={imgoneStyle}
        />

        {/* Second Desc */}
        <GlobalJobCardTwo
          content={

            [
              {
                icon: tickImg,
                description:
                  '',
              },

              {
                icon: tickImg,
                description:
                  '',
              },

              {
                icon: tickImg,
                description:
                  '',
              },

              {
                icon: tickImg,
                description:
                  '',
              },
              {
                icon: tickImg,
                description:
                  '',
              },



            ]
          } title={""} mainImage={SecImg} mainImageStyle={imagetwostyle}
        />

      </PageComponent>
    </>
  )
}

export default SecurityJob;
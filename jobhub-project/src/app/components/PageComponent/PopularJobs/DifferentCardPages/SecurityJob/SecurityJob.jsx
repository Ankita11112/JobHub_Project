import React from 'react'
import PageComponent from '../../../PageComponent'
import bgImage from '../../../../../assets/Images/bgImages/bgImage.png';
import HeaderImage from '../../../../../assets/Images/GuardImages/header.png';
import HeaderPage from '../../../../GlobalComponents/HeaderPage/HeaderPage'
import JobDetails from '../../../JobDetails/JobDetails';
import { useNavigate } from 'react-router-dom';
import SecCat from './components/SecCat';


import FirImg from '../../../../../assets/Images/Guardimages/first.png';
import SecImg from '../../../../../assets/Images/Guardimages/Second.png';
import tickImg from '../../../../../assets/Images/DocVerifyImage/tickImg.png';
import GlobalJobCard1 from '../../../../GlobalComponents/GlobalGrid2Section/GlobalJobCard1';
import GlobaljobCard2 from '../../../../GlobalComponents/GlobalGrid2Section/GlobalJobCard2';


const SecurityJob = () => {
  const navigate = useNavigate();

  const imgoneStyle = {
    maxWidth: '85%'
  }
  const imgtwoStyle = {
    marginTop: '8%',
    maxWidth: '60%'
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
        />  <SecCat />
        <JobDetails />


        {/* First Desc */}

        <GlobalJobCard1
          title={"Security Guard"}
          subtitle={"The duty of a security guard is to safely and securely guard premises and property, and protect people. Their purpose is to keep them secured to secure an unauthorizedaccess, monitors their activities as well as minimizes the emergencies.  "} content={
            [
              {
                icon: tickImg,
                description:
                  '<strong>Surveillance and Monitoring:</strong> They protect life on patrol areas, monitor CCTVs and alarms; and detect security breach.',
              },
              {
                icon: tickImg,
                description:
                  '<strong>Access Control: </strong> Revising to, Identify occupying own to b justify, maintain visitors and vehicle records and restrain unauthorized accession and protection.',
              },
              {
                icon: tickImg,
                description:
                  '<strong>Emergency Response: </strong>Alerts to alarms, and assists evacuations or medical situations, when required for service to emergency.',
              },

              {
                icon: tickImg,
                description:
                  '<strong>Property Protection: </strong> It will help limit theft and damage as well as check up on locks and windows and secure your assets.',
              },
              {
                icon: tickImg,
                description:
                  '<strong>Documentation and Enforcement:</strong> Work includes logging daily activities, preparing incident reports, being in charge, dealing with disputes calmly and ensuring strict compliance of security protocols.',
              },



            ]} mainImage={FirImg} mainImageStyle={imgoneStyle}

        />

        {/* Second Desc */}
        <GlobaljobCard2
          content={

            [
              {
                icon: tickImg,
                description:
                  '<strong>Protection Measures:</strong>  Minimize or avoid the risks caused by incidents to affect people, assets, and environments..',
              },

              {
                icon: tickImg,
                description:
                  '<strong> Core Activities:</strong> Complement the physical security risks through surveillance, access control and crises risks.',
              },

              {
                icon: tickImg,
                description:
                  '<strong>Prevention & Deterrence:</strong>  Maintain secure and prevent the criminal act to guarantee security.',
              },

              {
                icon: tickImg,
                description:
                  '<strong>Physical Security: </strong> Slows or halts human aggressiveness on people, property, and events.',
              },
              {
                icon: tickImg,
                description:
                  '<strong> Digital Security:</strong> A technology that protect networks, systems, and software against cyber threats.',
              },

            ]
          } title={""} mainImage={SecImg} mainImageStyle={imgtwoStyle}
        >

        </GlobaljobCard2>
      </PageComponent>
    </>
  )
}

export default SecurityJob;
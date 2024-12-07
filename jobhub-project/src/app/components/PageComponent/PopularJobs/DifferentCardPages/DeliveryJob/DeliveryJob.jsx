import React from 'react'
import PageComponent from '../../../PageComponent'
import bgImage from '../../../../../assets/Images/bgImages/bgImage.png';
import HeaderImage from '../../../../../assets/Images/DeliveryImages/header.png';
import HeaderPage from '../../../../GlobalComponents/HeaderPage/HeaderPage'
import JobDetails from '../../../JobDetails/JobDetails';
import { useNavigate } from 'react-router-dom';
import DeliveryCat from './components/DeliveryCat';
import Deliveryfirstdesc from './components/Deliveryfirstdesc';
import DeliverySeconddesc from './components/DeliverySeconddesc';

const DeliveryJob = () => {
  const navigate = useNavigate();
  return (
    <>
      <PageComponent>
        <HeaderPage
          backgroundImage={bgImage}
          headerText=
          {<>
            Deli<span style={{ color: "green" }}>very</span>
          </>}
          subText="Efficiently managed client interactions, ensuring timely and accurate resolution of inquiries to boost satisfaction and retention."
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
        <DeliveryCat />
        <JobDetails />




        <Deliveryfirstdesc />
        <DeliverySeconddesc />
      </PageComponent>
    </>
  )
}

export default DeliveryJob;
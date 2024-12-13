import React from 'react';
import PageComponent from '../../../PageComponent';
import bgImage from '../../../../../assets/Images/bgImages/bgImage.png';
import HeaderImage from '../../../../../assets/Images/FactoryWorkImages/header.png';
import HeaderPage from '../../../../GlobalComponents/HeaderPage/HeaderPage';
import JobDetails from '../../../JobDetails/JobDetails';
import { useNavigate } from 'react-router-dom';
import FactoryCat from './Components/FactoryJobCat';

import FirImg from '../../../../../assets/Images/FactoryWorkimages/first.png';
import SecImg from '../../../../../assets/Images/FactoryWorkimages/Second.png';
import tickImg from '../../../../../assets/Images/DocVerifyImage/tickImg.png';
import GlobalJobCard1 from '../../../../GlobalComponents/GlobalGrid2Section/GlobalJobCardOne';
import GlobalJobCard2 from '../../../../GlobalComponents/GlobalGrid2Section/GlobalJobCardTwo';

const FactoryJob = () => {
  const navigate = useNavigate();

  const imgStyle = {
    maxHeight: '75%',
    width: 'auto',
  };

  return (
    <>
      <PageComponent>
        <HeaderPage
          backgroundImage={bgImage}
          headerText={
            <>
              Factory <span style={{ color: 'green' }}>Workers</span>
            </>
          }
          subText="Efficient factory worker experienced in operating machinery, meeting production goals, and maintaining safety standards."
          buttonTitle1="Apply Now"
          buttonTitle2="Search"
          onButtonClick1={() => navigate('/candidatedashboard')}
          onButtonClick2={() => alert('Hire Now clicked!')}
          imgSrc={HeaderImage}
          style={{ width: '75%', height: 'auto' }}
        />
        <FactoryCat />
        <JobDetails />

        {/* First Desc */}
        <GlobalJobCard1
          title="Factory Worker"
          subtitle="An Industrial relations is an employee who has functional responsibilities to operate machines, manufacture products, scrutinize materials, pack products, and monitor quality besides conforming the safety measures and production standards."
          content={[
            {
              icon: tickImg,
              description:
                '<strong>Machine Operation:</strong> Perform mechanical and electrical operations on equipment to accomplish productive manufacturing and achieve quality goals.',
            },
            {
              icon: tickImg,
              description:
                '<strong>Assembly and Production:</strong> Fit components and products by joining or cementing or bolting or riveting or screwing the individual part in the required order and in a way to fit each other perfectly.',
            },
            {
              icon: tickImg,
              description:
                '<strong>Quality Control:</strong> Examine the materials or the finished products for signs of imperfection with regard to quality.',
            },
            {
              icon: tickImg,
              description:
                '<strong>Packaging:</strong> Tightly and effectively palletize the finished products, preparing the goods for shipment.',
            },
            {
              icon: tickImg,
              description:
                '<strong>Safety Compliance:</strong> Comply with policies and standard precautions to prevent risk factors and maintain a clean work environment.',
            },
          ]}
          mainImage={FirImg}
          mainImageStyle={imgStyle}
        />

        {/* Second Desc */}
        <GlobalJobCard2
          content={[
            {
              icon: tickImg,
              description:
                '<strong>Setup and Calibration:</strong> Perform machinery settings to ensure precise alignment for production efficiency.',
            },
            {
              icon: tickImg,
              description:
                '<strong>Operation Monitoring:</strong> Monitor machinery and readings during operation, troubleshoot issues, and ensure safety standards.',
            },
            {
              icon: tickImg,
              description:
                '<strong>Maintenance and Repairs:</strong> Perform regular preventive measures and occasional repairs to minimize breakdowns.',
            },
            {
              icon: tickImg,
              description:
                '<strong>Documentation and Reporting:</strong> Provide detailed documentation for supervisors to optimize operations.',
            },
          ]}
          title=""
          mainImage={SecImg}
          mainImageStyle={imgStyle}
        />
      </PageComponent>
    </>
  );
};

export default FactoryJob;

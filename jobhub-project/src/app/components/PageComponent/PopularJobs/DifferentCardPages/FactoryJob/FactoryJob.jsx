import React from 'react'
import PageComponent from '../../../PageComponent'
import bgImage from '../../../../../assets/Images/bgImages/bgImage.png';
import HeaderImage from '../../../../../assets/Images/FactoryWorkImages/header.png';
import HeaderPage from '../../../../GlobalComponents/HeaderPage/HeaderPage'
import JobDetails from '../../../JobDetails/JobDetails';
import { useNavigate } from 'react-router-dom';
import FactoryCat from './components/FactoryJobCat';


import FirImg from '../../../../../assets/Images/FactoryWorkimages/first.png';
import SecImg from '../../../../../assets/Images/FactoryWorkimages/Second.png';
import tickImg from '../../../../../assets/Images/DocVerifyImage/tickImg.png';
import GlobalJobCard1 from '../../../../GlobalComponents/GlobalGrid2Section/GlobalJobCard1';
import GlobaljobCard2 from '../../../../GlobalComponents/GlobalGrid2Section/GlobalJobCard2';

const FactoryJob = () => {
  const navigate = useNavigate();

  const imgoneStyle = {
    maxWidth: '90%',
    maxHeight: '90%',
    marginTop: '30px'
  }
  const imgtwoStyle = {

    marginTop: '30px',
    maxWidth: '90%',
    maxHeight: '90%',
  }
  return (
    <>
      <PageComponent>
        <HeaderPage
          backgroundImage={bgImage}
          headerText=
          {<>
            Factory <span style={{ color: "green" }}>Workers</span>
          </>}
          subText="Efficient factory worker experienced in operating machinery, meeting production goals, and maintaining safety standards."
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
        <FactoryCat />
        <JobDetails />

        {/* First Desc */}
        <GlobalJobCard1
          title={"Factory Worker"}
          subtitle={"An Industrial relations is an employee who has functional responsibilities to operate machines, manufacture products, scrutinize materials, pack products, and monitor quality besides conforming the safety measures and production standards."} content={
            [
              {
                icon: tickImg,
                description:
                  '<strong>Machine Operation:</strong> Perform mechanical and electrical operations on equipment to accomplish productive manufacturing and achieve quality goals.',
              },
              {
                icon: tickImg,
                description:
                  '<strong>Assembly and Production:</strong> Fit components and products by joining or cementing or bolting or riveting or screwing the individual part in the required order and in a way to fit each other perfectly..',
              },
              {
                icon: tickImg,
                description:
                  '<strong>Quality Control: </strong>Receiving and dispatch of products: examine the materials or the finished products for signs of imperfection with regard to quality.',
              },

              {
                icon: tickImg,
                description:
                  '<strong>Packaging:</strong> Tightly and effectively palletize the finished products, the packaging prepares the goods for shipment.',
              },
              {
                icon: tickImg,
                description:
                  '<strong> Safety Compliance:</strong> Comply to policies and standard precautions to prevent the risk factors and keep a clean work environment.',
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
                  '<strong> Setup and Calibration: </strong>Perform settings for the machineries in operations in order to set right adjustments on the tools and attain precise alignment to produce items that can meet production efficiency.',
              },

              {
                icon: tickImg,
                description:
                  '<strong>  Operation Monitoring:</strong> During performing the job, monitor the machinery and readings and ensure that there are problems, and troubleshoot for solutions, and safety and quality standard.',
              },

              {
                icon: tickImg,
                description:
                  '<strong>Maintenance and Repairs:</strong>  Perform regular preventive measures and occasionally undertake repairs in order to greatly reduce the duration of machinery breakdown and increase its useful life.',
              },

              {
                icon: tickImg,
                description:
                  '<strong> Documentation and Reporting:</strong>   Account for operations, maintenance, and production requirements while producing detailed documentation for supervisors to enhance the modification/optimization of operations.',
              },
            ]
          } title={""} mainImage={SecImg} mainImageStyle={imgtwoStyle}
        >

        </GlobaljobCard2>

      </PageComponent>
    </>
  )
}

export default FactoryJob;
import React from 'react';
import { RouteMaker } from '../../components/routes/routes';
import Home from '../Pages/Home/Home';
import FormComponent from '../../components/PageComponent/FormComponent';
import TelecallerJob from '../../components/PageComponent/PopularJobs/DifferentCardPages/TelecallerJob/TelecallerJob';
import DocVerifyJob from '../../components/PageComponent/PopularJobs/DifferentCardPages/DocVerifyJob/DocVerifyJob';
import DataEntryJob from '../../components/PageComponent/PopularJobs/DifferentCardPages/DataEntryJob/DataEntryJob';
import WebDesignerJob from '../../components/PageComponent/PopularJobs/DifferentCardPages/WebDesignerJob/WebDesignerJob';
import GraphicDesignerJob from '../../components/PageComponent/PopularJobs/DifferentCardPages/GraphicDesignerJob/GraphicDesignerJob';
import WebDeveloperJob from '../../components/PageComponent/PopularJobs/DifferentCardPages/WebDeveloperJob/WebDeveloperJob';
import ConstructionJob from '../../components/PageComponent/PopularJobs/DifferentCardPages/ConstructionJob/ConstructionJob';
import FrontOfficeJob from '../../components/PageComponent/PopularJobs/DifferentCardPages/FrontOfficeJob/FrontOfficeJob';
import BackOfficeJob from '../../components/PageComponent/PopularJobs/DifferentCardPages/BackOfficeJob/BackOfficeJob';
import HouseKeepingJob from '../../components/PageComponent/PopularJobs/DifferentCardPages/HouseKeepingJob/HouseKeepingJob';
import DeliveryJob from '../../components/PageComponent/PopularJobs/DifferentCardPages/DeliveryJob/DeliveryJob';
import SecurityJob from '../../components/PageComponent/PopularJobs/DifferentCardPages/SecurityJob/SecurityJob';
import HotelStaffJob from '../../components/PageComponent/PopularJobs/DifferentCardPages/HotelStaffJob/HotelStaffJob';
import WarehouseStaffJob from '../../components/PageComponent/PopularJobs/DifferentCardPages/WarehouseStaffJob/WarehouseStaffJob';
import FactoryJob from '../../components/PageComponent/PopularJobs/DifferentCardPages/FactoryJob/FactoryJob';
import EmployeeForm from '../Pages/EmployerPage/EmployeerForm.jsx';
import ContactVerify from '../Pages/PhoneVerification/ContactVerify/ContactVerify.jsx';
import Contact from '../Pages/Contact/Contact';
import EmployerDashboard from '../Pages/EmployerPage/EmployerDashboard/EmployerDashboard.jsx';
import JobDetailsForm from '../Pages/EmployerPage/EmployerDashboard/JobPostForm/JobDetailsForm.jsx';
import FullJobDetails from '../Pages/EmployerPage/EmployerDashboard/Components/Main-Post-Card/FullJobDetails.jsx';
import About from '../Pages/About/About.jsx';
import EmployerProfile from '../Pages/EmployerPage/EmployerDashboard/Components/EmployerProfile/EmployerProfile.jsx';
import JobPostCard from '../Pages/EmployerPage/EmployerDashboard/Components/Main-Post-Card/JobPostCard.jsx';
import LogInPage from '../Pages/Admin/SigninUpPage/SignIn/LogIn.jsx'
import SignUpPage from '../Pages/Admin/SigninUpPage/SignUp/SignUpPage.jsx'

const AppRouter = () => {
  return (
    <>
      <RouteMaker
        routes={{
          "/*": <Home />,
          "/about": <About />,
          "/contact": <Contact />,
          "/login" : <LogInPage/>,
          "/signup" : <SignUpPage/>,
          "/verification": <ContactVerify />,
          "/registration": <FormComponent />,
          "/employeregistration": <EmployeeForm />,
          "/telecaller": <TelecallerJob />,
          "/documentverification": <DocVerifyJob />,
          "/dataentry": <DataEntryJob />,
          "/webdesigner": <WebDesignerJob />,
          "/graphicdesigner": <GraphicDesignerJob />,
          "/webdeveloper": <WebDeveloperJob />,
          "/construction": <ConstructionJob />,
          "/frontoffice": <FrontOfficeJob />,
          "/backoffice": <BackOfficeJob />,
          "/housekeeping": <HouseKeepingJob />,
          "/delivery": <DeliveryJob />,
          "/securityguard": <SecurityJob />,
          "/hotelstaff": <HotelStaffJob />,
          "/warehousestaff": <WarehouseStaffJob />,
          "/factory": <FactoryJob />,
          // Employer Dashboard with nested routes
          "/employerdashboard": {
            element: <EmployerDashboard />,
            children: [
              {path: "/employerdashboard/", element: <JobPostCard />},
              { path: "employerprofile", element: <EmployerProfile /> },
              {path: "jobpostdetailsform",
              element: <JobDetailsForm /> },
              {path: "jobpostdetails",
                element: <FullJobDetails /> },
            ],
          },
        }}
      />
    </>
  );
};

export default AppRouter;

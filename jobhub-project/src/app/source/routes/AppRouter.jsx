import React from 'react';
import { RouteMaker } from '../../components/routes/routes';
import Home from '../Pages/Home/Home';
import FormComponent from '../Pages/CandidatePage/FormComponent.jsx';
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
import LogInPage from '../Pages/AdminPage/SigninUpPage/SignIn/LogIn.jsx'
import SignUpPage from '../Pages/AdminPage/SigninUpPage/SignUp/SignUpPage.jsx'
import CandidateDashboard from '../Pages/CandidatePage/CandidateDashboard.jsx';
import CandidateSignIn from '../Pages/CandidatePage/SignInUpPage/CandidateSignIn.jsx';
import CandidateSignUp from '../Pages/CandidatePage/SignInUpPage/CandidateSignUp.jsx';
import CandidateJobPostCard from '../Pages/CandidatePage/Components/Candidate-Job-Card/CandidateJobPostCard.jsx';
// import CandidateProfile from '../Pages/CandidatePage/Components/CandidateProfile/CandidateProfile.jsx';
import CandidateFullJobDetails from '../Pages/CandidatePage/Components/Candidate-Job-Card/CandidateFullJobDetails.jsx';
import MyJobs from '../Pages/EmployerPage/EmployerDashboard/Components/Main-Post-Card/MyJobs.jsx';
import SelectedCandidates from '../Pages/EmployerPage/EmployerDashboard/Components/SelectedCandidates/SelectedCandidates.jsx';
import AdminDashboard from '../Pages/AdminPage/AdminDashboard/AdminDashboard.jsx';
import AdminProfile from '../Pages/AdminPage/AdminDashboard/Components/AdminProfile/AdminProfile.jsx';
import EmployerInsights from '../Pages/AdminPage/AdminDashboard/Components/EmployerInsights/EmployerInsights.jsx';
import JobListings from '../Pages/AdminPage/AdminDashboard/Components/JobListings/JobListings.jsx';
import ShortlistedTalent from '../Pages/AdminPage/AdminDashboard/Components/ShortlistedTalent/ShortlistedTalent.jsx';
import AdminLandingPage from '../Pages/AdminPage/AdminDashboard/Components/AdminLandingPage/AdminLandingPage.jsx';
import AdminDetailsForm from '../Pages/AdminPage/AdminDetailsForm';
import Securityguardjob from '../../components/PageComponent/PopularJobs/DifferentCardPages/SecurityJob/Securityguardjob.jsx';

const AppRouter = () => {
  return (
    <>
      <RouteMaker
        routes={{
          "/*": <Home />,
          "/about": <About />,
          "/contact": <Contact />,
          "/candidatelogin": <CandidateSignIn />,
          "/candidatesignup": <CandidateSignUp />,
          "/login": <LogInPage />,
          "/signup": <SignUpPage />,
          "/verification": <ContactVerify />,
          "/admin-registration-form": <AdminDetailsForm />,
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

          "/securityguard": <Securityguardjob />,
          "/hotelstaff": <HotelStaffJob />,
          "/warehousestaff": <WarehouseStaffJob />,
          "/factory": <FactoryJob />,
          // Employer Dashboard with nested routes
          "/employerdashboard": {
            element: <EmployerDashboard />,
            children: [
              { path: "/employerdashboard/", element: <JobPostCard /> },
              { path: "employerprofile", element: <EmployerProfile /> },
              {
                path: "jobpostdetailsform",
                element: <JobDetailsForm />
              },
              {
                path: "jobpostdetails",
                element: <FullJobDetails />
              },
              { path: "my-jobs", element: <MyJobs /> },
              { path: "selected-candidates", element: <SelectedCandidates /> },
            ],
          },
          "/candidatedashboard": {
            element: <CandidateDashboard />,
            children: [
              // {path: "", 
              {
                path: "/candidatedashboard/",
                element: <CandidateJobPostCard />,
                children: [
                  {
                    path: "candidatejobpostdetails",
                    element: <CandidateFullJobDetails />
                  },
                ]
              },
              {
                path: "registration",
                element: <FormComponent />
              },
            ],
          },
          "/admin": {
            element: <AdminDashboard />,
            children: [
              { path: "/admin/", element: <AdminLandingPage /> },
              { path: "adminprofile", element: <AdminProfile /> },
              {
                path: "employer-insights",
                element: <EmployerInsights />
              },
              {
                path: "job-listings",
                element: <JobListings />
              },
              { path: "shortlisted-talent", element: <ShortlistedTalent /> },
            ],
          },
        }}
      />
    </>
  );
};

export default AppRouter;

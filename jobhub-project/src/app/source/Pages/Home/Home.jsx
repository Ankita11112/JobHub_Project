import React, { useState } from 'react';
import PageComponent from '../../../components/PageComponent/PageComponent';
import HeaderPage from '../../../components/GlobalComponents/HeaderPage/HeaderPage';
import bgImage from '../../../assets/Images/bgImages/bgImage.png';
import HeaderImage from '../../../assets/Images/HeaderImage.png';
import JobCards from '../../../components/PageComponent/JobCards';
import JobDetails from '../../../components/PageComponent/JobDetails/JobDetails';
import PopularJobs from '../../../components/PageComponent/PopularJobs';
import ResumeSection from '../../../components/PageComponent/ResumeSection';
import PartnerSection from '../../../components/PageComponent/PartnerSection';
import ChoiceSection from '../../../components/PageComponent/ChoiceSection';
import Testimonial from '../../../components/PageComponent/Testimonial';
import FormComponent from '../../../components/PageComponent/FormComponent';
import { useNavigate } from 'react-router-dom';
import GlobalFaq from '../../../components/GlobalComponents/faq/GlobalFaq';
import Footer from '../../../components/PageComponent/Footer';

const Home = () => {
  const navigate = useNavigate();

  const faqItems = [
    {
      id: 1,
      question: "What type of jobs are available on Jobhub?",
      answer: "MyJobee is a professional and only blue-collar centric job search app in India that connects job seekers in the blue collar segment with the respective employers. It helps blue collars get the type of job they are trained for, by connecting them with respective HR departments of businesses and vice-versa.",
    },
    {
      id: 2,
      question: "How do I apply a job?",
      answer: "To apply for a job, Click on find a job button and submit your application through the Registration Form",
    },
    {
      id: 3,
      question: "Are there remote job opportunities on Job Hub?",
      answer: "Yes, Job Hub offers a variety of remote job opportunities across multiple industries for flexible work options.s",
    },
    {
        id: 4,
        question: "Are there any charges for applying for a job?",
        answer: "No, applying for a job on the Job Hub Portal is completely free for all users.",
      },
      {
        id: 5,
        question: "How do I update my resume or profile in information?",
        answer: "To update your resume, navigate to the 'Build Resume' section and select a resume template to edit your information accordingly.",
      },
  ];

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
          buttonTitle1="Find a Job"
          buttonTitle2="Search"
          onButtonClick1={() => navigate("/registration")}
          onButtonClick2={() => alert("Search clicked!")}
          imgSrc={HeaderImage}
        />
        <JobCards />
        <JobDetails/>
        <PopularJobs/>
        <ResumeSection/>
        <PartnerSection/>
        <ChoiceSection/>
        <Testimonial/>
        <GlobalFaq
            faqItems={faqItems}
        />
        <Footer/>
      </PageComponent>
    </>
  )
}

export default Home

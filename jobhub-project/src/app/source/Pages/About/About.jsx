import React, { useRef } from 'react';
import HeaderPage from '../../../components/GlobalComponents/HeaderPage/HeaderPage';
import PageComponent from '../../../components/PageComponent/PageComponent';
import AboutBannerImage from '../../../assets/Images/bgImages/bgImage.png';
import AboutHeaderImage from '../../../assets/Images/AboutPage/AboutHeaderImage.svg';
import OurVissionMission from '../../../components/PageComponent/AboutComponent/OurVisionMission';
import JobDetails from '../../../components/PageComponent/JobDetails/JobDetails';
import JobProcess from '../../../components/PageComponent/AboutComponent/JobProcess';
import PartnerSection from '../../../components/PageComponent/PartnerSection';

const About = () => {
   
    const targetSectionRef = useRef(null);

    const scrollToSection = () => {
        targetSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div>
            <PageComponent>
                <HeaderPage
                    backgroundImage={AboutBannerImage}
                    headerText={
                        <>
                            About Us <span style={{ color: 'green' }}>Page</span>
                        </>
                    }
                    subText="Your trusted partner in job search and recruitment. We help job seekers find their dream jobs and assist employers in discovering top talent across industries."
                    buttonTitle1="Scroll Down"
                    onButtonClick1={() => handleScrollToSection('/ourmissionvission')}
                    imgSrc={AboutHeaderImage}
                    style={{
                        width: '75%',
                        height: 'auto',
                    }}
                    buttonAction={scrollToSection}
                />
                <div ref={targetSectionRef}>
                    <OurVissionMission id="ourmissionvission" />
                </div>
                <JobDetails />
                <JobProcess />
                <PartnerSection />
            </PageComponent>
        </div>
    );
};

export default About;

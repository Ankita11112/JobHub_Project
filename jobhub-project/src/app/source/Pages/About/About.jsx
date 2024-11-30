import HeaderPage from "../../../components/GlobalComponents/HeaderPage/HeaderPage";
import PageComponent from "../../../components/PageComponent/PageComponent";
import AboutBannerImage from "../../../assets/Images/bgImages/bgImage.png";
import AboutHeaderImage from "../../../assets/Images/AboutPage/AboutHeaderImage.svg"
import OurVissionMission from "../../../components/PageComponent/AboutComponent/OurVisionMission";
import JobDetails from "../../../components/PageComponent/JobDetails/JobDetails";
import JobProcess from "../../../components/PageComponent/AboutComponent/JobProcess";
import PartnerSection from "../../../components/PageComponent/PartnerSection";

const About = () => {
    return (
        <div>
            <PageComponent>
                <HeaderPage
                    backgroundImage={AboutBannerImage}
                    headerText={<>
                        About Us <span style={{color: "green"}}>Page</span>
                    </>}
                    subText="Your trusted partner in job search and recruitment. At, we help job seekers find their dream jobs and assist employers in discovering top talent across industries."
                    buttonTitle1="Apply Now"
                    imgSrc={AboutHeaderImage}
                    style={{
                        width: "75%",
                        height: "auto",
                    }}
                />   
                <OurVissionMission />
                <JobDetails />
                <JobProcess />
                <PartnerSection/>
            </PageComponent>
        </div>
    )
}

export default About;
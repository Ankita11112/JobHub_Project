import React, { useState } from "react";
import {
    Container,
    Box,
    Typography,
    TextField,
    Button,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
} from "@mui/material";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const JobPostForm = () => {
    const [industry, setIndustry] = useState("");
    const [jobRole, setJobRole] = useState("");
    const [requiredQualification, setRequiredQualification] = useState("");
    const [gender, setGender] = useState("");
    const [ experience, setExperience] = useState("");
    const [openingsCount, setOpeningsCount] = useState("");
    const [jobType, setJobType] = useState("");
    const [interviewMode, setInterviewMode] = useState("");
    const [salary, setSalary] = useState("");
    const [benefits, setBenefits] = useState([]);
    const [requiredSkills, setRequiredSkills] = useState("");
    const [jobLocationType, setJobLocationType] = useState("");
    const [jobDescription, setJobDescription] = useState("");

    const navigate = useNavigate();

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({
            industry,
            jobRole,
            requiredQualification,
            gender,
            experience,
            openingsCount,
            jobType,
            interviewMode,
            salary,
            benefits,
            requiredSkills,
            jobLocationType,
            jobDescription,
        });

    const jobDetails = [
        {
            jobRole: "Software Engineer",
            industry: "IT",
            experience: 3,
            salary: 6000,
            jobType: "Full-Time",
            jobLocationType: "Remote",
            requiredQualification: "Bachelor's Degree in Computer Science",
            gender: "Any",
            openingsCount: 5,
            interviewMode: "Online",
            benefits: ["Health Insurance", "Paid Time Off", "401(k)"],
            requiredSkills: "React, Node.js, MongoDB",
            jobDescription: "Develop scalable web applications using modern frameworks.",
        },
        {
            jobRole: "Project Manager",
            industry: "Construction",
            experience: 5,
            salary: 8000,
            jobType: "Full-Time",
            jobLocationType: "On-site",
            requiredQualification: "Bachelor's Degree in Civil Engineering",
            gender: "Any",
            openingsCount: 2,
            interviewMode: "In-person",
            benefits: ["Company Car", "Housing Allowance", "Health Insurance"],
            requiredSkills: "Leadership, Risk Management, Scheduling",
            jobDescription: "Oversee construction projects and ensure timely completion.",
        },
        {
            jobRole: "Data Analyst",
            industry: "Finance",
            experience: 2,
            salary: 5000,
            jobType: "Part-Time",
            jobLocationType: "Remote",
            requiredQualification: "Bachelor's Degree in Data Science",
            gender: "Any",
            openingsCount: 3,
            interviewMode: "Online",
            benefits: ["Flexible Hours", "Professional Development"],
            requiredSkills: "Excel, SQL, Tableau",
            jobDescription: "Analyze financial data to provide actionable insights.",
        },
        {
            jobRole: "HR Specialist",
            industry: "Human Resources",
            experience: 4,
            salary: 4500,
            jobType: "Full-Time",
            jobLocationType: "Hybrid",
            requiredQualification: "MBA in HR",
            gender: "Female",
            openingsCount: 1,
            interviewMode: "Online",
            benefits: ["Health Insurance", "Paid Leave"],
            requiredSkills: "Communication, Recruitment, Employee Relations",
            jobDescription: "Manage recruitment and employee relations.",
        },
        {
            jobRole: "Graphic Designer",
            industry: "Media",
            experience: 2,
            salary: 4000,
            jobType: "Contract",
            jobLocationType: "Remote",
            requiredQualification: "Diploma in Graphic Design",
            gender: "Any",
            openingsCount: 4,
            interviewMode: "Portfolio Submission",
            benefits: ["Flexible Hours"],
            requiredSkills: "Adobe Photoshop, Illustrator, Creativity",
            jobDescription: "Design marketing materials and social media creatives.",
        },
    ];
    
    localStorage.setItem("jobDetails", JSON.stringify([...jobDetails]));    
        
        toast.success("Form Submitted Successfully!");
        setTimeout(() => {
            navigate("/employerdashboard");
        }, 6000);
    };

    return (
        <Box
            sx={{
                background: "linear-gradient(to bottom, #4caf50, #ffffff)",
                minHeight: "100vh",
                padding: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Container
                sx={{
                    boxShadow:
                        "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
                    borderRadius: "10px",
                    backgroundColor: "white",
                    padding: "30px",
                }}
            >
                <Box textAlign="center" mb={5}>
                    <Typography
                        variant="h3"
                        sx={{ fontSize: { xs: "35px", lg: "45px" } }}
                        gutterBottom
                    >
                        Add Job Details
                    </Typography>
                    <Typography variant="h6">
                        Create a Job Post to Reach Potential Candidates
                    </Typography>
                </Box>
                <form
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                    }}
                    onSubmit={handleSubmit}
                >
                    <FormControl fullWidth>
                        <InputLabel>Specific Industry</InputLabel>
                        <Select
                            value={industry}
                            onChange={(e) => setIndustry(e.target.value)}
                            label="Specific Industry"
                            required
                        >
                            <MenuItem value="IT">IT</MenuItem>
                            <MenuItem value="Non-IT">Non-IT</MenuItem>
                            <MenuItem value="Pharma">Pharma</MenuItem>
                            <MenuItem value="BPO">BPO</MenuItem>
                            <MenuItem value="Auto Mobile">Auto Mobile</MenuItem>
                        </Select>
                    </FormControl>
                    <Box sx={{ display: "flex", gap: "20px" }}>
                        <TextField
                            fullWidth
                            label="Job Role"
                            variant="outlined"
                            required
                            value={jobRole}
                            onChange={(e) => setJobRole(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            label="Required Qualification"
                            variant="outlined"
                            required
                            value={requiredQualification}
                            onChange={(e) =>
                                setRequiredQualification(e.target.value)
                            }
                        />
                    </Box>
                    <Box sx={{ display: "flex", gap: "20px" }}>
                        <FormControl fullWidth>
                            <InputLabel>Gender</InputLabel>
                            <Select
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                label="Gender"
                                required
                            >
                                <MenuItem value="Male">Male</MenuItem>
                                <MenuItem value="Female">Female</MenuItem>
                                <MenuItem value="Other">Other</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            fullWidth
                            type="number"
                            label="No. of Openings"
                            variant="outlined"
                            required
                            value={openingsCount}
                            onChange={(e) => setOpeningsCount(e.target.value)}
                        />
                    </Box>

                    <Box sx={{ display: "flex", gap: "20px" }}>
                        <TextField
                        fullWidth
                        type="number"
                        label="Experience"
                        variant="outlined"
                        placeholder="Enter required experience (e.g., 2 years)"
                        required
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                    />
                        <FormControl fullWidth>
                        <InputLabel>Job Type</InputLabel>
                        <Select
                            value={jobType}
                            onChange={(e) => setJobType(e.target.value)}
                            label="Job Type"
                            required
                        >
                            <MenuItem value="Part-Time">Part-Time</MenuItem>
                            <MenuItem value="Full-Time">Full-Time</MenuItem>
                        </Select>
                    </FormControl>
                    </Box>

                    <FormControl fullWidth>
                        <InputLabel>Interview Mode</InputLabel>
                        <Select
                            value={interviewMode}
                            onChange={(e) => setInterviewMode(e.target.value)}
                            label="Interview Mode"
                            required
                        >
                            <MenuItem value="Online">Online</MenuItem>
                            <MenuItem value="Offline">Offline</MenuItem>
                        </Select>
                    </FormControl>
                    <Box sx={{ display: "flex", gap: "20px" }}>
                        <TextField
                            fullWidth
                            type="number"
                            label="Salary (per month)"
                            variant="outlined"
                            required
                            value={salary}
                            onChange={(e) => setSalary(e.target.value)}
                        />
                        <FormControl fullWidth>
                            <InputLabel>Benefits</InputLabel>
                            <Select
                                label="Benefits"
                                value={benefits}
                                onChange={(e) =>
                                    setBenefits(typeof e.target.value === "string"
                                        ? e.target.value.split(", ")
                                        : e.target.value)
                                }
                                multiple
                                renderValue={(selected) =>
                                    selected.join(", ")
                                }
                            >
                                <MenuItem value="Health Insurance">
                                    Health Insurance
                                </MenuItem>
                                <MenuItem value="Retirement Plans">
                                    Retirement Plans
                                </MenuItem>
                                <MenuItem value="Paid Time Off">
                                    Paid Time Off
                                </MenuItem>
                                <MenuItem value="ESCI">
                                    ESCI
                                </MenuItem>
                                <MenuItem value="Provident Fund">
                                    Provident Fund
                                </MenuItem>
                                <MenuItem value="Flexible Working Hours">
                                    Flexible Working Hours
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                     <Box sx={{ display: "flex", gap: "20px" }}>
                          <TextField
                        fullWidth
                        label="Required Skills"
                            variant="outlined"
                            placeholder="List required skills (e.g., React, Node.js, etc.)"
                            required
                            value={requiredSkills}
                            onChange={(e) => setRequiredSkills(e.target.value)}
                    />

                        <FormControl fullWidth>
                            <InputLabel>Job Location Type</InputLabel>
                            <Select
                                value={jobLocationType}
                                onChange={(e) => setJobLocationType(e.target.value)}
                                label="Job Location Type"
                                required
                            >
                                <MenuItem value="Remote">Remote</MenuItem>
                                <MenuItem value="On-Site">On-Site</MenuItem>
                                <MenuItem value="Hybrid">Hybrid</MenuItem>
                            </Select>
                        </FormControl>

                    </Box>
                    <TextField
                        fullWidth
                        label="Job Description"
                        variant="outlined"
                        multiline
                        rows={5}
                        required
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                    />
                    <Box textAlign="center">
                        <Button
                            type="submit"
                            sx={{
                                padding: "15px 60px",
                                backgroundColor: "green",
                                color: "white",
                                "&:hover": {
                                    backgroundColor: "darkgreen",
                                },
                            }}
                        >
                            Submit
                        </Button>
                    </Box>
                </form>
            </Container>
        </Box>
    );
};

export default JobPostForm;

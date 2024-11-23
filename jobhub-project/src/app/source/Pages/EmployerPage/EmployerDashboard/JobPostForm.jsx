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
    const [companyName, setCompanyName] = useState("");
    const [fullName, setFullName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [source, setSource] = useState("");
    const [gstNumber, setGstNumber] = useState(""); // New state for GST number
    const navigate = useNavigate();

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({
            companyName,
            fullName,
            mobile,
            email,
            gender,
            source,
            gstNumber, // Include GST number in submission
        });
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
                style={{
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
                    <TextField
                        fullWidth
                        label="Company Name"
                        variant="outlined"
                        placeholder="Enter Your Company Name"
                        required
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                    />
                    <Box sx={{ display: "flex", gap: "20px" }}>
                        <TextField
                            fullWidth
                            label="Full Name"
                            variant="outlined"
                            placeholder="Enter Your Name"
                            required
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            label="Mobile"
                            variant="outlined"
                            placeholder="Enter Mobile Number"
                            required
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                        />
                    </Box>
                    <Box sx={{ display: "flex", gap: "20px" }}>
                        <TextField
                            fullWidth
                            label="Email"
                            variant="outlined"
                            placeholder="Enter Your Email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
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
                    </Box>
                    <TextField
                        fullWidth
                        label="GST Number"
                        variant="outlined"
                        placeholder="Enter GST Number"
                        value={gstNumber}
                        onChange={(e) => setGstNumber(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        label="From where you heard about this"
                        variant="outlined"
                        placeholder="Enter Source"
                        required
                        value={source}
                        onChange={(e) => setSource(e.target.value)}
                    />
                    <Box textAlign="center">
                        <Button
                            type="submit"
                            style={{
                                border: "1px solid green",
                                padding: "15px 60px",
                                backgroundColor: "green",
                                color: "white",
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

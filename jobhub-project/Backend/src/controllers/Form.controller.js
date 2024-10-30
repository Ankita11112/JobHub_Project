const Form = require("../models/Form.model");
const { uploadOnCloudinary } = require("../utils/Cloudinary");

exports.formDetails = async (req, res) => {
    try {
        const { firstname, lastname, email, number, dob, qualification, gender, role, address, experience } = req.body;

        if (
            [firstname, lastname, email, number, dob, qualification, gender, role, address, experience].some((field) => field?.trim() === "")
        ) {
            throw new ApiError(400, "all fields are required");
        }
        const filePath = req.file.path;
        
        if(!filePath) {
            return res.status(404).json({
                message:"File not found",
            })
        }

        
        const response = await uploadOnCloudinary(filePath);

        if(!response.url) {
            return res.status(400).json({
                message:" File is missing",
            })
        }

        const form = await Form.create({
            firstName: firstname,
            lastName: lastname,
            email,
            mobile: number,
            dob,
            qualification,
            gender,
            role,
            address,
            experience,
            resume: response.url
        })

        return res.status(200).json({
            message: "Form Created!",
            form
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error Occured",
        })
    }
}
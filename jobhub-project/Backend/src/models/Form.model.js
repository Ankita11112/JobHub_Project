const mongoose = require("mongoose");

const formSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true,
        },
        lastName: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
        },
        mobile: {
            type: Number,
            required: true,
            trim: true,
        },
        dob: {
            type: String,
            required: true
        },
        qualification: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            required: true,
            enum: ["Male", "Female", "Others"],
        },
        role: {
            type: String,
            required: true,
            enum: ["Developer", "Designer", "Others"]
        },
        address: {
            type: String,
            required: true,
        },
        experience: {
            type: String,
            required: true
        },
        resume: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model("Form", formSchema);
const { v2 } = require("cloudinary")
const fs = require("fs");
const dotenv = require("dotenv");

dotenv.config();

v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;

        // upload the file to Cloudinary
        const response = await v2.uploader.upload(localFilePath, {
            resource_type: "raw",
            folder: "FORM"
        });

        // File upload successfully
        fs.unlinkSync(localFilePath);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath);
        return null;
    }
}

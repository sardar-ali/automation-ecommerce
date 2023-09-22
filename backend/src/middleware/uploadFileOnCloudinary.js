const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUDE_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

const uploadImageOnCloudinary = async (path) => {
    try {
        const result = await cloudinary.uploader.upload(path);
        return result?.secure_url;
    } catch (error) {
        return error;
    }
}

module.exports = uploadImageOnCloudinary
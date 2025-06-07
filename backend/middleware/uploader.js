import {v2 as cloudinary} from "cloudinary";

cloudinary.config(
    {
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    }
)

const uploader = async (req, res) => {
    const response = await cloudinary.uploader.upload(req.file.path);
    return res.json({success: true, message: "Image uploaded successfully", url: response.secure_url});
}
const remove = async (public_id) => {
    return await cloudinary.uploader.destroy(public_id);
}
const generateURL = async (req, res) => {
    const {public_id} = req.params.id
    return cloudinary.url(public_id);
}

export {uploader, remove, generateURL}
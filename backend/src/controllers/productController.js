const cloudinary = require('cloudinary').v2;
const mongoose = require('mongoose');
const fs = require("fs");
const Product = require("../models/productModel")
const Category = require("../models/categoryModel")
// const ulid = require("ulid");
const uploadImageOnCloudinary = require("../middleware/uploadFileOnCloudinary")
// cloudinary.config({
//     cloud_name: process.env.CLOUDE_NAME,
//     api_key: process.env.API_KEY,
//     api_secret: process.env.API_SECRET
// });




//create Product
const createProduct = async (req, res) => {
    try {

        console.log("File", req?.file)
        const category = Category.findById(req?.body?.category);

        if (!category) {
            return res.status(400).json({
                status: false,
                error: { message: "Invalid category!" }
            })
        }

        if (!req?.file) {
            return res.status(400).json({
                status: false,
                error: { message: "Product image is required!" }
            })
        }

        const imageUrl = await uploadImageOnCloudinary(req?.file?.path)

        // const basePath = `${req?.protocol}://${req.get("host")}/public/images/product/`;
        // const fileName = req?.file?.filename;

        // const product = await Product.create({ ...req?.body, image: `${basePath}${fileName}` });

        const product = await Product.create({ ...req?.body, image: `${imageUrl}` });
        if (!product) {
            return res.status(400).json({
                status: false,
                message: "Product did not created!"
            })
        }

        res.status(201).json({
            status: true,
            data: {
                product,
                message: "Product created successfully!"
            }
        })


    } catch (err) {
        res.status(500).json({
            status: false,
            error: { message: "Something went wrong!" },
            err,
        })
    }
}

// get products
const getProduct = async (req, res) => {
    try {
        const product = await Product.find().populate("category");

        if (!product) {
            return res.status(400).json({
                status: false,
                message: "Product not found!"
            })
        }

        res.status(200).json({
            status: true,
            data: {
                product,
                message: "Product get successfully!"
            }
        })

    } catch (err) {
        res.status(500).json({
            status: false,
            error: { message: "Something went wrong!" },
            err,
        })
    }
}
// get products
const updateProduct = async (req, res) => {
    try {
        let imageUrl;

        if (req?.file) {
            imageUrl = await uploadImageOnCloudinary(req?.file?.path)
            // const basePath = `${req?.protocol}://${req?.get("host")}/public/images/product/`;
            // const fileName = req?.file?.filename;
            // imageUrl = `${basePath}${fileName}`;
        } else {
            imageUrl = req?.body?.image
        }

        const product = await Product.findByIdAndUpdate(req?.params?.id, { ...req?.body, image: imageUrl }, { new: true });

        if (!product) {
            return res.status(400).json({
                status: false,
                message: "Product not updated!"
            })
        }

        res.status(200).json({
            status: true,
            data: {
                product,
                message: "Product updated successfully!"
            }
        })

    } catch (err) {
        res.status(500).json({
            status: false,
            error: { message: "Something went wrong!" },
            err,
        })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req?.params?.id);

        if (!product) {
            res.status(400).json({
                status: false,
                error: { message: "Product not deleted!" }
            })
        }
        res.status(200).json({
            status: true,
            product,
            message: "Product deleted successfully!"
        })

    } catch (err) {
        res.status(500).json({
            status: false,
            error: { message: "Something went wrong!" },
            err,
        })
    }
}


// get products
const getSingleProduct = async (req, res) => {
    const { id } = req?.params
    try {
        const product = await Product.findById(id).populate("category", "_id,name");

        if (!product) {
            return res.status(400).json({
                status: false,
                message: "Product not found!"
            })
        }

        const products = await Product.aggregate([
            {
                $match: {
                    category: new mongoose.Types.ObjectId(product?.category?._id),
                },
            },
        ]);


        res.status(200).json({
            status: true,
            data: {
                product,
                relatedProducts: products,
                message: "Product get successfully!"
            }
        })

    } catch (err) {
        res.status(500).json({
            status: false,
            error: { message: "Something went wrong!" },
            err,
        })
    }
}

// get products
const getAllProductOfSpecificCategory = async (req, res) => {
    const name = req?.params?.name;
    console.log("Params:::", req?.params)

    const { id } = req?.params;
    try {

        // const category = await Category.findOne({ name })


        // console.log("category ::", category);

        // const categoryId = new mongoose.Types.ObjectId(category?._id);
        // console.log("categoryId ::", categoryId);

        // const products = await Product.aggregate([
        //     {
        //         $match: {
        //             category: categoryId,
        //         },
        //     },
        //     {
        //         $lookup: {
        //             from: 'categories', // The name of the collection to perform the lookup
        //             localField: 'category', // The local field to match with the foreign field
        //             foreignField: '_id', // The foreign field to match with the local field
        //             as: 'categoryInfo', // The alias for the merged category document
        //         },
        //     },
        //     {
        //         $unwind: '$categoryInfo', // Unwind the categoryInfo array to get a single object
        //     },
        //     {
        //         $project: {
        //             _id: 1, // product collection fields
        //             name: 1, // product collection fields
        //             price: 1, // product collection fields
        //             image: 1, // product collection fields

        //             // Add more fields you want to project here
        //             category: {
        //                 name: '$categoryInfo.name', // Extract category name
        //                 _id: '$categoryInfo._id',
        //             }// Extract category id
        //         },
        //     },
        // ]);


        const category = await Category.findOne({ name });

        if (!category) {
            // If category doesn't exist
            res.status(404).json({
                status: false,
                error: { message: "Category not found!" },
            })// Return an empty array or handle accordingly
        }

        // Find all products with the found category ID
        const products = await Product.find({ category: category._id });

        // console.log("products ::", products)
        res.status(200).json({
            status: true,
            data: {
                products,
                message: "Product get successfully!"
            }
        })
    } catch (err) {
        res.status(500).json({
            status: false,
            error: { message: "Something went wrong!" },
            err,
        })
    }
}

module.exports = { createProduct, getProduct, updateProduct, deleteProduct, getSingleProduct, getAllProductOfSpecificCategory }
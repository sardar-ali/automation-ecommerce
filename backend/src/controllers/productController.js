const Product = require("../models/productModel")
const Category = require("../models/categoryModel")


//create Product
const createProduct = async (req, res) => {
    try {

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

        const basePath = `${req?.protocol}://${req.get("host")}/public/images/product/`;
        const fileName = req?.file?.filename;

        const product = await Product.create({ ...req?.body, image: `${basePath}${fileName}` });

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


    } catch (error) {
        return res.status(400).json({
            status: false,
            error
        })
    }
}

// get products
const getProduct = async (req, res) => {
    try {
        const product = await Product.find();

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

    } catch (error) {
        return res.status(400).json({
            status: false,
            error
        })
    }
}

// get products
const updateProduct = async (req, res) => {
    try {
        let imageUrl;

        if (req?.file) {
            const basePath = `${req?.protocol}://${req?.get("host")}/public/images/product/`;
            const fileName = req?.file?.filename;
            imageUrl = `${basePath}${fileName}`;
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

    } catch (error) {
        return res.status(400).json({
            status: false,
            error
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
        res.status(400).json({
            status: true,
            product,
            message: "Product deleted successfully!"
        })

    } catch (error) {
        res.status(400).json({
            status: false,
            error
        })
    }
}


module.exports = { createProduct, getProduct, updateProduct, deleteProduct }
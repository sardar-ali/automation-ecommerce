const Category = require("../models/categoryModel");
const uploadImageOnCloudinary = require("../middleware/uploadFileOnCloudinary")

// create category 
const createCategory = async (req, res) => {
    try {

        console.log("body ::", req?.body)
        console.log("file ::", req?.file)

        const file = req?.file;
        if (!file) {
            return res.status(400).json({
                status: "fail",
                error: { message: "File is required!" }
            })
        }

        const imageUrl = await uploadImageOnCloudinary(req?.file?.path);

        // const basePath = `${req?.protocol}://${req?.get("host")}/public/images/category/`
        // const fileName = req?.file?.filename
        // const category = await Category.create({ ...req?.body, image: `${basePath}${fileName}` });

        const category = await Category.create({ ...req?.body, image: `${imageUrl}` });



        // const category = await Category.create(req.body);

        if (!category) {
            // next(new CustomError("Category is not created!", 404))
            res.status(404).json({
                status: false,
                message: "Category is not created!"
            })
        }

        res.status(201).json({
            status: true,
            data: {
                category,
                message: "Category created successfully!"
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

// get list of category 
const getAllCategory = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json({
            status: true,
            data: {
                categories,
                message: "Category get successfully!"
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

// get single category
const getSingleCategory = async (req, res) => {
    try {
        const category = await Category.findById(req?.params?.id);
        if (!category) {
            res.status(404).json({
                status: true,
                message: "Category not found!"
            })
        }

        res.status(200).json({
            status: true,
            data: {
                category,
                message: "Category get successfully!"
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

// update category 
const updateCategory = async (req, res) => {
    try {

        const file = req?.file;
        let imageUrl;

        if (!file) {
            imageUrl = req?.body?.image
        } else {
            imageUrl = await uploadImageOnCloudinary(req?.file?.path);
            // const basePath = `${req?.protocol}://${req?.get("host")}/public/images/category/`
            // const fileName = req?.file?.filename
            // imageUrl = `${basePath}${fileName}`;
        }

        const category = await Category.findByIdAndUpdate(req?.params?.id, { ...req?.body, image: imageUrl }, { new: true });

        if (!category) {
            res.status(404).json({
                status: true,
                message: "Category did not update!"
            })
        }

        res.status(200).json({
            status: true,
            data: {
                category,
                message: "Category updated successfully!"
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


//delete category
const deleteCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req?.params?.id);

        if (!category) {
            res.status(404).json({
                status: true,
                message: "Category did not deleted!"
            })
        }

        res.status(200).json({
            status: true,
            data: {
                category,
                message: "Category deleted successfully!"
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

module.exports = { createCategory, getAllCategory, getSingleCategory, updateCategory, deleteCategory }
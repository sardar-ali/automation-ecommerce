const express = require("express");
const multer = require('multer')
const { createProduct, getProduct, updateProduct, deleteProduct, getSingleProduct, getAllProductOfSpecificCategory } = require("../controllers/productController");
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/product')
    },
    filename: function (req, file, cb) {
        const fileName = file.originalname.split(" ").join("-")
        cb(null, `${fileName}-${Date.now()}.jpeg`)
    }
})

const uploadOption = multer({ storage: storage })

const router = express.Router();

router.post("/create-product", authMiddleware, isAdmin, uploadOption.single("image"), createProduct)
router.put("/update-product/:id", authMiddleware, isAdmin, uploadOption.single("image"), updateProduct)
router.delete("/delete-product/:id", authMiddleware, isAdmin, deleteProduct)
router.get("/get-single-product/:id", getSingleProduct)
router.get("/get-all-product-by-specific-category/:id", getAllProductOfSpecificCategory)

router.get("/get-products", getProduct)

module.exports = router;
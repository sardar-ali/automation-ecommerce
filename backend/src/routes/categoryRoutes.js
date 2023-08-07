const express = require("express");
const multer = require('multer')
const { createCategory, getAllCategory, getSingleCategory, updateCategory, deleteCategory } = require("../controllers/categoryController")
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/category')
    },
    filename: function (req, file, cb) {
        const fileName = file.originalname.split(" ").join("-")
        cb(null, `${fileName}-${Date.now()}.jpeg`)
    }
})

const uploadOption = multer({ storage: storage })

const router = express.Router();
router.post("/create-category", authMiddleware, isAdmin, uploadOption.single("image"), createCategory);
router.get("/get-all-category", getAllCategory);
router.get("/get-single-category/:id", getSingleCategory);
router.put("/update-category/:id", authMiddleware, isAdmin, uploadOption.single("image"), updateCategory);
router.delete("/delete-category/:id", authMiddleware, isAdmin, deleteCategory);

module.exports = router;

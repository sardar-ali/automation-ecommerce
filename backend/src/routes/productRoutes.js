const express  = require("express");
const {createProduct} = require("../controllers/productController");
const {authMiddleware, isAdmin} = require("../middleware/authMiddleware")
const router = express.Router();

router.post("/create-product", authMiddleware, isAdmin ,createProduct)

module.exports = router
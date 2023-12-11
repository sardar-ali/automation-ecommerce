const express = require("express");
const { createOrder, getAllOrder, getSingleOrder, deleteOrder } = require("../controllers/orderController")
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");


const router = express.Router();
router.post("/create-order", createOrder);
router.get("/get-all-order", getAllOrder);
router.get("/get-single-order/:id", getSingleOrder);
// router.put("/update-Order/:id", authMiddleware, isAdmin, uploadOption.single("image"), updateOrder);
router.delete("/delete-order/:id", authMiddleware, isAdmin, deleteOrder);

module.exports = router;

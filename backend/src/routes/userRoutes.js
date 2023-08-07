const express = require("express");
const { signUpUser, loginUser, loginAdmin, updateUser } = require("../controllers/userController");
const { authMiddleware } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/signup", signUpUser)
router.post("/login", loginUser)
router.post("/admin-login", loginAdmin)
router.put("/update-user/:id", authMiddleware, updateUser)


module.exports = router;
const express = require("express");
const { signUpUser, loginUser, loginAdmin } = require("../controllers/userController")
const router = express.Router();

router.post("/signup", signUpUser)
router.post("/login", loginUser)
router.post("/admin-login", loginAdmin)


module.exports = router;
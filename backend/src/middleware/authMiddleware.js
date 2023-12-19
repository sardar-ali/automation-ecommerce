const jwt = require("jsonwebtoken")
const User = require("../models/userModal");

//check jwt token and verifying it
const authMiddleware = async (req, res, next) => {
    let token;
    // console.log("Header ::", req?.headers)

    if (req?.headers?.authorization?.startsWith("Bearer")) {
        // console.log("authorization ::", req?.headers?.authorization)

        token = req?.headers?.authorization?.split(" ")[1];
        // console.log("token ::", token)
        try {
            const decoded = await jwt.verify(token, process.env.JWT_SECRET);
            // console.log("decoded ::::", decoded)

            const user = await User.findById(decoded?.id);
            // console.log("users ::::", user)
            req.user = user;
            next();
        } catch (error) {
            return res.status(401).json({
                status: false,
                message: "UnAuthorization token Please login again!"
            })
        }

    } else {
        // return next(new CustomError("Authorization token required!", 401))
        return res.status(401).json({
            status: false,
            message: "Authorization token required!"
        })
    }
}

//check the user role 
const isAdmin = async (req, res, next) => {
    if (!req?.user?.isAdmin) {
        // next(new CustomError("You are not a Admin", 401))
        return res.status(401).json({
            status: false,
            message: "You are not a Admin!"
        })
    } else {
        next()
    }
}

module.exports = { authMiddleware, isAdmin }
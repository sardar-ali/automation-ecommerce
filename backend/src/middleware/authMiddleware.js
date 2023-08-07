const jwt = require("jsonwebtoken")
const User = require("../models/userModal");

//check jwt token and verifying it
const authMiddleware = async (req, res, next) => {
    let token;

    if (req?.headers?.authorization?.startsWith("Bearer")) {
        token = req?.headers?.authorization?.split(" ")[1];
        try {
            const decoded = await jwt.verify(token, process.env.JWT_SECRET);
            const user = await User.findById(decoded?.id);
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
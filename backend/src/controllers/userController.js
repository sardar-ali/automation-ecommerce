const { generateToken } = require("../config/generateToken");
const User = require("../models/userModal");

// signup user
const signUpUser = async (req, res) => {
    try {

        const email = req?.body?.email;

        //check if user already exist throw error
        const isExist = await User.findOne({ email });

        if (isExist) {
            return res.status(400).json({
                status: false,
                message: "Email is already exists!"
            })
        }

        // create new user
        const user = await User.create(req?.body);

        if (user) {
            user.password = undefined;
        }

        //send response back to user
        res.json({
            status: true,
            data: {
                user,
                message: "User created successfully"
            }
        })

    } catch (error) {
        return res.status(404).json({
            status: false,
            error
        })
    }
}


// user Login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req?.body;

        if (!email || !password) {
            // return next(new CustomError("Email and Password are required!", 400))
            return res.status(400).json({
                status: false,
                message: "Email and Password are required!"
            })
        }

        const isUser = await User.findOne({ email }).select("+password");

        if (!isUser) {
            // return next(new CustomError("Invalid Email  or Password!", 400))
            return res.status(400).json({
                status: false,
                message: "Invalid Email  or Password!"
            })
        }

        if (! await isUser?.isPasswordMatched(password, isUser?.password)) {
            // return next(new CustomError("Invalid  credentials!", 400))
            return res.status(400).json({
                status: false,
                message: "Invalid credentials!"
            })
        }

        const refreshToken = await generateRefreshToken(isUser?.id);

        const updateUser = await User.findOneAndUpdate(isUser?._id, {
            refreshToken: refreshToken,
        }, {
            new: true
        })

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            maxAge: 72 * 60 * 60 * 1000
        })
        //response back to user
        res.status(200).json({
            status: true,
            data: {
                user: {
                    firstName: isUser?.firstName,
                    lastName: isUser?.lastName,
                    email: isUser?.email,
                    phone: isUser?.phone,
                    token: generateToken(isUser?._id)
                },
                message: "Logged in successfully"
            }
        })


    } catch (error) {
        return res.status(404).json({
            status: false,
            error
        })
    }
}


// admin Login
const loginAdmin = async (req, res, next) => {
    try {
        const { email, password } = req?.body;

        if (!email || !password) {
            // return next(new CustomError("Email and Password are required!", 400))
            return res.status(400).json({
                status: false,
                message: "Email and Password are required!"
            })
        }

        const isAdmin = await User.findOne({ email }).select("+password");

        if (!isAdmin) {
            // return next(new CustomError("Invalid Email  or Password!", 400))
            return res.status(400).json({
                status: false,
                message: "Invalid Email  or Password!"
            })
        }

        if (isAdmin && isAdmin?.role !== "admin") {
            // return next(new CustomError("You are not Authorized", 400))
            return res.status(400).json({
                status: false,
                message: "You are not Authorized"
            })
        }

        if (! await isAdmin?.isPasswordMatched(password, isAdmin?.password)) {
            // return next(new CustomError("Invalid  credentials!", 400))
            return res.status(400).json({
                status: false,
                message: "Invalid  credentials!"
            })
        }

        // const refreshToken = await generateRefreshToken(isAdmin?.id);
        // const updateUser = await User.findOneAndUpdate(isAdmin?._id, {
        //     refreshToken: refreshToken,
        // }, {
        //     new: true
        // })

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            maxAge: 72 * 60 * 60 * 1000
        })

        //response back to user
        res.status(200).json({
            status: true,
            data: {
                user: {
                    firstName: isAdmin?.firstName,
                    lastName: isAdmin?.lastName,
                    email: isAdmin?.email,
                    phone: isAdmin?.phone,
                    token: generateToken(isAdmin?._id)
                },
                message: "Logged in successfully"
            }
        })

    } catch (error) {
        return res.status(404).json({
            status: false,
            error
        })
    }

}


module.exports = { signUpUser, loginUser, loginAdmin }
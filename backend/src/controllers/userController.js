const { generateToken } = require("../config/generateToken");
const User = require("../models/userModal");

// signup user
const signUpUser = async (req, res) => {
    try {
console.log("body ::", )
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
                user: {
                    id:user?._id,
                    first_name: user?.first_name,
                    last_name: user?.last_name,
                    email: user?.email,
                    isAdmin: user?.isAdmin,
                    token: generateToken(user?._id)
                },
                message: "User signup successfully!"
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

        // const refreshToken = await generateRefreshToken(isUser?.id);
        // const updateUser = await User.findOneAndUpdate(isUser?._id, {
        //     refreshToken: refreshToken,
        // }, {
        //     new: true
        // })

        // res.cookie("refreshToken", refreshToken, {
        //     httpOnly: true,
        //     maxAge: 72 * 60 * 60 * 1000
        // })


        //response back to user
        res.status(200).json({
            status: true,
            data: {
                user: {
                    id:isUser?._id,
                    first_name: isUser?.first_name,
                    last_name: isUser?.last_name,
                    email: isUser?.email,
                    isAdmin: isUser?.isAdmin,
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
const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req?.body;

        if (!email || !password) {
            // return next(new CustomError("Email and Password are required!", 400))
            return res.status(400).json({
                status: false,
                message: "Email and Password are required!"
            })
        }

        const Admin = await User.findOne({ email }).select("+password");

        if (!Admin) {
            // return next(new CustomError("Invalid Email  or Password!", 400))
            return res.status(400).json({
                status: false,
                message: "Invalid Email  or Password!"
            })
        }

        if (Admin && !Admin?.isAdmin) {
            // return next(new CustomError("You are not Authorized", 400))
            return res.status(400).json({
                status: false,
                message: "You are not Authorized"
            })
        }

        if (! await Admin?.isPasswordMatched(password, Admin?.password)) {
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

        // res.cookie("refreshToken", refreshToken, {
        //     httpOnly: true,
        //     maxAge: 72 * 60 * 60 * 1000
        // })

        //response back to user
        res.status(200).json({
            status: true,
            data: {
                user: {
                    id:Admin?._id,
                    first_name: Admin?.first_name,
                    last_name: Admin?.last_name,
                    email: Admin?.email,
                    isAdmin: Admin?.isAdmin,
                    token: generateToken(Admin?._id)
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

// update user
const updateUser = async (req, res) => {

    try {

        if (req?.body?.password) {
            return res.status(400).json({
                status: false,
                message: "User cannot updated has password here!"
            })
        }

        const user = await User.findByIdAndUpdate(req?.params?.id, {
            first_name: req?.body?.first_name,
            last_name: req?.body?.last_name,
            email: req?.body?.email,
        }, {
            new: true
        }).select("-password")


        if (!user) {
            // return next(new CustomError("User is not updated!", 400))
            return res.status(400).json({
                status: false,
                message: "User is not updated!"
            })
        }

        res.status(200).json({
            status: true,
            data: {
                user,
                message: "User updated successfully"
            }
        })



    } catch (error) {
        return res.status(404).json({
            status: true,
            data: {
                user,
                error
            }
        })
    }
}

module.exports = { signUpUser, loginUser, loginAdmin, updateUser }
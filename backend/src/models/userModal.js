const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const crypto = require("crypto");



const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        require: true,
    },
    last_name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
},{
    timestamps: true
});


//hashed user password
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
})


// compare user plainPassword with hashed password in the dbs
userSchema.methods.isPasswordMatched = async (plainPassword, hashedPassword) => {
    return await bcrypt.compare(plainPassword, hashedPassword);
}

const User = mongoose.model("User", userSchema);
module.exports = User;
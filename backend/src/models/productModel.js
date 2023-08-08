const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    // slug: {
    //     type: String,
    //     required: true,
    //     unique: true,
    //     lowercase: true
    // },
    price: {
        type: Number,
        required: true,
    },
    category: {
        // type: String,
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    // in_stack:{
    //     type: Number,
    //     required: true,
    // },
    // brand: {
    //     type: String,
    //     required: true,
    // },
    image: {
        type: String,
    },
    short_description: {
        type: String,
        required: true,
    },
    full_description: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
})

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
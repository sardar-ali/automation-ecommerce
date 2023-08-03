const mongoose = require("mongoose");


const shippingAddressSchema = new mongoose.Schema({
    address:{
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    postal_code: {
        type: String,
        required: true,
    },
});


const ShippingAddress = mongoose.model("ShippingAddress", shippingAddressSchema);

module.exports = ShippingAddress;
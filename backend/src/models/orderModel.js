const mongoose = require("mongoose");


const orderSchema = new mongoose.Schema({
    orderItems:[ {
        type: mongoose.Schema.Types.ObjectId,
        ref: "OrderItem",
        required: true
    }],

    status: {
        type: String,
        required: true,
        default: "Pending"
    },

    totalPrice: {
        type: Number,
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    },

    shipping_address:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"ShippingAddress"
    },

    orderDate: {
        type: Date,
        default: Date.now
    },

},
{
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});


orderSchema.virtual("id").get(function () {
    return this._id.toHexString();
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
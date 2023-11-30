const mongoose = require("mongoose");


const orderItemSchema = new mongoose.Schema({
    // quantity: {
    //     type: Number,
    //     // required: true,
    // },
    products: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        quantity: { type: Number, required: true },
      }],
      
});


const OrderItems = mongoose.model("OrderItem", orderItemSchema);

module.exports = OrderItems;
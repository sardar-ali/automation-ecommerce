const Order = require("../models/orderModel");
const OrderItems = require("../models/orderItemModel");
const ShippingAddress = require("../models/shippingAddressModel");

const createOrder = async (req, res) => {

    try {
        const { addressFormData, cartItems, totalPrice, user } = req?.body
        const addressKeys = Object.keys(addressFormData);


        if (!addressKeys.length) {
            return res.status(404).json({
                status: false,
                error: { message: "Shipping address is required!" }
            })

        }

        const missingField = addressKeys.find((itm) => !addressFormData[itm]);


        if (missingField) {
            return res.status(404).json({
                status: false,
                required: missingField,
                error: { message: "Please enter you complete shipping address!" }
            })
        }

        const createAddress = await ShippingAddress.create({ ...addressFormData, state: addressFormData?.state?.value });
        const items = cartItems?.map((itm) => {
            return {
                product: itm?._id,
                quantity: itm?.quantity
            }
        });

        const orderItem = await OrderItems.create({ products: items });

        if (!createAddress?._id || !orderItem?._id) {
            return res.status(404).json({
                status: false,
                error: { message: "Something missing in order!" }
            })
        }

        const order = await Order.create({
            shipping_address: createAddress?._id,
            user,
            orderItems: orderItem?._id,
            totalPrice
        });



        return res.status(201).json({
            status: true,
            data: {
                order,
            },
            message: "Order placed successfully!"
        })


    } catch (error) {
        return res.status(500).json({
            status: false,
            error: { message: "Something went wrong!" }
        })
    }

}
const getAllOrder = async (req, res) => {
    // console.log("Body :::", req?.body)
}
const getSingleOrder = async (req, res) => {
    // console.log("Body :::", req?.body)
}
const deleteOrder = async (req, res) => {
    // console.log("Body :::", req?.body)
}

module.exports = { createOrder, getAllOrder, getSingleOrder, deleteOrder }
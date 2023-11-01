import Link from 'next/link'
import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increaseCartItemQuantity, decreaseCartItemQuantity, removeFromCart } from "../../redux/slices/cartSlice"

function Cart() {

    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state?.cart?.cartItems);

    const totalPrice = useMemo(() => {
        return cartItems?.reduce((acc, currentItem) => {
            return acc + ((currentItem?.price * 1) * (currentItem?.quantity * 1));
        }, 0);
    }, [cartItems]);


    return (
        <div class="container-fluid">
            <div class="row px-xl-5">
                <div class="col-lg-8 table-responsive mb-5">
                    <table class="table table-light table-borderless table-hover text-center mb-0">
                        <thead class="thead-dark">
                            <tr>
                                <th>Image</th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody class="align-middle">
                            {cartItems?.map((item, ind) => {
                                return (
                                    <tr key={item?.id}>
                                        <td class="align-middle">
                                            <img src={item?.image} alt="" style={{ width: "4rem", height: "4.8rem" }} />
                                        </td>
                                        <td class="align-middle">
                                            {item?.name}
                                        </td>
                                        <td class="align-middle"> {item?.price}</td>
                                        <td class="align-middle">
                                            <div class="input-group quantity mx-auto" style={{ width: "100px" }}>
                                                <div class="input-group-btn">
                                                    <button class="btn btn-sm btn-primary btn-minus" onClick={() => {
                                                        if (item?.quantity > 1) {
                                                            dispatch(decreaseCartItemQuantity(item))
                                                        }
                                                    }}>
                                                        <i class="fa fa-minus"></i>
                                                    </button>
                                                </div>
                                                <input type="text" class="form-control form-control-sm bg-secondary border-0 text-center" value={item?.quantity} />
                                                <div class="input-group-btn">
                                                    <button class="btn btn-sm btn-primary btn-plus" onClick={() => {
                                                        dispatch(increaseCartItemQuantity(item))
                                                    }}>
                                                        <i class="fa fa-plus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="align-middle">AED {(item?.price * 1) * (item?.quantity * 1)}</td>
                                        <td class="align-middle">
                                            <button class="btn btn-sm btn-danger" onClick={() => {
                                                dispatch(removeFromCart(item))
                                            }}><i class="fa fa-times"></i>
                                            </button></td>
                                    </tr>)
                            })}
                        </tbody>
                    </table>
                </div>
                <div class="col-lg-4">
                    {/* <form class="mb-30" action="">
                        <div class="input-group">
                            <input type="text" class="form-control border-0 p-4" placeholder="Coupon Code" />
                            <div class="input-group-append">
                                <button class="btn btn-primary">Apply Coupon</button>
                            </div>
                        </div>
                    </form> */}
                    <h5 class="section-title position-relative text-uppercase mb-3"><span class="bg-secondary pr-3">Cart Summary</span></h5>
                    <div class="bg-light p-30 mb-5">
                        <div class="border-bottom pb-2">
                            <div class="d-flex justify-content-between mb-3">
                                <h6>Subtotal</h6>
                                <h6>AED {totalPrice}</h6>
                            </div>
                            <div class="d-flex justify-content-between">
                                <h6 class="font-weight-medium">Shipping</h6>
                                <h6 class="font-weight-medium">AED 10</h6>
                            </div>
                        </div>
                        <div class="pt-2">
                            <div class="d-flex justify-content-between mt-2">
                                <h5>Total</h5>
                                <h5>AED {totalPrice + 10}</h5>
                            </div>
                            <Link href="/shipping-address" class="btn btn-block btn-primary font-weight-bold my-3 py-3">Proceed To Checkout</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart

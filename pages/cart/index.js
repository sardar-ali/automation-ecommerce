import Link from 'next/link'
import React from 'react'

function Cart() {
    const cartItems =  [
        {
            name:"product name",
            price:"$123.00",
            reviews:99,
            image:"https://cdn.centennialcollege.ca/widencdn/img/centennialcollege/9tzcdepxzy/700x350px/new-parking-gates.jpeg?keep=c&quality=100&u=gxypq6",

        },
        {
            name:"product name",
            price:"$130.00",
            reviews:98,
            image:"https://automaticgatesystems.com.au/wp-content/uploads/2018/01/IMG_6519-e1401375250282-1-1.jpg"
        },
        {
            name:"product name",
            price:"$132.00",
            reviews:102,
            image:"img/moter-1.jpg",
        },
        {
            name:"product name",
            price:"$122.00",
            reviews:102,
            image: "https://www.alamy.com/aggregator-api/download?url=https://c8.alamy.com/comp/HDRKB2/parking-lot-gate-and-entrance-HDRKB2.jpg"
        },
        {
            name:"product name",
            price:"$222.00",
            reviews:102,
            image: "https://tse4.mm.bing.net/th?id=OIP.-x5UO5fFhlbBCeuIIOkwaAHaE4&pid=Api&P=0&h=180"
        },
        {
            name:"product name",
            price:"$111.00",
            reviews:102,
            image: "https://tse4.mm.bing.net/th?id=OIP.pi55WI9XPhvbvZN1TJA75gHaE8&pid=Api&P=0&h=180"
        },
        {
            name:"product name",
            price:"$544.00",
            reviews:102,
            image: "https://tse3.mm.bing.net/th?id=OIP.jRbZoud-eoU5ni7lsTjRKwHaHa&pid=Api&P=0&h=180"
        },
        {
            name:"product name",
            price:"$333.00",
            reviews:102,
            image: "https://tse2.mm.bing.net/th?id=OIP.IArnLLpa-i2sPKHIPxexyAHaDI&pid=Api&P=0&h=180"
        },
        {
            name:"product name",
            price:"$567.00",
            reviews:102,
            image: "https://tse2.mm.bing.net/th?id=OIP.IArnLLpa-i2sPKHIPxexyAHaDI&pid=Api&P=0&h=180"
        },
    ]


    
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
                    {cartItems?.map((item, ind)=>{
                        return(  
                        <tr key={ind}>
                            <td class="align-middle">
                                <img src= {item?.image} alt="" style={{width: "4rem", height:"4.8rem"}} />
                            </td>
                            <td class="align-middle">
                                 {item?.name}
                            </td>
                            <td class="align-middle"> {item?.price}</td>
                            <td class="align-middle">
                                <div class="input-group quantity mx-auto" style={{width: "100px"}}>
                                    <div class="input-group-btn">
                                        <button class="btn btn-sm btn-primary btn-minus" >
                                        <i class="fa fa-minus"></i>
                                        </button>
                                    </div>
                                    <input type="text" class="form-control form-control-sm bg-secondary border-0 text-center" value="1" />
                                    <div class="input-group-btn">
                                        <button class="btn btn-sm btn-primary btn-plus">
                                            <i class="fa fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </td>
                            <td class="align-middle">{item?.price}</td>
                            <td class="align-middle"><button class="btn btn-sm btn-danger"><i class="fa fa-times"></i></button></td>
                        </tr>)
                    })}
                        {/* <tr>
                            <td class="align-middle"><img src="img/product-2.jpg" alt="" style={{width: "50px"}} /> Product Name</td>
                            <td class="align-middle">$150</td>
                            <td class="align-middle">
                                <div class="input-group quantity mx-auto" style={{width: "100px"}}>
                                    <div class="input-group-btn">
                                        <button class="btn btn-sm btn-primary btn-minus" >
                                        <i class="fa fa-minus"></i>
                                        </button>
                                    </div>
                                    <input type="text" class="form-control form-control-sm bg-secondary border-0 text-center" value="1" />
                                    <div class="input-group-btn">
                                        <button class="btn btn-sm btn-primary btn-plus">
                                            <i class="fa fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </td>
                            <td class="align-middle">$150</td>
                            <td class="align-middle"><button class="btn btn-sm btn-danger"><i class="fa fa-times"></i></button></td>
                        </tr>
                        <tr>
                            <td class="align-middle"><img src="img/product-3.jpg" alt="" style={{width: "50px" }}/> Product Name</td>
                            <td class="align-middle">$150</td>
                            <td class="align-middle">
                                <div class="input-group quantity mx-auto" style={{width: "100px"}}>
                                    <div class="input-group-btn">
                                        <button class="btn btn-sm btn-primary btn-minus" >
                                        <i class="fa fa-minus"></i>
                                        </button>
                                    </div>
                                    <input type="text" class="form-control form-control-sm bg-secondary border-0 text-center" value="1" />
                                    <div class="input-group-btn">
                                        <button class="btn btn-sm btn-primary btn-plus">
                                            <i class="fa fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </td>
                            <td class="align-middle">$150</td>
                            <td class="align-middle"><button class="btn btn-sm btn-danger"><i class="fa fa-times"></i></button></td>
                        </tr>
                        <tr>
                            <td class="align-middle"><img src="img/product-4.jpg" alt="" style={{width: "50px"}} /> Product Name</td>
                            <td class="align-middle">$150</td>
                            <td class="align-middle">
                                <div class="input-group quantity mx-auto" style={{width: "100px"}}>
                                    <div class="input-group-btn">
                                        <button class="btn btn-sm btn-primary btn-minus" >
                                        <i class="fa fa-minus"></i>
                                        </button>
                                    </div>
                                    <input type="text" class="form-control form-control-sm bg-secondary border-0 text-center" value="1" />
                                    <div class="input-group-btn">
                                        <button class="btn btn-sm btn-primary btn-plus">
                                            <i class="fa fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </td>
                            <td class="align-middle">$150</td>
                            <td class="align-middle"><button class="btn btn-sm btn-danger"><i class="fa fa-times"></i></button></td>
                        </tr>
                        <tr>
                            <td class="align-middle"><img src="img/product-5.jpg" alt="" style={{width: "50px"}} /> Product Name</td>
                            <td class="align-middle">$150</td>
                            <td class="align-middle">
                                <div class="input-group quantity mx-auto" style={{width: "100px"}}>
                                    <div class="input-group-btn">
                                        <button class="btn btn-sm btn-primary btn-minus" >
                                        <i class="fa fa-minus"></i>
                                        </button>
                                    </div>
                                    <input type="text" class="form-control form-control-sm bg-secondary border-0 text-center" value="1" />
                                    <div class="input-group-btn">
                                        <button class="btn btn-sm btn-primary btn-plus">
                                            <i class="fa fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </td>
                            <td class="align-middle">$150</td>
                            <td class="align-middle"><button class="btn btn-sm btn-danger"><i class="fa fa-times"></i></button></td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
            <div class="col-lg-4">
                <form class="mb-30" action="">
                    <div class="input-group">
                        <input type="text" class="form-control border-0 p-4" placeholder="Coupon Code"/>
                        <div class="input-group-append">
                            <button class="btn btn-primary">Apply Coupon</button>
                        </div>
                    </div>
                </form>
                <h5 class="section-title position-relative text-uppercase mb-3"><span class="bg-secondary pr-3">Cart Summary</span></h5>
                <div class="bg-light p-30 mb-5">
                    <div class="border-bottom pb-2">
                        <div class="d-flex justify-content-between mb-3">
                            <h6>Subtotal</h6>
                            <h6>$150</h6>
                        </div>
                        <div class="d-flex justify-content-between">
                            <h6 class="font-weight-medium">Shipping</h6>
                            <h6 class="font-weight-medium">$10</h6>
                        </div>
                    </div>
                    <div class="pt-2">
                        <div class="d-flex justify-content-between mt-2">
                            <h5>Total</h5>
                            <h5>$160</h5>
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

import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';
import { useRouter } from "next/router";
import { getProduct } from '../../services/api/product';


function Products() {
    const router = useRouter();
    const cart = useSelector((state)=> state?.cart);
    const dispatch = useDispatch();

    const [productList, setProductList] = useState([]);

console.log("cart :::", cart)

    const detailHandler = () => {
        router.push("/product-details/1")
    }

    const products = [
        {
            name: "product name",
            price: "$123.00",
            reviews: 99,
            image: "https://cdn.centennialcollege.ca/widencdn/img/centennialcollege/9tzcdepxzy/700x350px/new-parking-gates.jpeg?keep=c&quality=100&u=gxypq6",

        },
        {
            name: "product name",
            price: "$130.00",
            reviews: 98,
            image: "https://automaticgatesystems.com.au/wp-content/uploads/2018/01/IMG_6519-e1401375250282-1-1.jpg"
        },
        {
            name: "product name",
            price: "$132.00",
            reviews: 102,
            image: "img/moter-1.jpg",
        },
        {
            name: "product name",
            price: "$122.00",
            reviews: 102,
            image: "https://www.alamy.com/aggregator-api/download?url=https://c8.alamy.com/comp/HDRKB2/parking-lot-gate-and-entrance-HDRKB2.jpg"
        },
        {
            name: "product name",
            price: "$222.00",
            reviews: 102,
            image: "https://tse4.mm.bing.net/th?id=OIP.-x5UO5fFhlbBCeuIIOkwaAHaE4&pid=Api&P=0&h=180"
        },
        {
            name: "product name",
            price: "$111.00",
            reviews: 102,
            image: "https://tse4.mm.bing.net/th?id=OIP.pi55WI9XPhvbvZN1TJA75gHaE8&pid=Api&P=0&h=180"
        },
        {
            name: "product name",
            price: "$544.00",
            reviews: 102,
            image: "https://tse3.mm.bing.net/th?id=OIP.jRbZoud-eoU5ni7lsTjRKwHaHa&pid=Api&P=0&h=180"
        },
        {
            name: "product name",
            price: "$333.00",
            reviews: 102,
            image: "https://tse2.mm.bing.net/th?id=OIP.IArnLLpa-i2sPKHIPxexyAHaDI&pid=Api&P=0&h=180"
        },
        {
            name: "product name",
            price: "$567.00",
            reviews: 102,
            image: "https://tse2.mm.bing.net/th?id=OIP.IArnLLpa-i2sPKHIPxexyAHaDI&pid=Api&P=0&h=180"
        },
    ]



    const getProductList = async () => {
        const response = await getProduct();
        if (response?.data?.status) {
            setProductList(response?.data?.data?.product)
        }

    }

    useEffect(() => {
        getProductList()
    }, [])



    const handleAddToCart = (item) => {
        dispatch(addToCart({...item, quantity:1}));
      };


    return (
        <>
            <div className="container-fluid pt-5 pb-3">
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
                    <span className="bg-secondary pr-3">Products</span>
                </h2>
                <div className="row px-xl-5">
                    {products?.map((product, ind) => {
                        return (

                            <div className="col-lg-3 col-md-4 col-sm-6 pb-1" onClick={detailHandler} key={ind}>

                                <div className="product-item bg-light mb-4">
                                    <div className="product-img position-relative overflow-hidden" style={{ position: "relative" }}>
                                        <img
                                            className="img-fluid w-100 main-img"
                                            // style={{height:"15.5rem"}}
                                            src={product?.image}
                                            // src="img/product-1.jpg" 
                                            alt="" />
                                        <div className="product-action">
                                            <a className="btn btn-outline-dark btn-square" onClick={()=> handleAddToCart(product)}>
                                                <i className="fa fa-shopping-cart" />
                                            </a>
                                            <a className="btn btn-outline-dark btn-square" href="">
                                                <i className="far fa-heart" />
                                            </a>
                                            <a className="btn btn-outline-dark btn-square" href="">
                                                <i className="fa fa-sync-alt" />
                                            </a>
                                            <a className="btn btn-outline-dark btn-square" href="">
                                                <i className="fa fa-search" />
                                            </a>
                                        </div>


                                    </div>
                                    <div className="text-center py-4">
                                        <a className="h6 text-decoration-none text-truncate" href="">
                                            {product?.name}
                                        </a>
                                        <div className="d-flex align-items-center justify-content-center mt-2">
                                            <h5>{product?.price}</h5>
                                            <h6 className="text-muted ml-2">
                                                <del>{product?.price}</del>
                                            </h6>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-center mb-1">
                                            <small className="fa fa-star text-primary mr-1" />
                                            <small className="fa fa-star text-primary mr-1" />
                                            <small className="fa fa-star text-primary mr-1" />
                                            <small className="fa fa-star text-primary mr-1" />
                                            <small className="fa fa-star text-primary mr-1" />
                                            <small>{product?.reviews}</small>
                                        </div>

                                        <div style={{  display: "flex", justifyContent: "space-around", alignItem: "baseline", fontSize: "1.5rem"}}>
                                            <i class="fa-solid fa-trash" style={{ color: "red" }}></i>
                                            <i class="fa-solid fa-pen-to-square" style={{  color: "black" }}></i>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        )
                    })}
                    {/* <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden">
                                <img
                                    className="img-fluid w-100 main-img"
                                    // src={}
                                    // src="img/product-2.jpg" 
                                    alt="" />
                                <div className="product-action">
                                    <a className="btn btn-outline-dark btn-square" href="">
                                        <i className="fa fa-shopping-cart" />
                                    </a>
                                    <a className="btn btn-outline-dark btn-square" href="">
                                        <i className="far fa-heart" />
                                    </a>
                                    <a className="btn btn-outline-dark btn-square" href="">
                                        <i className="fa fa-sync-alt" />
                                    </a>
                                    <a className="btn btn-outline-dark btn-square" href="">
                                        <i className="fa fa-search" />
                                    </a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <a className="h6 text-decoration-none text-truncate" href="">
                                    Product Name Goes Here
                                </a>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>$123.00</h5>
                                    <h6 className="text-muted ml-2">
                                        <del>$123.00</del>
                                    </h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    <small className="fa fa-star text-primary mr-1" />
                                    <small className="fa fa-star text-primary mr-1" />
                                    <small className="fa fa-star text-primary mr-1" />
                                    <small className="fa fa-star text-primary mr-1" />
                                    <small className="fa fa-star-half-alt text-primary mr-1" />
                                    <small>(99)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden">
                                <img
                                    className="img-fluid w-100 main-img"
                                    // src="img/product-3.jpg" 
                                    // src={}
                                    alt="" />
                                <div className="product-action">
                                    <a className="btn btn-outline-dark btn-square" href="">
                                        <i className="fa fa-shopping-cart" />
                                    </a>
                                    <a className="btn btn-outline-dark btn-square" href="">
                                        <i className="far fa-heart" />
                                    </a>
                                    <a className="btn btn-outline-dark btn-square" href="">
                                        <i className="fa fa-sync-alt" />
                                    </a>
                                    <a className="btn btn-outline-dark btn-square" href="">
                                        <i className="fa fa-search" />
                                    </a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <a className="h6 text-decoration-none text-truncate" href="">
                                    Product Name Goes Here
                                </a>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>$123.00</h5>
                                    <h6 className="text-muted ml-2">
                                        <del>$123.00</del>
                                    </h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    <small className="fa fa-star text-primary mr-1" />
                                    <small className="fa fa-star text-primary mr-1" />
                                    <small className="fa fa-star text-primary mr-1" />
                                    <small className="fa fa-star-half-alt text-primary mr-1" />
                                    <small className="far fa-star text-primary mr-1" />
                                    <small>(99)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden">
                                <img
                                    className="img-fluid w-100 main-img"
                                    // src={}
                                    // src="img/product-4.jpg" 
                                    alt="" />
                                <div className="product-action">
                                    <a className="btn btn-outline-dark btn-square" href="">
                                        <i className="fa fa-shopping-cart" />
                                    </a>
                                    <a className="btn btn-outline-dark btn-square" href="">
                                        <i className="far fa-heart" />
                                    </a>
                                    <a className="btn btn-outline-dark btn-square" href="">
                                        <i className="fa fa-sync-alt" />
                                    </a>
                                    <a className="btn btn-outline-dark btn-square" href="">
                                        <i className="fa fa-search" />
                                    </a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <a className="h6 text-decoration-none text-truncate" href="">
                                    Product Name Goes Here
                                </a>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>$123.00</h5>
                                    <h6 className="text-muted ml-2">
                                        <del>$123.00</del>
                                    </h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    <small className="fa fa-star text-primary mr-1" />
                                    <small className="fa fa-star text-primary mr-1" />
                                    <small className="fa fa-star text-primary mr-1" />
                                    <small className="far fa-star text-primary mr-1" />
                                    <small className="far fa-star text-primary mr-1" />
                                    <small>(99)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden">
                                <img 
                                className="img-fluid w-100 main-img"
                                // src="https://tse4.mm.bing.net/th?id=OIP.-x5UO5fFhlbBCeuIIOkwaAHaE4&pid=Api&P=0&h=180"
                                //  src="img/product-5.jpg" 
                                 alt=""
                                  />
                                <div className="product-action">
                                    <a className="btn btn-outline-dark btn-square" href="">
                                        <i className="fa fa-shopping-cart" />
                                    </a>
                                    <a className="btn btn-outline-dark btn-square" href="">
                                        <i className="far fa-heart" />
                                    </a>
                                    <a className="btn btn-outline-dark btn-square" href="">
                                        <i className="fa fa-sync-alt" />
                                    </a>
                                    <a className="btn btn-outline-dark btn-square" href="">
                                        <i className="fa fa-search" />
                                    </a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <a className="h6 text-decoration-none text-truncate" href="">
                                    Product Name Goes Here
                                </a>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>$123.00</h5>
                                    <h6 className="text-muted ml-2">
                                        <del>$123.00</del>
                                    </h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    <small className="fa fa-star text-primary mr-1" />
                                    <small className="fa fa-star text-primary mr-1" />
                                    <small className="fa fa-star text-primary mr-1" />
                                    <small className="fa fa-star text-primary mr-1" />
                                    <small className="fa fa-star text-primary mr-1" />
                                    <small>(99)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden">
                                <img 
                                className="img-fluid w-100 main-img"
                                // src=
                                //  src="img/product-6.jpg"
                                 alt=""
                                 />
                                <div className="product-action">
                                    <a className="btn btn-outline-dark btn-square" href="">
                                        <i className="fa fa-shopping-cart" />
                                    </a>
                                    <a className="btn btn-outline-dark btn-square" href="">
                                        <i className="far fa-heart" />
                                    </a>
                                    <a className="btn btn-outline-dark btn-square" href="">
                                        <i className="fa fa-sync-alt" />
                                    </a>
                                    <a className="btn btn-outline-dark btn-square" href="">
                                        <i className="fa fa-search" />
                                    </a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <a className="h6 text-decoration-none text-truncate" href="">
                                    Product Name Goes Here
                                </a>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>$123.00</h5>
                                    <h6 className="text-muted ml-2">
                                        <del>$123.00</del>
                                    </h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    <small className="fa fa-star text-primary mr-1" />
                                    <small className="fa fa-star text-primary mr-1" />
                                    <small className="fa fa-star text-primary mr-1" />
                                    <small className="fa fa-star text-primary mr-1" />
                                    <small className="fa fa-star-half-alt text-primary mr-1" />
                                    <small>(99)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden">
                                <img 
                                className="img-fluid w-100 main-img"
                                // src={}
                                //  src="img/product-7.jpg" 
                                alt=""
                                 />
                                <div className="product-action">
                                    <a className="btn btn-outline-dark btn-square" href="">
                                        <i className="fa fa-shopping-cart" />
                                    </a>
                                    <a className="btn btn-outline-dark btn-square" href="">
                                        <i className="far fa-heart" />
                                    </a>
                                    <a className="btn btn-outline-dark btn-square" href="">
                                        <i className="fa fa-sync-alt" />
                                    </a>
                                    <a className="btn btn-outline-dark btn-square" href="">
                                        <i className="fa fa-search" />
                                    </a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <a className="h6 text-decoration-none text-truncate" href="">
                                    Product Name Goes Here
                                </a>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>$123.00</h5>
                                    <h6 className="text-muted ml-2">
                                        <del>$123.00</del>
                                    </h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    <small className="fa fa-star text-primary mr-1" />
                                    <small className="fa fa-star text-primary mr-1" />
                                    <small className="fa fa-star text-primary mr-1" />
                                    <small className="fa fa-star-half-alt text-primary mr-1" />
                                    <small className="far fa-star text-primary mr-1" />
                                    <small>(99)</small>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden">
                                <img 
                                className="img-fluid w-100 main-img"
                                // src={}
                                 alt=""
                                 />
                                <div className="product-action">
                                    <a className="btn btn-outline-dark btn-square" href="">
                                        <i className="fa fa-shopping-cart" />
                                    </a>
                                    <a className="btn btn-outline-dark btn-square" href="">
                                        <i className="far fa-heart" />
                                    </a>
                                    <a className="btn btn-outline-dark btn-square" href="">
                                        <i className="fa fa-sync-alt" />
                                    </a>
                                    <a className="btn btn-outline-dark btn-square" href="">
                                        <i className="fa fa-search" />
                                    </a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <a className="h6 text-decoration-none text-truncate" href="">
                                    Product Name Goes Here
                                </a>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>$123.00</h5>
                                    <h6 className="text-muted ml-2">
                                        <del>$123.00</del>
                                    </h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    <small className="fa fa-star text-primary mr-1" />
                                    <small className="fa fa-star text-primary mr-1" />
                                    <small className="fa fa-star text-primary mr-1" />
                                    <small className="far fa-star text-primary mr-1" />
                                    <small className="far fa-star text-primary mr-1" />
                                    <small>(99)</small>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Products

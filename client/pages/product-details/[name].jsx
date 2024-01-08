import React, { useEffect, useState } from 'react'
import Head from 'next/head'

import { useRouter } from 'next/router';
import { increaseCartItemQuantity, decreaseCartItemQuantity, removeFromCart, addToCart } from "../../redux/slices/cartSlice"
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct, getProduct } from "../../services/api/product/index"
import WhatsappButton from "../../components/whatsappButton";

function ProductDetails({ productData, relatedProducts }) {

    const dispatch = useDispatch()
    const router = useRouter();
    const [product, setProduct] = useState({})
    const [productList, setProductList] = useState([])
    const { id } = router.query;

    const productImages = [
        "https://tse2.mm.bing.net/th?id=OIP.IArnLLpa-i2sPKHIPxexyAHaDI&pid=Api&P=0&h=180",
        "https://tse3.mm.bing.net/th?id=OIP.jRbZoud-eoU5ni7lsTjRKwHaHa&pid=Api&P=0&h=180",
        "https://tse3.mm.bing.net/th?id=OIP.jRbZoud-eoU5ni7lsTjRKwHaHa&pid=Api&P=0&h=180",
        "https://tse3.mm.bing.net/th?id=OIP.jRbZoud-eoU5ni7lsTjRKwHaHa&pid=Api&P=0&h=180",
        "https://tse2.mm.bing.net/th?id=OIP.IArnLLpa-i2sPKHIPxexyAHaDI&pid=Api&P=0&h=180",
    ]

    // const getproduct = async (id) => {
    //     const response = await getSingleProduct(id);
    //     if (response?.data?.status) {
    //         setProduct(response?.data?.data?.product)
    //         setProductList(response?.data?.data?.relatedProducts)
    //     }
    // }

    // useEffect(() => {
    //     if (id) {
    //         getproduct(id)
    //     }
    // }, [id]);

    const handleAddToCart = (item) => {
        dispatch(addToCart({ ...item, quantity: 1 }));
    };


    const detailHandler = (name) => {
        router.push(`/product-details/${name}`)
    }

    return (
        <>
            <Head>
                <title>{productData?.name}</title>
                <meta charSet="utf-8" />
                <meta content="width=device-width, initial-scale=1.0" name="viewport" />

                <meta
                    name="keywords"
                    content={productData?.short_description}
                />
                <meta name="description" content={productData?.full_description} />
                <link href={productData?.image} rel="icon" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
                    rel="stylesheet"
                />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.css"></link>
                <link href="lib/animate/animate.min.css" rel="stylesheet" />
                <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
                <link href="css/style.css" rel="stylesheet" />
            </Head>
            <div>
                <div className="container-fluid pb-5">
                    <div className="row px-xl-5">

                        <div className="col-lg-5 mb-30">
                            <div id="product-carousel" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner bg-light">
                                    <div className="carousel-item active">
                                        <img className="img-fluid w-100 product-detail-img " src={productData?.image ? productData?.image : product?.image} alt="" />
                                    </div>
                                    {productImages?.map((url, ind) => {
                                        return (
                                            <div className="carousel-item" key={ind}>
                                                <img className="img-fluid w-100 product-detail-img " src={url} alt="" />
                                            </div>
                                        )
                                    })}
                                </div>
                                <a className="carousel-control-prev" href="#product-carousel" data-slide="prev">
                                    <i className="fa fa-2x fa-angle-left text-dark"></i>
                                </a>
                                <a className="carousel-control-next" href="#product-carousel" data-slide="next">
                                    <i className="fa fa-2x fa-angle-right text-dark"></i>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-7 h-auto mb-30">
                            <div className="h-100 bg-light p-30">
                                <h3>{productData?.name ? productData?.name : product?.name}</h3>
                                <div className="d-flex mb-3">
                                    <div className="text-primary mr-2">
                                        <small className="fas fa-star"></small>
                                        <small className="fas fa-star"></small>
                                        <small className="fas fa-star"></small>
                                        <small className="fas fa-star-half-alt"></small>
                                        <small className="far fa-star"></small>
                                    </div>
                                    <small className="pt-1">(99 Reviews)</small>
                                </div>
                                <h3 className="font-weight-semi-bold mb-4">{productData?.price ? productData?.price : product?.price}</h3>
                                <p className="mb-4">{productData?.short_description ? productData?.short_description : product?.short_description}</p>

                                <div className="d-flex align-items-center mb-4 pt-2">

                                    <button className="btn btn-primary px-3" onClick={() => handleAddToCart(product)} ><i className="fa fa-shopping-cart mr-1"></i> Add To
                                        Cart</button>
                                </div>
                                <div className="d-flex pt-2">

                                    <WhatsappButton text={"Quick Shopping Click"} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row px-xl-5">
                        <div className="col">
                            <div className="bg-light p-30">
                                <div className="nav nav-tabs mb-4">
                                    <a className="nav-item nav-link text-dark active" data-toggle="tab" href="#tab-pane-1">Description</a>
                                    <a className="nav-item nav-link text-dark" data-toggle="tab" href="#tab-pane-2">Specifications</a>
                                </div>
                                <div className="tab-content">
                                    <div className="tab-pane fade show active" id="tab-pane-1">
                                        <h4 className="mb-3">Product Description</h4>
                                        <p>{productData?.short_description ? productData?.short_description : productData?.short_description}</p>
                                    </div>
                                    <div className="tab-pane fade" id="tab-pane-2">
                                        <h4 className="mb-3">Specifications</h4>
                                        <p>{productData?.full_description.split(".").map((dt) => {
                                            return (
                                                <li>
                                                    {dt}
                                                </li>
                                            )
                                        })}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid pt-5 pb-3">
                    <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
                        <span className="bg-secondary pr-3">Related Products</span>
                    </h2>
                    <div className="row px-xl-5">
                        {relatedProducts?.filter((itm) => itm?._id !== productData?._id)?.map((product, ind) => {
                            return (

                                <div className="col-lg-3 col-md-4 col-sm-6 pb-1" key={ind}>

                                    <div className="product-item bg-light mb-4">
                                        <div className="product-img position-relative overflow-hidden" style={{ position: "relative" }}>
                                            <img
                                                className="img-fluid w-100 main-img"
                                                src={product?.image}
                                                alt="" />
                                            <div className="product-action">
                                                <p className="btn btn-outline-dark btn-square" onClick={() => handleAddToCart(product)}>
                                                    <i className="fa fa-shopping-cart" />
                                                </p>
                                            </div>


                                        </div>
                                        <div className="text-center py-4">
                                            <div className=" cursor-pointer" onClick={() => detailHandler(product?.name?.toLowerCase().replaceAll(" ", "-"))}>
                                                <p className="h6 text-decoration-none text-truncate cursor-pointer">
                                                    {product?.name}
                                                </p>
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
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            )
                        })}

                    </div>
                </div>
            </div>

            <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
            <script src="lib/easing/easing.min.js"></script>
            <script src="lib/owlcarousel/owl.carousel.min.js"></script>

            <script src="mail/jqBootstrapValidation.min.js"></script>
            <script src="mail/contact.js"></script>

            <script src="js/main.js"></script>
        </>
    )
}


export async function getStaticPaths() {
    // Fetch product slugs at build time
    const response = await getProduct();

    let paths = [];
    if (response?.data?.status) {
        paths = response?.data?.data?.product?.map((itm) => {
            const name = itm?.name?.toLowerCase().replaceAll(" ", "-");

            return {
                params: { name },
            };
        })
    }

    // Return the paths and indicate that other paths should 404
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    // Fetch product data based on the dynamic route parameter (slug)
    const response = await getSingleProduct(params.name);

    return {
        props: {
            productData: response?.data?.data?.product ? response?.data?.data?.product : null,
            relatedProducts: response?.data?.data?.relatedProducts ? response?.data?.data?.relatedProducts : [],
        },
        revalidate: 1,
    };
}







export default ProductDetails

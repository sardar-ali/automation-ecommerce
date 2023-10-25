import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { increaseCartItemQuantity, decreaseCartItemQuantity, removeFromCart, addToCart } from "../../redux/slices/cartSlice"
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct } from "../../services/api/product/index"
import WhatsappButton from "../../components/whatsappButton";

function ProductDetails() {
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

    const getproduct = async (id) => {
        const response = await getSingleProduct(id);
        if (response?.data?.status) {
            setProduct(response?.data?.data?.product)
            console.log("responsessssss", response?.data?.data)
            setProductList(response?.data?.data?.relatedProducts)
        }
    }
    
    useEffect(() => {
        getproduct(id)
    }, [id]);

    const handleAddToCart = (item) => {
        dispatch(addToCart({ ...item, quantity: 1 }));
    };


    return (
        <div>
            <div className="container-fluid pb-5">
                <div className="row px-xl-5">

                    <div className="col-lg-5 mb-30">
                        <div id="product-carousel" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner bg-light">
                                <div className="carousel-item active">
                                    <img className="img-fluid w-100 product-detail-img " src={product?.image} alt="" />
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
                            <h3>{product?.name}</h3>
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
                            <h3 className="font-weight-semi-bold mb-4">{product?.price}</h3>
                            <p className="mb-4">{product?.short_description}</p>
                            {/* <div className="d-flex mb-3">
                            <strong className="text-dark mr-3">Sizes:</strong>
                            <form>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" className="custom-control-input" id="size-1" name="size" />
                                    <label className="custom-control-label" for="size-1">XS</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" className="custom-control-input" id="size-2" name="size" />
                                    <label className="custom-control-label" for="size-2">S</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" className="custom-control-input" id="size-3" name="size" />
                                    <label className="custom-control-label" for="size-3">M</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" className="custom-control-input" id="size-4" name="size" />
                                    <label className="custom-control-label" for="size-4">L</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" className="custom-control-input" id="size-5" name="size" />
                                    <label className="custom-control-label" for="size-5">XL</label>
                                </div>
                            </form>
                        </div> */}
                            {/* <div className="d-flex mb-4">
                            <strong className="text-dark mr-3">Colors:</strong>
                            <form>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" className="custom-control-input" id="color-1" name="color" />
                                    <label className="custom-control-label" for="color-1">Black</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" className="custom-control-input" id="color-2" name="color" />
                                    <label className="custom-control-label" for="color-2">White</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" className="custom-control-input" id="color-3" name="color" />
                                    <label className="custom-control-label" for="color-3">Red</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" className="custom-control-input" id="color-4" name="color" />
                                    <label className="custom-control-label" for="color-4">Blue</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" className="custom-control-input" id="color-5" name="color" />
                                    <label className="custom-control-label" for="color-5">Green</label>
                                </div>
                            </form>
                        </div> */}
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
                                <a className="nav-item nav-link text-dark" data-toggle="tab" href="#tab-pane-2">Information</a>
                            </div>
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="tab-pane-1">
                                    <h4 className="mb-3">vProduct Description</h4>
                                    <p>{product?.short_description}</p>
                                </div>
                                <div className="tab-pane fade" id="tab-pane-2">
                                    <h4 className="mb-3">Additional Information</h4>
                                    <p>{product?.full_description}</p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item px-0">
                                                    Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                                                </li>
                                                <li className="list-group-item px-0">
                                                    Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                                                </li>
                                                <li className="list-group-item px-0">
                                                    Duo amet accusam eirmod nonumy stet et et stet eirmod.
                                                </li>
                                                <li className="list-group-item px-0">
                                                    Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item px-0">
                                                    Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                                                </li>
                                                <li className="list-group-item px-0">
                                                    Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                                                </li>
                                                <li className="list-group-item px-0">
                                                    Duo amet accusam eirmod nonumy stet et et stet eirmod.
                                                </li>
                                                <li className="list-group-item px-0">
                                                    Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
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
                    {productList?.filter((itm)=> itm?._id !== product?._id)?.map((product, ind) => {
                        return (

                            <div className="col-lg-3 col-md-4 col-sm-6 pb-1" key={ind}>

                                <div className="product-item bg-light mb-4">
                                    <div className="product-img position-relative overflow-hidden" style={{ position: "relative" }}>
                                        <img
                                            className="img-fluid w-100 main-img"
                                            src={product?.image}
                                            alt="" />
                                        <div className="product-action">
                                            <a className="btn btn-outline-dark btn-square" onClick={() => handleAddToCart(product)}>
                                                <i className="fa fa-shopping-cart" />
                                            </a>
                                        </div>


                                    </div>
                                    <div className="text-center py-4">
                                        <div className=" cursor-pointer" onClick={() => detailHandler(product?._id)}>
                                            <a className="h6 text-decoration-none text-truncate cursor-pointer">
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
                                        </div>
                                    </div>

                                </div>
                            </div>

                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default ProductDetails

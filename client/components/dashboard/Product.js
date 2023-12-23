import React from 'react'
import Head from 'next/head'

function Product({ product, admin, deleteProductHandler, editProductHandler, handleAddToCart, detailHandler }) {
    return (
        <>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1" key={product?._id}>
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
                        <div className=" cursor-pointer" onClick={() => detailHandler(product?._id)}>
                            <p className="h6 text-decoration-none text-truncate cursor-pointer">
                                {product?.name}
                            </p>
                            <div className="d-flex align-items-center justify-content-center mt-2">
                                <h5> AED{(product?.price) - (10)}</h5>
                                <h6 className="text-muted ml-2">
                                    <del>AED{product?.price}</del>
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
                        {admin ? <div style={{ display: "flex", justifyContent: "space-around", alignItem: "baseline", fontSize: "1.5rem" }}>
                            <i class="fa-solid fa-trash cursor-pointer" style={{ color: "red" }} onClick={() => deleteProductHandler(product?._id)}></i>
                            <i class="fa-solid fa-pen-to-square cursor-pointer" style={{ color: "black" }} onClick={() => editProductHandler(product?._id)}></i>
                        </div> : ""}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Product
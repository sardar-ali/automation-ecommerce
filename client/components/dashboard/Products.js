import React, { useState, useEffect } from 'react'
import Head from 'next/head'

import { toast } from 'react-toastify';

import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';
import { getProducts, removeProduct } from '../../redux/slices/productSlice';
import { useRouter } from "next/router";
import { getProduct, getAllProductOfSpecificCategory, deleteProduct, updateProduct } from '../../services/api/product';
import Product from './Product';


function Products({ isCategory, productsData }) {
    const router = useRouter();
    const searchText = useSelector((state) => state?.product?.searchText);

    const dispatch = useDispatch();

    const { id } = router.query;
    let token;
    let admin;

    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
        // Now you can safely use localStorage
        token = localStorage.getItem('token')
        admin = JSON.parse(localStorage.getItem('isOwner'))
    }



    const detailHandler = (name) => {
        router.push(`/product-details/${name}`)
    }



    const handleAddToCart = (item) => {
        dispatch(addToCart({ ...item, quantity: 1 }));
    };


    const deleteProductHandler = async (id) => {
        const response = await deleteProduct(id, token)
        if (response?.data?.status) {
            toast.success(response?.data?.message);
            dispatch(removeProduct(id))
        }
    }


    const editProductHandler = async (id, name) => {
        router.push(`/create-product?isEdit=true&&id=${id}&&name=${name}`)
    }


    return (
        <>
            {/* <Head>
                <meta charSet="utf-8" />
                <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                <meta
                    name="keywords"
                    content="swing gate motor, sliding gates motor, gate barriers, remote control, parking gates, garage door, gate automation, automatic gate, parking gate barrier"
                />
                <meta
                    name="description"
                    content="We provide comprehensive Maintenance and Installations Services for Automatic Doors, Swing Gate Motors, Sliding Gate Motors, Gate Barriers, Remote Controls, Parking Gates, Garage Doors, Gate Automation, and Automated Gate Systems, Revolving Doors, Gate Operators, Garage Doors, Sectional Overhead Garage Doors, Traffic Barriers, Security Bollards and Parking Management Systems at Villas, Commercial & Residence Buildings, Super Markets, Hotels and Hospitals. The scope of service shall include preventive, curative and emergency maintenance services"
                     key="desc"
                />
                <link href="img/favicon.ico" rel="icon" />
                <title>{productsData?.length ? productsData[0]?.category?.name : "Gate Barriers"}</title>
            </Head> */}
            <div className="container-fluid pt-5 pb-3">
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
                    <span className="bg-secondary pr-3">{router?.query?.id ? productsData[0]?.category?.name : ""}Products</span>
                </h2>
                <div className="row px-xl-5">
                    {productsData?.filter((itm) => {
                        if (searchText) {

                            if (itm?.name?.toLowerCase()?.includes(searchText?.toLowerCase()) || itm?.category?.name.toLowerCase()?.includes(searchText?.toLowerCase())) {
                                return true;
                            } else {
                                return false;
                            }
                        }
                        return true
                    })?.map((product, ind) => {
                        return (
                            <Product
                                product={product}
                                admin={admin}
                                deleteProductHandler={deleteProductHandler}
                                editProductHandler={editProductHandler}
                                handleAddToCart={handleAddToCart}
                                detailHandler={detailHandler}
                            />
                        )
                    })}

                </div>
            </div>
        </>
    )
}

export default Products

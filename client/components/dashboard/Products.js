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
    // const cart = useSelector((state) => state?.cart?.cartItems);
    // const productList = useSelector((state) => state?.product?.products);
    const searchText = useSelector((state) => state?.product?.searchText);

    const dispatch = useDispatch();

    // const [productLists, setProductList] = useState([]);

    const { id } = router.query;
    let token;
    let admin;

    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
        // Now you can safely use localStorage
        token = localStorage.getItem('token')
        admin = JSON.parse(localStorage.getItem('isOwner'))
    }



    const detailHandler = (id) => {
        router.push(`/product-details/${id}`)
    }

    // const products = [
    //     {
    //         id: 1,
    //         name: "product name",
    //         price: "123.00",
    //         reviews: 99,
    //         image: "https://cdn.centennialcollege.ca/widencdn/img/centennialcollege/9tzcdepxzy/700x350px/new-parking-gates.jpeg?keep=c&quality=100&u=gxypq6",

    //     },
    //     {
    //         id: 2,
    //         name: "product name",
    //         price: "130.00",
    //         reviews: 98,
    //         image: "https://automaticgatesystems.com.au/wp-content/uploads/2018/01/IMG_6519-e1401375250282-1-1.jpg"
    //     },
    //     {
    //         id: 3,
    //         name: "product name",
    //         price: "132.00",
    //         reviews: 102,
    //         image: "img/moter-1.jpg",
    //     },
    //     {
    //         id: 4,
    //         name: "product name",
    //         price: "122.00",
    //         reviews: 102,
    //         image: "https://www.alamy.com/aggregator-api/download?url=https://c8.alamy.com/comp/HDRKB2/parking-lot-gate-and-entrance-HDRKB2.jpg"
    //     },
    //     {
    //         id: 5,
    //         name: "product name",
    //         price: "222.00",
    //         reviews: 102,
    //         image: "https://tse4.mm.bing.net/th?id=OIP.-x5UO5fFhlbBCeuIIOkwaAHaE4&pid=Api&P=0&h=180"
    //     },
    //     {
    //         id: 6,
    //         name: "product name",
    //         price: "111.00",
    //         reviews: 102,
    //         image: "https://tse4.mm.bing.net/th?id=OIP.pi55WI9XPhvbvZN1TJA75gHaE8&pid=Api&P=0&h=180"
    //     },
    //     {
    //         id: 7,
    //         name: "product name",
    //         price: "544.00",
    //         reviews: 102,
    //         image: "https://tse3.mm.bing.net/th?id=OIP.jRbZoud-eoU5ni7lsTjRKwHaHa&pid=Api&P=0&h=180"
    //     },
    //     {
    //         id: 8,
    //         name: "product name",
    //         price: "333.00",
    //         reviews: 102,
    //         image: "https://tse2.mm.bing.net/th?id=OIP.IArnLLpa-i2sPKHIPxexyAHaDI&pid=Api&P=0&h=180"
    //     },
    //     {
    //         id: 9,
    //         name: "product name",
    //         price: "567.00",
    //         reviews: 102,
    //         image: "https://tse2.mm.bing.net/th?id=OIP.IArnLLpa-i2sPKHIPxexyAHaDI&pid=Api&P=0&h=180"
    //     },
    // ]



    const getProductList = async () => {
        // const response = await getProduct();

        // if (response?.data?.status) {
        //     setProductList(response?.data?.data?.product)
        //     dispatch(getProducts(response?.data?.data?.product))
        // }

        // if (productsData?.length) {
        //     dispatch(getProducts(productsData))
        // }
    }

    // const getProductBySelectedCategory = async (categoryId) => {
    //     const response = await getAllProductOfSpecificCategory(categoryId);
    //     if (response?.data?.status) {
    //         setProductList(response?.data?.data?.products)
    //         dispatch(getProducts(response?.data?.data?.products))
    //     }

    // }


    // useEffect(() => {
    //     if (isCategory && categoryId) {
    //         getProductBySelectedCategory(categoryId)
    //     }
    //     // else {
    //     //     getProductList()
    //     // }
    // }, [isCategory])

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


    const editProductHandler = async (id) => {
        router.push(`/create-product?isEdit=true&&id=${id}`)
    }


    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta content="width=device-width, initial-scale=1.0" name="viewport" />

                <meta
                    name="keywords"
                    content="swing gate motor, sliding gates motor, gate barriers, remote control, parking gates, garage door, gate automation, automatic gate, parking gate barrier"
                />
                <meta
                    name="description"
                    content="Discover convenience and security with our comprehensive range of services at [Your Ecommerce Website]. From seamless installations of Swing Gate Motors, Sliding Gate Motors, Gate Barriers, Remote Controls, and Parking Gates to expert maintenance of Garage Doors, Gate Automation, and Automated Gate Systems, we ensure your peace of mind. Elevate your property's accessibility and safety with our specialized solutions and dedicated maintenance services, creating a seamless and secure environment for your convenience"
                    key="desc"
                />

                <link href="img/favicon.ico" rel="icon" />
                <title>{productsData?.length ? productsData[0]?.category?.name : "Gate Barriers"}</title>
            </Head>
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

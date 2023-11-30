import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Carousel from "../components/dashboard/Carousel.js"
import Categories from "../components/dashboard/Categories.js"
import Products from "../components/dashboard/Products.js"
import { getProducts } from '../redux/slices/productSlice';
import { getCategories } from '../redux/slices/categorySlice';
import { getProduct } from '../services/api/product';
import { getCategory } from '../services/api/category'

function Home({ productsData, categoryData }) {
    
    const dispatch = useDispatch();
    const productList = useSelector((state) => state?.product?.products);
    const categories = useSelector((state) => state?.category?.categories);

    if (productsData?.length && !productList?.length) {
        dispatch(getProducts(productsData))
    }

    if (categoryData?.length && !categories.length) {
        dispatch(getCategories(categoryData))
    }


    const user = useSelector((state) => state.user);


    return (

        <>
            <>
                {/* Carousel Start */}
                <Carousel />
                {/* Categories Start */}
                <Categories categoryData={categoryData} />
                {/* Categories End */}
                {/* Products Start */}
                <Products isCategory={false} productsData={productsData} />
                {/* Products ends */}
            </>
        </>
    )
}


export async function getServerSideProps() {

    const response = await getProduct();
    const result = await getCategory();
    let productsData = [];
    let categoryData = [];

    if (result?.data?.status) {
        categoryData = result?.data?.data?.categories
    }

    if (response?.data?.status) {
        productsData = response?.data?.data?.product
    }



    // Pass the product data to the page component as a prop
    return {
        props: {
            productsData,
            categoryData
        },
    };
}


export default Home


// access_token =   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
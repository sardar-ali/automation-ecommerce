import React from 'react'
import Products from "../../components/dashboard/Products";
import { getAllProductByCategoryName } from '../../services/api/product';
import { getCategory } from '../../services/api/category';
import { useRouter } from 'next/router';

function ProductLisBySelectedCategory({ productsData }) {
    const router = useRouter();

    return (
        <>
            <Products
                isCategory={true}
                productsData={productsData}
            />
        </>
    )
}


export async function getStaticPaths() {
    // Fetch category slugs at build time
    const result = await getCategory();
    console.log("result category list ::: ", result?.data?.data?.categories)
    let paths = [];
    if (result?.data?.status) {
        paths = result?.data?.data?.categories?.map((itm) => {
            return {
                params: { name: `${itm?.name}` },
            };
        })
    }

    console.log("pathssss sss  name:::", paths)

    // Return the paths and indicate that other paths should 404
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    console.log(" category params  name:::", params)
    // Fetch product data based on the dynamic route parameter (slug)
    const response = await getAllProductByCategoryName(params?.name);
    console.log("response sss name :::", response?.data)

    let productsData = []
    if (response?.data?.status) {
        productsData = response?.data?.data?.products
    }

    return {
        props: {
            productsData: productsData,
        },
        revalidate: 10,
    };
}







export default ProductLisBySelectedCategory
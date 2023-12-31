import React from 'react'
import { getAllProductByCategoryName } from '../../services/api/product';
import { getCategory } from '../../services/api/category';
import Products from '../../components/dashboard/Products';

function CategoryScreen({ productsData }) {
    console.log("productsData :::", productsData)
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
    let paths = [];
    if (result?.data?.status) {
        paths = result?.data?.data?.categories?.map((itm) => {
            const name = itm?.name?.toLowerCase().split(" ").join("-");
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
    const response = await getAllProductByCategoryName(params?.name);

    console.log("response of category :::", response?.data)

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



export default CategoryScreen
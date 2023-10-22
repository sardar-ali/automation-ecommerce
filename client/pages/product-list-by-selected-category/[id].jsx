import React from 'react'
import Products from "../../components/dashboard/Products";
import { useRouter } from 'next/router';

function ProductLisBySelectedCategory() {
    const router = useRouter();
    const { id } = router.query; 
console.log("categoryId ::", id)
    return (
        <>
            <Products isCategory={true} categoryId = {id} />
        </>
    )
}

export default ProductLisBySelectedCategory
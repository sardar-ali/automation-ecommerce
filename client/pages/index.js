import React, { useEffect } from 'react'
import Head from 'next/head'

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

    useEffect(() => {
        if (categoryData?.length) {
            dispatch(getCategories(categoryData))
        }
    }, [])

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
                    name="description" content="Discover the ultimate remote control automation system for gates and barriers. Explore top-notch solutions to streamline access control with efficiency"
                />

                <link href="https://images.search.yahoo.com/images/view;_ylt=Awriiu6pSoVl5jgHXLiJzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzk4MTYyYmJmNzVmN2MxN2JkNzQzMWQxODUzZjAzMTdjBGdwb3MDMzMEaXQDYmluZw--?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dsliding%2Bgate%252C%2Bgate%2Bbarrier%252C%2Bremote%2Bcontrol%252C%2Bswing%2Bgate%2Bin%2Bpicture%26ei%3DUTF-8%26type%3DE210US91215G0%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26tab%3Dorganic%26ri%3D33&w=1120&h=539&imgurl=www.chinaautogate.com%2Fphoto%2Fpl3249519-wireless_remote_control_automatic_boom_gates_fence_arm_barrier.jpg&rurl=http%3A%2F%2Fwww.chinaautogate.com%2Fsale-2725546-wireless-remote-control-automatic-boom-gates-fence-arm-barrier.html&size=98.5KB&p=sliding+gate%2C+gate+barrier%2C+remote+control%2C+swing+gate+in+picture&oid=98162bbf75f7c17bd7431d1853f0317c&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=mcafee&tt=Wireless+Remote+Control+Automatic+Boom+Gates+Fence+Arm+Barrier&b=0&ni=140&no=33&ts=&tab=organic&sigr=08hL4rmBfnW6&sigb=kMuqRNye6ekT&sigi=gdOWgaBDpBGA&sigt=hDjsyTYZUoMT&.crumb=mL1hVfn8LnJ&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&type=E210US91215G0" rel="icon" />
                <title>Gate and Barriers: Best Remote control Automation system</title>
                <meta name="google-site-verification" content="uWZTQAyJxacAnSo8GRbkG68M9AqiCccSfa0Qk1Dyr8g" />
                {/* <!-- Google tag (gtag.js) --> */}
                {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-TY6NJFCN4J"></script>
                    <script>
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments)}
                        gtag('js', new Date());

                        gtag('config', 'G-TY6NJFCN4J');
                    </script> */}
            </Head>
            {/* Carousel Start */}
            <Carousel />
            {/* Categories Start */}
            <Categories categoryData={categoryData} />
            {/* Categories End */}
            {/* Products Start */}
            <Products isCategory={false} productsData={productsData} />
            {/* Products ends */}
        </>
    )
}


export async function getServerSideProps() {

    const response = await getProduct();
    const result = await getCategory();
    let productsData = [];
    let categoryData = [];
    console.log("result :::", result)
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
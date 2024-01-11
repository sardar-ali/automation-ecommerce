import React from 'react'
import { getAllProductByCategoryName } from '../../services/api/product';
import { getCategory } from '../../services/api/category';
import Products from '../../components/dashboard/Products';
import Head from 'next/head'

function CategoryScreen({ productsData }) {



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
                    content={productsData[0]?.category?.meta_description ? productsData[0]?.category?.meta_description : "We provide comprehensive Maintenance and Installations Services for Automatic Doors, Swing Gate Motors, Sliding Gate Motors, Gate Barriers, Remote Controls, Parking Gates, Garage Doors, Gate Automation, and Automated Gate Systems, Revolving Doors, Gate Operators, Garage Doors, Sectional Overhead Garage Doors, Traffic Barriers, Security Bollards and Parking Management Systems at Villas, Commercial & Residence Buildings, Super Markets, Hotels and Hospitals. The scope of service shall include preventive, curative and emergency maintenance services"}
                    // content="We provide comprehensive Maintenance and Installations Services for Automatic Doors, Swing Gate Motors, Sliding Gate Motors, Gate Barriers, Remote Controls, Parking Gates, Garage Doors, Gate Automation, and Automated Gate Systems, Revolving Doors, Gate Operators, Garage Doors, Sectional Overhead Garage Doors, Traffic Barriers, Security Bollards and Parking Management Systems at Villas, Commercial & Residence Buildings, Super Markets, Hotels and Hospitals. The scope of service shall include preventive, curative and emergency maintenance services"
                    key="desc"
                />
                <link href="https://images.search.yahoo.com/images/view;_ylt=Awriiu6pSoVl5jgHXLiJzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzk4MTYyYmJmNzVmN2MxN2JkNzQzMWQxODUzZjAzMTdjBGdwb3MDMzMEaXQDYmluZw--?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dsliding%2Bgate%252C%2Bgate%2Bbarrier%252C%2Bremote%2Bcontrol%252C%2Bswing%2Bgate%2Bin%2Bpicture%26ei%3DUTF-8%26type%3DE210US91215G0%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26tab%3Dorganic%26ri%3D33&w=1120&h=539&imgurl=www.chinaautogate.com%2Fphoto%2Fpl3249519-wireless_remote_control_automatic_boom_gates_fence_arm_barrier.jpg&rurl=http%3A%2F%2Fwww.chinaautogate.com%2Fsale-2725546-wireless-remote-control-automatic-boom-gates-fence-arm-barrier.html&size=98.5KB&p=sliding+gate%2C+gate+barrier%2C+remote+control%2C+swing+gate+in+picture&oid=98162bbf75f7c17bd7431d1853f0317c&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=mcafee&tt=Wireless+Remote+Control+Automatic+Boom+Gates+Fence+Arm+Barrier&b=0&ni=140&no=33&ts=&tab=organic&sigr=08hL4rmBfnW6&sigb=kMuqRNye6ekT&sigi=gdOWgaBDpBGA&sigt=hDjsyTYZUoMT&.crumb=mL1hVfn8LnJ&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&type=E210US91215G0" rel="icon" />
                <title>{productsData[0]?.category?.meta_title ? productsData[0]?.category?.meta_title : "Gate Automation"}</title>
            </Head>
            <Products
                isCategory={true}
                productsData={productsData}
            />
            {productsData[0]?.category ?
                <div className="container-fluid pt-5 bg-white mx-auto" style={{ display: "flex", justifyContent: "center", alignItem: "center", maxWidth: "90%" }}>
                    <div className="row px-xl-5 pb-3 mx-2">
                        <h3 className="mx-auto text-info" style={{ textAlign: "center" }}> {productsData[0]?.category?.name}</h3>
                        <div>
                            {productsData[0]?.category?.content}
                        </div>
                    </div>
                </div>
                :
                <div className="container-fluid pt-5 bg-white mx-2" style={{ display: "flex", justifyContent: "center", alignItem: "center", margin: " 0 5rem" }}>
                    <div className="row pb-3 mx-2">
                        <h3 className="mx-auto text-info" style={{ textAlign: "center" }}> {productsData[0]?.category?.name}</h3>
                        <div>
                            Content Not Available
                        </div>
                    </div>
                </div>
            }
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
import React, { useState, useEffect } from 'react'
import { getCategory } from '../../services/api/category'

function Categories() {

    const [categoryList, setCategoryList] = useState([]);

    const getCategoryList = async () => {
        const response = await getCategory();
        if (response?.data?.status) {
            setCategoryList(response?.data?.data?.categories)
        }

    }

    useEffect(() => {
        getCategoryList()
    }, [])


    return (
        <div className="container-fluid pt-5">
            <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
                <span className="bg-secondary pr-3">Categories</span>
            </h2>
            <div className="row px-xl-5 pb-3">
                {categoryList?.map((itm) => {
                    return (
                        <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                            <a className="text-decoration-none" href="">
                                <div className="cat-item d-flex align-items-center mb-4" style={{position:"relative"}}>
                                    <div
                                        className="overflow-hidden"
                                        style={{ width: 100, height: 100 }}
                                    >
                                        <img
                                            className="img-fluid category-img"
                                            src={itm?.image}
                                            alt="" />
                                    </div>
                                    <div className="flex-fill pl-3">
                                        <h6>{itm?.name}</h6>
                                        <small className="text-body">100 Products</small>
                                    </div>
                                </div>
                                <div style={{ position:"absolute" , display: "flex" , flexDirection:"column", justifyConten:"center", alignItem:"center", margin:"1rem 1rem", fontSize:"1.2rem", top:"0.5rem", right:"1rem" }}>
                                        <i class="fa-solid fa-trash" style={{color:"red"}}></i>
                                        <i class="fa-solid fa-pen-to-square" style={{margin:"1rem 0", color:"black"}}></i>
                                    </div>

                            </a>
                        </div>
                    )
                })}

                <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                    <a className="text-decoration-none" href="">
                        <div className="cat-item img-zoom d-flex align-items-center mb-4">
                            <div
                                className="overflow-hidden"
                                style={{ width: 100, height: 100 }}
                            >
                                <img
                                    className="img-fluid category-img"
                                    src="https://tse3.mm.bing.net/th?id=OIP.lfXM94yeAS5FSkBbi63jLAAAAA&pid=Api&P=0&h=180"
                                    //  src="img/cat-2.jpg" 
                                    alt="" />
                            </div>
                            <div className="flex-fill pl-3">
                                <h6>Remotes</h6>
                                <small className="text-body">100 Products</small>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                    <a className="text-decoration-none" href="">
                        <div className="cat-item img-zoom d-flex align-items-center mb-4">
                            <div
                                className="overflow-hidden"
                                style={{ width: 100, height: 100 }}
                            >
                                <img
                                    className="img-fluid category-img"
                                    src="https://tse1.mm.bing.net/th?id=OIP.LeXTjbYpMRT5VfbzpLJoeQHaEK&pid=Api&P=0&h=180"
                                    //  src="img/cat-3.jpg"
                                    alt="" />
                            </div>
                            <div className="flex-fill pl-3">
                                <h6>Smart Wifi</h6>
                                <small className="text-body">100 Products</small>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                    <a className="text-decoration-none" href="">
                        <div className="cat-item img-zoom d-flex align-items-center mb-4">
                            <div
                                className="overflow-hidden"
                                style={{ width: 100, height: 100 }}
                            >
                                <img
                                    className="img-fluid category-img"
                                    src="https://tse3.mm.bing.net/th?id=OIP.NUuM6H9jcA3AsDNqxXrDmgHaHa&pid=Api&P=0&h=180"
                                    // src="img/cat-4.jpg"
                                    alt="" />
                            </div>
                            <div className="flex-fill pl-3">
                                <h6>Intercom System</h6>
                                <small className="text-body">100 Products</small>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                    <a className="text-decoration-none" href="">
                        <div className="cat-item img-zoom d-flex align-items-center mb-4">
                            <div
                                className="overflow-hidden"
                                style={{ width: 100, height: 100 }}
                            >
                                <img
                                    className="img-fluid category-img"
                                    src="https://tse2.mm.bing.net/th?id=OIP.q-D6nr6ElICFtHTyVkAO3AHaHa&pid=Api&P=0&h=180"
                                    //  src="img/cat-4.jpg"
                                    alt="" />
                            </div>
                            <div className="flex-fill pl-3">
                                <h6>Gate Spare Parts</h6>
                                <small className="text-body">100 Products</small>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                    <a className="text-decoration-none" href="">
                        <div className="cat-item img-zoom d-flex align-items-center mb-4">
                            <div
                                className="overflow-hidden"
                                style={{ width: 100, height: 100 }}
                            >
                                <img
                                    className="img-fluid category-img"
                                    src="https://tse1.mm.bing.net/th?id=OIP.cnlJ0oAVNuAQ675WkPpWJgHaHa&pid=Api&P=0&h=180"
                                    // src="img/cat-3.jpg"
                                    alt="" />
                            </div>
                            <div className="flex-fill pl-3">
                                <h6>Photocell Senor</h6>
                                <small className="text-body">100 Products</small>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                    <a className="text-decoration-none" href="">
                        <div className="cat-item img-zoom d-flex align-items-center mb-4">
                            <div
                                className="overflow-hidden"
                                style={{ width: 100, height: 100 }}
                            >
                                <img
                                    className="img-fluid category-img"
                                    src="https://tse3.mm.bing.net/th?id=OIP.atOkoxjopMZnAtJHaydLvgHaEj&pid=Api&P=0&h=180"
                                    // src="img/cat-2.jpg" 
                                    alt="" />
                            </div>
                            <div className="flex-fill pl-3">
                                <h6>Gate Berrier</h6>
                                <small className="text-body">100 Products</small>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                    <a className="text-decoration-none" href="">
                        <div className="cat-item img-zoom d-flex align-items-center mb-4">
                            <div
                                className="overflow-hidden"
                                style={{ width: 100, height: 100 }}
                            >
                                <img
                                    className="img-fluid category-img"
                                    src="https://tse3.explicit.bing.net/th?id=OIP.02b8hme9rYr9CN-GFXLE0QHaHa&pid=Api&P=0&h=180"
                                    // src="img/cat-1.jpg" 
                                    alt="" />
                            </div>
                            <div className="flex-fill pl-3">
                                <h6>Swing Gate Opener</h6>
                                <small className="text-body">100 Products</small>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                    <a className="text-decoration-none" href="">
                        <div className="cat-item img-zoom d-flex align-items-center mb-4">
                            <div
                                className="overflow-hidden"
                                style={{ width: 100, height: 100 }}
                            >
                                <img
                                    className="img-fluid category-img"
                                    src="https://tse2.mm.bing.net/th?id=OIP.cLAGOK3ElaTP7Pu_tQg2EAHaHa&pid=Api&P=0&h=180"
                                    //  src="img/cat-2.jpg" 
                                    alt="" />
                            </div>
                            <div className="flex-fill pl-3">
                                <h6>Camera</h6>
                                <small className="text-body">100 Products</small>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                    <a className="text-decoration-none" href="">
                        <div className="cat-item img-zoom d-flex align-items-center mb-4">
                            <div
                                className="overflow-hidden"
                                style={{ width: 100, height: 100 }}
                            >
                                <img
                                    className="img-fluid category-img"
                                    src="https://tse1.mm.bing.net/th?id=OIP.AW3MKT7x5OHvcL9c9xDyNgHaEN&pid=Api&P=0&h=180"
                                    // src="img/cat-1.jpg"
                                    alt="" />
                            </div>
                            <div className="flex-fill pl-3">
                                <h6>Category Name</h6>
                                <small className="text-body">100 Products</small>
                            </div>
                        </div>
                    </a>
                </div>
                {/* <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                            <a className="text-decoration-none" href="">
                                <div className="cat-item img-zoom d-flex align-items-center mb-4">
                                    <div
                                        className="overflow-hidden"
                                        style={{ width: 100, height: 100 }}
                                    >
                                        <img className="img-fluid" src="img/cat-4.jpg" alt="" />
                                    </div>
                                    <div className="flex-fill pl-3">
                                        <h6>Category Name</h6>
                                        <small className="text-body">100 Products</small>
                                    </div>
                                </div>
                            </a>
                        </div> */}
                {/* <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                            <a className="text-decoration-none" href="">
                                <div className="cat-item img-zoom d-flex align-items-center mb-4">
                                    <div
                                        className="overflow-hidden"
                                        style={{ width: 100, height: 100 }}
                                    >
                                        <img className="img-fluid" src="img/cat-3.jpg" alt="" />
                                    </div>
                                    <div className="flex-fill pl-3">
                                        <h6>Category Name</h6>
                                        <small className="text-body">100 Products</small>
                                    </div>
                                </div>
                            </a>
                        </div> */}
            </div>
        </div>
    )
}

export default Categories

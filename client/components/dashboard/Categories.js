import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from "next/router";
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux';
import { getCategory, deleteCategory } from '../../services/api/category'
import { getCategories, removeCategory } from '../../redux/slices/categorySlice';


function Categories({ categoryData }) {
    const router = useRouter();

    const dispatch = useDispatch();
    const categories = useSelector((state) => state?.category?.categories);
    const searchText = useSelector((state) => state?.product?.searchText);
    const [categoryList, setCategoryList] = useState([]);

    let token;
    let admin;

    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
        // Now you can safely use localStorage
        token = localStorage.getItem('token')
        admin = JSON.parse(localStorage.getItem('isOwner'))
    }



    const getCategoryList = async () => {
        // const response = await getCategory();
        // if (response?.data?.status) {
        //     setCategoryList(response?.data?.data?.categories)
        //     dispatch(getCategories(response?.data?.data?.categories))
        // }
        if (categoryData?.length) {
            dispatch(getCategories(categoryData))
        }

    }

    useEffect(() => {
        getCategoryList()
    }, [])

    const deleteCategoryHandler = async (id) => {
        const response = await deleteCategory(id, token)
        console.log("response :::", response)
        if (response?.data?.status) {
            toast.success(response?.data?.data?.message);
            dispatch(removeCategory(id))
        }
    }

    const editProductHandler = async (id) => {
        router.push(`/create-category?isEdit=true&&id=${id}`)
    }

    return (
        <div className="container-fluid pt-5">
            <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
                <span className="bg-secondary pr-3">Categories</span>
            </h2>
            <div className="row px-xl-5 pb-3">
                {categories?.filter((itm) => {
                    if (searchText) {

                        if (itm?.name?.toLowerCase()?.includes(searchText)) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                    return true
                })?.map((itm) => {
                    return (
                        <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                            <Link className="text-decoration-none" href={`/product-list-by-selected-category/${itm?._id}`}>
                                <div className="cat-item d-flex align-items-center mb-4" style={{ position: "relative" }}>
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
                            </Link>
                            {admin && <div style={{ position: "absolute", display: "flex", flexDirection: "column", justifyConten: "center", alignItem: "center", margin: "1rem 1rem", fontSize: "1.2rem", top: "0.5rem", right: "1rem" }}>
                                <i class="fa-solid fa-trash" style={{ color: "red" }} onClick={() => deleteCategoryHandler(itm?._id)}></i>
                                <i class="fa-solid fa-pen-to-square" style={{ margin: "1rem 0", color: "black" }} onClick={() => editProductHandler(itm?._id)} ></i>
                            </div>}

                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Categories

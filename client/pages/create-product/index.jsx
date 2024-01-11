import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { redirect, useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select'

import { createProduct, getSingleProduct, updateProduct } from '../../services/api/product/index';



function AddProduct() {
    const Categories = useSelector((state) => state?.category?.categories);
    // console.log("Categories ::", Categories)
    let token;

    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
        token = localStorage.getItem('token')
    }

    const router = useRouter();
    const searchParams = useSearchParams()
    const isEdit = searchParams.get('isEdit');
    const id = searchParams.get('id');
    const names = searchParams.get('name');


    const [productFormData, setFormData] = useState({
        name: "",
        price: "",
        category: "",
        short_description: "",
        full_description: "",
        image: ""
    });


    const { name, price, category, short_description, full_description, image } = productFormData;

    const handleChange = (e) => {
        const { name } = e?.target;
        if (name === "image") {
            setFormData((prev) => ({
                ...prev,
                image: e.target.files[0]
            }))
        } else {
            const { value } = e?.target;
            setFormData((prev) => ({
                ...prev,
                [name]: value
            }))

        }

    }


    const onSubmit = async (e) => {

        e.preventDefault();
        const formData = new FormData();
        for (const key in productFormData) {
            if (key === "category") {
                formData.append(key, productFormData[key]?.value);
            } else {
                formData.append(key, productFormData[key]);
            }
        }

        if (window?.location?.search) {
            const result = await updateProduct(id, formData, token);
            if (result?.data?.status) {
                toast.success(result?.data?.data?.message)
                router.push("/")
            }
        } else {
            const result = await createProduct(formData, token);
            if (result?.data?.status) {
                toast.success(result?.data?.data?.message)
                router.push("/")
            }
        }

    }


    const getProduct = async (name) => {
        if (name) {
            const response = await getSingleProduct(name);
            const data = response?.data?.data?.product;
            const category = Categories?.find((itm) => itm?._id === data?.category?._id)
            setFormData({
                name: data?.name,
                price: data?.price,
                category: { label: category?.name, value: category?._id },
                short_description: data?.short_description,
                full_description: data?.full_description,
                image: data?.image
            });
        }
    }


    useEffect(() => {
        if (window?.location?.search) {
            getProduct(names)
        }
    }, [])

    const customStyles = {
        // Style the input field
        input: (provided, state) => ({
            ...provided,
            height: '2.8rem',
            borderRadius: "1rem"
        }),

    };

    return (
        <div className="d-flex justify-content-center">
            <div className="card login-card">
                <h5 className="card-header py-4">Add Product</h5>
                <div className="card-body mx-4 my-5">
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            {/* <label for="exampleInputname1">name address</label> */}
                            <input type="name" name="name" value={name} onChange={handleChange} className="form-control input-field" id="exampleInputname1" aria-describedby="nameHelp" placeholder="Enter your name" />

                        </div>
                        <div className="form-group">
                            {/* <label for="exampleInputcategory1">category</label> */}
                            {/* <input type="category" name="category" value={category} onChange={handleChange} className="form-control input-field" id="exampleInputprice1" placeholder="Enter your category" /> */}
                            {/* <div className="form-group" > */}
                            {/* <input type="text" className="form-control input-field" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your state" /> */}
                            <Select
                                styles={customStyles}
                                onChange={(e) => setFormData((prev) => ({
                                    ...prev,
                                    category: e
                                }))
                                }
                                //  className="form-control input-field"
                                value={category}
                                placeholder="Select Category"
                                options={Categories?.map((itm) => {
                                    return {
                                        label: itm?.name,
                                        value: itm?._id
                                    }
                                })}

                            />

                        </div>
                        <div className="form-group">
                            {/* <label for="exampleInputprice1">price</label> */}
                            <input type="price" name="price" value={price} onChange={handleChange} className="form-control input-field" id="exampleInputprice1" placeholder="Enter your price" />
                        </div>
                        <div className="form-group">
                            {/* <label for="exampleInputshort_description">short_description</label> */}
                            <input type="short_description" name="short_description" value={short_description} onChange={handleChange} className="form-control input-field" id="exampleInputshort_description" placeholder="Enter your short description" />
                        </div>
                        <div className="form-group">
                            <div class="form-group">
                                <textarea type="full_description" name="full_description" value={full_description} onChange={handleChange} className="form-control input-field" id="exampleInputshort_description" placeholder="Enter your full description or Specificarion" rows="5"></textarea>
                            </div>
                            {/* <label for="exampleInputfull_description">full_description</label> */}
                            {/* <input type="full_description" name="full_description" value={full_description} onChange={handleChange} className="form-control input-field" id="exampleInputshort_description" placeholder="Enter your full description" /> */}
                        </div>
                        {/* <div className="form-group"> */}
                        {/* <label for="exampleInputimage">image</label> */}
                        <input type="file" name="image" onChange={handleChange} placeholder="Enter your price" />
                        {/* </div> */}
                        {/* <div className="form-group"> */}
                        <input type="submit" className="form-control input-field  btn-primary" id="exampleInputname1" aria-describedby="nameHelp" value="Add Product" />
                        {/* </div> */}

                        {/* <button type="submit" className="btn btn-primary login-button">Submit</button> */}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddProduct
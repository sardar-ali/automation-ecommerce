import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { redirect, useRouter } from 'next/navigation';
import { createProduct } from '../../services/api/product/index';
// import { userLogin } from '../../services/api/auth/index';

function AddProduct() {

    let token ;

    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
        // Now you can safely use localStorage
       token =  localStorage.getItem('token')
      } 


console.log("token is hre :::", token)

    const router = useRouter();
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
        console.log("obj test   ::", key)

        formData.append(key, productFormData[key]);
        }
        console.log("formData ::", productFormData)

const result = await createProduct(formData, token);

        if (result?.data?.status) {
            console.log("result ::", result)
            toast.success(result?.data?.data?.message)
            router.push("/")
        }
    }

    console.log("productFormData ::", productFormData)

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
                            <input type="category" name="category" value={category} onChange={handleChange} className="form-control input-field" id="exampleInputprice1" placeholder="Enter your category" />
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
                            {/* <label for="exampleInputfull_description">full_description</label> */}
                            <input type="full_description" name="full_description" value={full_description} onChange={handleChange} className="form-control input-field" id="exampleInputshort_description" placeholder="Enter your full description" />
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
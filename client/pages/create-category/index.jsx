import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import { useSearchParams } from 'next/navigation'
import { redirect, useRouter } from 'next/navigation';
import { createCategory, getSingleCategory, updateCategory } from '../../services/api/category/index';


function AddCategory() {

    const searchParams = useSearchParams()
    const isEdit = searchParams.get('isEdit')
    const id = searchParams.get('id')

    const router = useRouter();
    const [categoryFormData, setFormData] = useState({
        name: "",
        image: ""
    });


    let token;

    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
        // Now you can safely use localStorage
        token = localStorage.getItem('token')
    }


    const { name, image } = categoryFormData;

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

        if (isEdit) {

            const formData = new FormData();
            for (const key in categoryFormData) {
                formData.append(key, categoryFormData[key]);
            }

            const result = await updateCategory(id, formData, token);
            if (result?.data?.status) {
                toast.success(result?.data?.data?.message)
                router.push("/")
            }

        } else {

            const formData = new FormData();
            for (const key in categoryFormData) {
                formData.append(key, categoryFormData[key]);
            }

            const result = await createCategory(formData, token);
            if (result?.data?.status) {
                toast.success(result?.data?.data?.message)
                router.push("/")
            }

        }
    }



    const getCategory = async (id) => {
        const response = await getSingleCategory(id);
        const data = response?.data?.data?.category;
        setFormData({
            name: data?.name,
            image: data?.image
        });
    }

    useEffect(() => {
        if (isEdit) {
            getCategory(id)
        }
    }, [])

    return (
        <div className="d-flex justify-content-center">
            <div className="card login-card">
                <h5 className="card-header py-4">Add Category</h5>
                <div className="card-body mx-4 my-5">
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            {/* <label for="exampleInputname1">name address</label> */}
                            <input type="name" name="name" value={name} onChange={handleChange} className="form-control input-field" id="exampleInputname1" aria-describedby="nameHelp" placeholder="Enter your name" />
                        </div>
                        {/* <div className="form-group"> */}
                        {/* <label for="exampleInputimage">image</label> */}
                        <input type="file" name="image" onChange={handleChange} placeholder="Enter your price" />
                        {/* </div> */}
                        {/* <div className="form-group"> */}
                        <input type="submit" className="form-control input-field  btn-primary" id="exampleInputname1" aria-describedby="nameHelp" value="Add Category" />
                        {/* </div> */}

                        {/* <button type="submit" className="btn btn-primary login-button">Submit</button> */}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddCategory
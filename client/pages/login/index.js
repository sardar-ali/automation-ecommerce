import React, { useState } from 'react'
import Link from 'next/link'

import { toast } from 'react-toastify';
import {  useRouter } from 'next/navigation';
import { userLogin } from '../../services/api/auth/index';

function Login() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const { email, password } = formData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const result = await userLogin(formData);
        if (result?.data?.status) {

            localStorage.setItem('user', result?.data?.data?.user?.id);
            localStorage.setItem('token', result?.data?.data?.user?.token);
            localStorage.setItem('isOwner', result?.data?.data?.user?.isAdmin);

            // console.log("result ::", result)
            // console.log("message ::", result?.data?.data?.message)
            toast.success(result?.data?.data?.message)
            // navigate("/")
            router.push("/")
        }
    }

    return (
        <div className="d-flex justify-content-center">
            <div className="card login-card">
                <h5 className="card-header py-4">Login</h5>
                <div className="card-body mx-4 my-5">
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            {/* <label for="exampleInputEmail1">Email address</label> */}
                            <input type="email" name="email" value={email} onChange={handleChange} className="form-control input-field" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" />

                        </div>
                        <div className="form-group">
                            {/* <label for="exampleInputPassword1">Password</label> */}
                            <input type="password" name="password" value={password} onChange={handleChange} className="form-control input-field" id="exampleInputPassword1" placeholder="Enter your password" />
                        </div>
                        <div className="form-group">
                            <input type="submit" className="form-control input-field  btn-primary" id="exampleInputEmail1" aria-describedby="emailHelp" value="Sign In" />
                        </div>

                        {/* <button type="submit" className="btn btn-primary login-button">Submit</button> */}
                    </form>
                    <Link href="/signup" style={{ color: "black" }}>Please signup if you don't have account?</Link>
                </div>
            </div>
        </div>
    )
}

export default Login

import React, { useState } from 'react'
import Link from 'next/link'

// import { useNavigate } from "react-router-dom";
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { userSignup } from '../../services/api/auth/index';

function Signup() {
    const router = useRouter()
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
    });

    const { first_name, last_name, email, password } = formData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }


    const onSignup = async (e) => {
        e.preventDefault();
        const result = await userSignup(formData)
        // console.log("result ::", result)

        if (result?.data?.status) {
            localStorage.setItem('token', result?.data?.data?.user?.token);
            localStorage.setItem('isOwner', result?.data?.data?.user?.isAdmin);
            localStorage.setItem('user', result?.data?.data?.user?.id);
            toast.success(result?.data?.data?.message);
            router.push("/")

        }

    }

    return (
        <div className="d-flex justify-content-center">
            <div className="card login-card">
                <h5 className="card-header py-4">Signup</h5>
                <div className="card-body mx-4 my-5">
                    <form onSubmit={onSignup}>
                        <div className="form-group">
                            {/* <label for="exampleInputEmail1">Email address</label> */}
                            <input type="text" name="first_name" value={first_name} onChange={handleChange} className="form-control input-field" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your first name" />

                        </div>
                        <div className="form-group">
                            {/* <label for="exampleInputEmail1">Email address</label> */}
                            <input type="text" name="last_name" value={last_name} onChange={handleChange} className="form-control input-field" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your last name" />

                        </div>
                        {/* <div className="form-group">
                    <input type="text" className="form-control input-field" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your phone"/>
                </div> */}
                        <div className="form-group">
                            {/* <label for="exampleInputEmail1">Email address</label> */}
                            <input type="email" name="email" value={email} onChange={handleChange} className="form-control input-field" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" />

                        </div>
                        <div className="form-group">
                            {/* <label for="exampleInputPassword1">Password</label> */}
                            <input type="password" name="password" value={password} onChange={handleChange} className="form-control input-field" id="exampleInputPassword1" placeholder="Enter your password" />
                        </div>
                        <div className="form-group">
                            <input type="submit" className="form-control input-field  btn-primary" id="exampleInputEmail1" aria-describedby="emailHelp" value="Sign Up" />
                        </div>
                        {/* <button type="submit" className="btn btn-primary login-button">Sign up</button> */}
                    </form>
                    <Link href="/login" style={{ color: "black" }}>Please login if you have alread account?</Link>

                </div>
            </div>
        </div>
    )
}

export default Signup

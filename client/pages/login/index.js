import React, { useState } from 'react'
import { toast } from 'react-toastify';

import { userLogin } from '../../services/api\'s/auth';

function Login() {

    const [formData, setFormData ] = useState({
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
            console.log("result ::", result)
            toast.success(result?.data?.data?.message)
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
                </div>
            </div>
        </div>
    )
}

export default Login

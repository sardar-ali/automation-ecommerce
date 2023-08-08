import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { userSignup } from '../../services/api\'s/auth';

function Signup() {
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
        console.log("result ::", result)

        if(result?.data?.status){
            toast.success(result?.data?.data?.message);
            console.log("result ::", result?.data?.data)

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
                </div>
            </div>
        </div>
    )
}

export default Signup

import React from 'react'

function Signup() {
  return (
        <div className="d-flex justify-content-center">
        <div className="card login-card">
        <h5 className="card-header py-4">Signup</h5>
        <div className="card-body mx-4 my-5">
            <form>
                <div className="form-group">
                    {/* <label for="exampleInputEmail1">Email address</label> */}
                    <input type="text" className="form-control input-field" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your first name"/>
          
                </div>
                <div className="form-group">
                    {/* <label for="exampleInputEmail1">Email address</label> */}
                    <input type="text" className="form-control input-field" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your last name"/>
          
                </div>
                <div className="form-group">
                    {/* <label for="exampleInputEmail1">Email address</label> */}
                    <input type="text" className="form-control input-field" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your phone"/>
          
                </div>
                <div className="form-group">
                    {/* <label for="exampleInputEmail1">Email address</label> */}
                    <input type="email" className="form-control input-field" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email"/>
          
                </div>
                <div className="form-group">
                    {/* <label for="exampleInputPassword1">Password</label> */}
                    <input type="password" className="form-control input-field"  id="exampleInputPassword1" placeholder="Enter your password"/>
                </div>
                <div className="form-group">
                    <input type="button" className="form-control input-field  btn-primary" id="exampleInputEmail1" aria-describedby="emailHelp" value="Sign Up"/>
                </div>
                {/* <button type="submit" className="btn btn-primary login-button">Sign up</button> */}
            </form>
        </div>
        </div>
        </div>
  )
}

export default Signup

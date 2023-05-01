import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const SignIn = () => {
  let[showPass,setShowPass]=useState(false)
  let navigate = useNavigate()
  let location = useLocation()
  // console.log(location);
  let from = location?.state?.from?.pathname || "/"
    let {signInUser}=useContext(AuthContext)
    const handleLogin = (event) => {
        event.preventDefault()
        let email = event.target.email.value;
        let password = event.target.password.value;
        signInUser(email, password)
            .then(res => {
              console.log(res.user);
              event.target.reset()
              navigate(from, {replace:true})
            })
            .catch(error => {
            console.log(error.message);
        })
    };
    return (
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Please Login</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="email here"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type={showPass?"text":"password"}
                    name="password"
                    placeholder="password here"
                    required
                    className="input input-bordered"
                  />
                  <p onClick={() => setShowPass(!showPass)} className='cursor-pointer'>{ showPass?<span>Hide password</span>: <span>Show password</span> }</p>
                  <label className="label">
                    <a
                      href="#"
                      className="label-text-alt link link-hover text-blue-700"
                    >
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                    Sign In
                  </button>
                </div>
              </form>
              <div className="flex justify-evenly items-center">
                <hr className="w-2/5" />
                <span>or</span>
                <hr className="w-2/5" />
              </div>
              <button className="btn btn-primary">Continue with Google</button>
              <p>
                <small>New to Ema John?</small>{" "}
                <Link
                  className="label-text-alt link link-hover text-blue-700"
                  to="/sign-up"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignIn;
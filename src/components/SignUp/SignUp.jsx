import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const SignUp = () => {
  const [displayError, setDisplayError] = useState("");
  let { createUser } = useContext(AuthContext);
  const handleRegister = (event) => {
    setDisplayError("");
    event.preventDefault();
    let email = event.target.email.value;
    let password = event.target.password.value;
    let confirmPassword = event.target.confirmPassword.value;
    console.log(email, password, confirmPassword);
    if (password !== confirmPassword) {
      setDisplayError("password does not matched");
      return;
    } else if (password.length < 6) {
      setDisplayError("password must be 6 charater longer");
      return;
    }
    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        event.target.reset();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Please Register</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
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
                  type="password"
                  name="password"
                  placeholder="password here"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password here"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
              </div>
            </form>
            <p>
              <small>Already have account?</small>{" "}
              <Link
                className="label-text-alt link link-hover text-blue-700"
                to="/sign-in"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
      <p className="text-red-500 text-2xl text-center">{displayError}</p>
    </div>
  );
};

export default SignUp;

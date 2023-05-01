import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const Header = () => {
  let { user, signOutUser } = useContext(AuthContext);
  console.log(user);
  let handleSignOut = (event) => {
    event.preventDefault();
    signOutUser()
      .then(() => {
        console.log("Sign-out successful");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/sign-in">Sign In</Link>
        {user ? (
          <Link onClick={handleSignOut} to="/sign-in">Sign Out</Link>
        ) : (
          <Link to="/sign-up">Sign Up</Link>
        )}
      </div>
    </nav>
  );
};

export default Header;

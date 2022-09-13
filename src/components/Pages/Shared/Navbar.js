import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";

import useNav from "../../hooks/useNav";
import "./Navbar.css";
const Navbar = () => {
  const {pathname} = useLocation();
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  const { navbar, navBarLogo } = useNav();

  window.onscroll = function () {
    scrollBar();
  };
  function scrollBar() {
    var winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    var height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }
  const menuItems = (
    <>
      <li>
        {" "}
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="mx-4">
        {" "}
        <NavLink to="/myPortfolio">My Portfolio</NavLink>
      </li>
      <li className="mx-4">
        {" "}
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
    </>
  );
  return (
    <>
      <div
        className={`navbar border-gray-200 px-2 sm:px-8 py-2.5 w-full sticky top-0 z-50 transition-all ${
          navbar && "bg-white shadow-lg set-border"
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className=" menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>

          {navBarLogo}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          {/* <Link to='/login' className="btn">Login</Link> */}
          {user ? (
            <button className="btn " onClick={logout}>
              Sign Out
            </button>
          ) : (
            <Link className="btn" to="/login">
              Login
            </Link>
          )}
          <label
         style={
          pathname.includes("dashboard") ? {display: 'block'} :
          {display: 'none'}
        }
            tabIndex="1"
            htmlFor="dashboard-sidebar"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
      </div>

      <div className="progress-container">
        <div className="progress-bar" id="myBar"></div>
      </div>
    </>
  );
};

export default Navbar;

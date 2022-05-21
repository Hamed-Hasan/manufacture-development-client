import React from 'react';
import useNav from '../hooks/useNav';
import './Navbar.css'
const Navbar = () => {
    const { navbar, navBarLogo } = useNav();


    window.onscroll = function() {scrollBar()};

    function scrollBar() {
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      document.getElementById("myBar").style.width = scrolled + "%";
    }
    return (
    <>
    <div className={`navbar border-gray-200 px-2 sm:px-8 py-2.5 w-full sticky top-0 z-50 transition-all ${
            navbar && "bg-white shadow-lg set-border"
          }`}>
        <div class="navbar">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class=" menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
             
              <li><a>Item 3</a></li>
            </ul>
          </div>
        
          {navBarLogo}
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li><a>Item 1</a></li>
           
            <li><a>Item 3</a></li>
          </ul>
        </div>
        {/* <div class="navbar-end">
          <a class="btn">Get started</a>
        </div> */}
      </div>
      {/* <div className="progress-container">
    <div className="progress-bar" id="myBar"></div>
  </div>   */}
    </>
    );
};

export default Navbar;
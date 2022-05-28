import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <header style={{backgroundImage: `url(https://images.unsplash.com/photo-1483389127117-b6a2102724ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)`}} id="up" className="hero-path bg-top bg-fixed bg-no-repeat bg-cover h-full  relative">
		
		<div class="h-screen bg-opacity-50 bg-black flex items-center justify-center" style={{background:'rgba(0,0,0,0.5)'}}>
			<div class="mx-2 text-center">
				<h1 class="text-gray-100 font-extrabold text-4xl xs:text-5xl md:text-6xl"  data-aos="fade-up"
     data-aos-duration="3000">
					<span class="text-white">Right</span> Place To
           </h1>
           <h2 class="text-gray-200 font-extrabold text-3xl xs:text-4xl md:text-5xl leading-tight" data-aos="fade-up"
     data-aos-duration="2000">
            Get a <span class="text-white">Better</span> and <span class="text-white">Professionals</span> Design
           </h2>
           <div class="inline-flex">
           
           <Link to='/myPortfolio'><button class="p-2 my-5 mx-2 bg-transparent border-2 bg-indigo-200 bg-opacity-75 hover:bg-opacity-100 border-indigo-700 rounded hover:border-indigo-800 font-bold text-indigo-800 shadow-md transition duration-500 md:text-lg" data-aos="zoom-in-up">Learn More</button></Link>
           </div>
        </div>
    </div>
</header>
  );
};

export default Banner;

import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
 <div className="relative">
      <img
        src="https://images.unsplash.com/photo-1598599462728-02161125ad0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-opacity-70 bg-blue-700">
      <svg xmlns="http://www.w3.org/2000/svg"
       className="absolute inset-x-0 bottom-0 border-b-0 text-white"
      viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,288L40,272C80,256,160,224,240,229.3C320,235,400,277,480,282.7C560,288,640,256,720,213.3C800,171,880,117,960,112C1040,107,1120,149,1200,181.3C1280,213,1360,235,1400,245.3L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>

        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none text-left "
                data-aos="fade-right"
                data-aos-duration="5000"
                data-aos-delay="5000"
                data-aos-easing="ease-in-sine">
                The Best Manufacture  <br className="hidden md:block" />
                Product In Your Hands
              </h2>
              <p className="max-w-xl text-left mb-4 text-base text-gray-200 md:text-lg" 
                data-aos="fade-right"
                data-aos-duration="3000"
                data-aos-delay="3000"
                
                data-aos-easing="ease-in-sine">
              Keep Your Insurance_Protection Shopping Spree Alive with Manufacture
              product
              Find the best prices for Insurance_Protection and its related products at our Manufacture website
              </p>
              <Link
                to='/myPortfolio'
                aria-label=""
                className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700 text-white hover:border-blue-600   hover:bg-blue-600 hover:text-white border-2 p-2 float-left"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="1000"
                
                data-aos-easing="ease-in-sine">
                About Me
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </Link>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="bg-white rounded pl-5 pt-4 shadow-2xl">
               <img src="https://i.ibb.co/9qmqSj1/manufacture-hero.png" className='h-auto w-auto' alt="" />
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  
    </>

  );
};

export default Banner;

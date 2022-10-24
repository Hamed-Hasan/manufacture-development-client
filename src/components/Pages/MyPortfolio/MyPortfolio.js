import React from "react";
import ReactHelmet from "../Shared/ReactHelmet/ReactHelmet";

import author from "../../assets/images/hamed-hasan.jpg";

const MyPortfolio = () => {
  return (
    <div className="bg-gray-800">
      <ReactHelmet title="My Portfolio"></ReactHelmet>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="lg:flex lg:items-center">
            <div className="w-full space-y-12 lg:w-1/2 ">
              <div>
                <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white" data-aos="fade-up"
     data-aos-duration="3000">
                  explore My <br /> awesome Projects
                </h1>

                <div className="mt-2">
                  <span className="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
                  <span className="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500"></span>
                  <span className="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500"></span>
                </div>
              </div>

              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </span>

                <div className="mt-4 md:mx-4 md:mt-0" data-aos="fade-right"
     data-aos-duration="1000">
                  <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                    Front End Development & Skill
                  </h1>

                  <p className="mt-3 text-gray-500 dark:text-gray-300">
                    Implement My Project With HTML CSS JAVASCRIPT REACT JS NODE
                    JS MONGO DB FIREBASE REACT ROUTER TYPE SCRIPT ETC.
                  </p>
                </div>
              </div>

              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </span>

                <div className="mt-4 md:mx-4 md:mt-0" data-aos="fade-right"
     data-aos-duration="2000">
                  <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                    About My Self
                  </h1>

                  <p className="mt-3 text-gray-500 dark:text-gray-300">
                  Recent bachelor's degree recipient with a background in web design and development. W3C web developer certification. Over 2 years of experience working on personal blogs,
                  </p>
                </div>
              </div>

              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                    />
                  </svg>
                </span>

                <div className="mt-4 md:mx-4 md:mt-0" data-aos="fade-right"
     data-aos-duration="3000">
                  <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                  My Goals
                  </h1>

                  <p className="mt-3 text-gray-500 dark:text-gray-300">
                  Having a goal and working to complete it can improve the job satisfaction of a software developer. By establishing goals,
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center" data-aos="zoom-in"
     data-aos-duration="2000">
              <img
                className="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-full"
                src={author}
                alt="hamed-hasan"
              />
            </div>
          </div>
          <h1 className="text-center text-5xl font-bold mt-2">My Projects</h1>
          <hr className="border-gray-200 my-12 dark:border-gray-700" />

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
              <a
                href="https://electroncics-zone.netlify.app"
                className="text-center text-2xl font-bold mt-2 hover:text-gray-400"
              >
                Electronics Zone
              </a>
            </div>

            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
              <a
                href="https://first-class-travel.netlify.app/"
                className="text-center text-2xl font-bold mt-2 hover:text-gray-400"
              >
                First Class Travel
              </a>
            </div>
            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
              <a
                href="https://react-router-shop.netlify.app/"
                className="text-center text-2xl font-bold mt-2 hover:text-gray-400"
              >
                Happy Shopping
              </a>
            </div>
            <div className="flex items-center justify-center col-span-2 md:col-span-3 lg:col-span-1">
              <a
                href="https://landing-pages-portfolio.netlify.app"
                className="text-center text-2xl font-bold mt-2 hover:text-gray-400"
              >
                Simple Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyPortfolio;

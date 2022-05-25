import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({service}) => {
    const navigate = useNavigate();
  const { _id, name, img, description, price, quantity } = service;
  const navigateToServiceDetail = (id) => {
    navigate(`/purchase/${id}`);
  };

  return (
    <div>
      <div
        style={{ height: "100%" }}
        className="home-card gradient-border w-full hover:-translate-y-5 transition-all bg-dark rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="#">
          <img src={img} className="w-full" alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
              {name}
            </h5>
            <h5 className="mb-2 font-bold tracking-tight text-white dark:text-white text-lg">
              {/* Supplier {supplier} */}
            </h5>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
              $ {price}
            </h5>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
              Quantity {quantity}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-200 dark:text-gray-400">
            {description}
          </p>
          <button
            onClick={() => navigateToServiceDetail(_id)}
            style={{
              textDecoration: "none",
              cursor: "pointer",
              color: "white",
            }}
            className="text-white bg-gradient-to-r flex items-center from-amber-500  via-amber-400 to-amber-600 lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Update
            <svg
              className="w-6 ml-2 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
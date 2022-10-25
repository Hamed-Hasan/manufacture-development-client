import React from "react";
import 'lazysizes';
// import a plugin
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import { useNavigate } from "react-router-dom";
import "./product.css";
const Product = ({ service }) => {
  const navigate = useNavigate();
  const { _id, name, img, description, price, quantity } = service;
  const navigateToServiceDetail = (id) => {
    navigate(`/purchase/${id}`);
  };

  return (
    <div>
      <div className="card-wrapper" data-aos="zoom-in">
        <div className="img-area">
          <div className="inner-area">
            <img data-sizes="auto" data-src={img} alt="area" class="lazyload" />
          </div>
        </div>
        <div className="icon arrow">
          <i className="fas fa-arrow-left"></i>
        </div>
        <div className="icon dots">
          <i className="fas fa-ellipsis-v"></i>
        </div>
        <div className="name">{name}</div>
        <div className="about text-sm text-gray-200 mb-3">{description}</div>

        <div className="buttons">
          <button
            onClick={() => navigateToServiceDetail(_id)}
            className="flex items-center justify-center gap-4"
          >
            Buy Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
        </div>
        <div className="social-share">
          <div className="row">
            <i className="far fa-heart"></i>
            <i className="icon-2 fas fa-heart"></i>
            <span>Price ${price}</span>
          </div>
          <div className="row">
            <i className="far fa-comment"></i>
            <i className="icon-2 fas fa-comment"></i>
            <span>Quantity {quantity}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

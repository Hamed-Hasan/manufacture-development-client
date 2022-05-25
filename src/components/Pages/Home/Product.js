import React from 'react';
import { useNavigate } from 'react-router-dom';
import './product.css'
const Product = ({service}) => {
    const navigate = useNavigate();
  const { _id, name, img, description, price, quantity } = service;
  const navigateToServiceDetail = (id) => {
    navigate(`/purchase/${id}`);
  };

  return (
    <div>
    <div class="card-wrapper">
    <div class="img-area">
      <div class="inner-area">
        <img src={img} alt=""/>
      </div>
    </div>
    <div class="icon arrow"><i class="fas fa-arrow-left"></i></div>
    <div class="icon dots"><i class="fas fa-ellipsis-v"></i></div>
    <div class="name">{name}</div>
    <div class="about text-sm text-gray-200 mb-3">{description}</div>

    <div class="buttons">
      <button onClick={() => navigateToServiceDetail(_id)} className='flex items-center justify-center gap-4'>Buy Now 
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
</svg>
      </button>
    </div>
    <div class="social-share">
      <div class="row">
        <i class="far fa-heart"></i>
        <i class="icon-2 fas fa-heart"></i>
        <span>Price ${price}</span>
      </div>
      <div class="row">
        <i class="far fa-comment"></i>
        <i class="icon-2 fas fa-comment"></i>
        <span>Quantity {quantity}</span>
      </div>
    </div>
  </div>
    </div>
  );
};

export default Product;
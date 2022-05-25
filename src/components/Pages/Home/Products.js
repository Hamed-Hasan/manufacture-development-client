import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';
import Product from '../Home/Product'
const Products = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      setLoading(true);
      fetch("http://localhost:5000/product")
        .then((res) => res.json())
        .then((data) => {
          setServices(data)
          setLoading(false)
        });
    }, []);
    return (
      <div id='service' className="container mx-auto my-10">
        <div className="section-content mb-16">
          <h2 className="text-center py-10">
        <p className='text-sm md:text-2xl'>The Most Important </p>
        <p className='pt-2 text-sm md:text-2xl'> Things We Offer Aren't Manufactured</p>
          </h2>
        </div>
      
  <div className='pt-11'>
    {
    loading ? <Loading/> :   <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
    {services.map((service) => (
      <Product key={service._id} service={service} />
    ))}
  </div>
  }
  </div>
  
      </div>
    );
};

export default Products;
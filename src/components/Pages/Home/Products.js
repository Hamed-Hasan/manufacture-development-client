import React, { useEffect, useState } from "react";
import Loading from "../Shared/Loading";
import Product from "../Home/Product";
import { useQuery } from "react-query";
const Products = () => {
  const [loading, setLoading] = useState(false);

  const { data: services, isLoading, refetch } = useQuery('services', () => fetch('https://agile-castle-61471.herokuapp.com/product', {
    method: 'GET',
    headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
       
    }
})
    .then(res => res.json()));
    refetch();
    if(isLoading) {
      return <Loading/>
    }
  
 
  return (
    <div id="service" className="container mx-auto my-10">
      <div className="section-content mb-16">
        <h2 className="text-center" data-aos="zoom-in-up">
          <p className="text-sm md:text-6xl font-bold pb-2 ">Most Important </p>
          <p className="text-sm md:text-4xl">
            {" "}
            Things We Offer Aren't Manufactured
          </p>
        </h2>
      </div>

      <div className="pt-11">

    <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
                {services?.map((service) => (
                  <Product key={service._id} service={service} />
                ))}
              </div>
          </div>
        </div>
  );
};

export default Products;

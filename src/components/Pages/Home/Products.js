import React, { useEffect, useState, lazy} from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
// import Product from "./Product";
const Product = React.lazy(() => import('../Home/Product'));

const Products = () => {
  const [loading, setLoading] = useState(false);

  const { data: services, isLoading, refetch } = useQuery('services', () => fetch('https://manufacture-developement-server.onrender.com/product', {
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
          <React.Suspense fallback={<Loading/>}>
          {services?.map((service) => (
                  <Product key={service._id} service={service} />
                ))}
          </React.Suspense>
              </div>
          </div>
        </div>
  );
};

export default Products;

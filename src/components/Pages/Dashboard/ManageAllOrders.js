import React, { useEffect, useState, lazy } from "react";
import Product from "../Home/Product";
import ReactHelmet from "../Shared/ReactHelmet/ReactHelmet";
// import Loading from "../Shared/Loading";
// const Product = lazy(() => import('../Home/Product'));
const Loading = React.lazy(() => import('../Shared/Loading'));const ManageAllOrders = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://manufacture-developement-server.onrender.com/product")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      });
  }, []);
  return (
    <div id="service" className="container mx-auto my-2 ">
      <ReactHelmet title="Manage All Orders"></ReactHelmet>
      <div className="section-content">
        <h2 className="text-center">
          <p className="text-sm md:text-2xl py-2">
            Manage All Services {services.length}
          </p>
        </h2>
      </div>

      <div className="pt-4 px-7">
        {loading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {services?.map((service) => (
              <Product key={service._id} service={service} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageAllOrders;

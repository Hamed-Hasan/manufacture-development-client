import React, { lazy } from 'react';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import ReactHelmet from "../Shared/ReactHelmet/ReactHelmet";
// import CheckoutForm from "./CheckoutForm"
const Loading = React.lazy(() => import('../Shared/Loading'));const CheckoutForm = React.lazy(() => import('./CheckoutForm'));
// import Loading from "../Shared/Loading";


const stripePromise = loadStripe(
  "pk_test_51L0hFUH4hSrnXTFHAcZamvIpK6jvddZlBkCnTBaKPhikEV9PqfWiTBikVQG5tA5PflJT43luffrVPAOitae0Cj5j00FuuwU3qb"
);

const Payment = () => {
  const { id } = useParams();
  const url = `https://manufacture-developement-server.onrender.com/order/${id}`;

  const { data: order, isLoading } = useQuery(["order", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  console.log(order)

  if (isLoading) {
    return<React.Suspense fallback={<Loading/>}/>;
  }

  return (
    <div className="container mx-auto px-28">
      <ReactHelmet title="Payments"></ReactHelmet>
      <div className="md:flex  items-center justify-center gap-16">
        <div className="card  w-full bg-base-100 shadow-xl my-12">
          <div className="card-body">
            <p className="text-left text-success font-bold">
              Hello, {order.userName}
            </p>
            <h2 className="card-title text-left">
              Please Pay for{" "}
              <span className="text-green-600">{order.productName}</span>
            </h2>
            <p className="text-left ">
              Your Order Address:{" "}
              <span className="text-orange-700">{order.address}</span>{" "}
            </p>
            <p className="text-left">
              Your Order Quantity:{" "}
              <span className="text-orange-700 ">
                {" "}
                OrderQuantity {order.orderQuantity}
              </span>{" "}
            </p>
            <p className="text-left">Please pay: ${order.price}</p>
          </div>
        </div>
        <div className="card w-full shadow-2xl bg-base-100">
          <div className="card-body">
            <Elements stripe={stripePromise}>
              <React.Suspense fallback={<Loading/>}>
              <CheckoutForm order={order} />
              </React.Suspense>
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

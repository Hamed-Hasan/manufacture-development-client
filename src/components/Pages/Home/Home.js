import React, { lazy } from "react";
import Loading from "../Shared/Loading";
import ReactHelmet from "../Shared/ReactHelmet/ReactHelmet";
const ManageReview = React.lazy(() => import('../Dashboard/ManageReview'));
const Banner = React.lazy(() => import('./Banner'));
const BusinessSummery = React.lazy(() => import('./BusinessSummery'));
const ContactUs = React.lazy(() => import('./ContactUs'));
const Products = React.lazy(() => import('./Products'));
const Services = React.lazy(() => import('./Services'));
const Technology = React.lazy(() => import('./Technology/Technology'));

const Home = () => {
  return (
    <div>
      <ReactHelmet title="Home"></ReactHelmet>
      
      <React.Suspense fallback={<Loading/>}>
      <Banner />
      <Products />
      <Technology />
      <Services />
      <BusinessSummery />
      <ManageReview />
      <ContactUs />
      </React.Suspense>
    </div>
  );
};

export default Home;

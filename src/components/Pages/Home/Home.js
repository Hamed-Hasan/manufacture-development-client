import React, { lazy } from "react";
import ManageReview from "../Dashboard/ManageReview";
import Banner from "./Banner";
import BusinessSummery from "./BusinessSummery";
import ContactUs from "./ContactUs";
import Products from "./Products";
import Services from "./Services";
import Technology from "./Technology/Technology";
import ReactHelmet from "../Shared/ReactHelmet/ReactHelmet";

// const ManageReview = lazy(() => import('../Dashboard/ManageReview'));
// const Banner = lazy(() => import('./Banner'));
// const BusinessSummery = lazy(() => import('./BusinessSummery'));
// const ContactUs = lazy(() => import('./ContactUs'));
// const Products = lazy(() => import('./Products'));
// const Services = lazy(() => import('./Services'));
// const Technology = lazy(() => import('./Technology/Technology'));

const Home = () => {
  return (
    <div>
      <ReactHelmet title="Home"></ReactHelmet>
      
      <Banner />
      <Products />
      <Technology />
      <Services />
      <BusinessSummery />
      <ManageReview />
      <ContactUs />
    </div>
  );
};

export default Home;

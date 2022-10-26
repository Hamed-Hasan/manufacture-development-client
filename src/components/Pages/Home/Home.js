import React, { lazy } from "react";
import ReactHelmet from "../Shared/ReactHelmet/ReactHelmet";
// const ManageReview = lazy(() => import('../Dashboard/ManageReview'));
// const Banner = lazy(() => import('./Banner'));
// const BusinessSummery = lazy(() => import('./BusinessSummery'));
// const ContactUs = lazy(() => import('./ContactUs'));
// const Products = lazy(() => import('./Products'));
// const Services = lazy(() => import('./Services'));
// const Technology = lazy(() => import('./Technology/Technology'));
import Banner from "./Banner";
import Technology from "./Technology/Technology";
import Services from "./Services";
import BusinessSummery from "./BusinessSummery";
import ManageReview from "../Dashboard/ManageReview";
import ContactUs from "./ContactUs";
import Products from "./Products";

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

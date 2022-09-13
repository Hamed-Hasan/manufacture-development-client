import React from "react";
import ManageReview from "../Dashboard/ManageReview";
import Banner from "./Banner";
import BusinessSummery from "./BusinessSummery";
import ContactUs from "./ContactUs";
import Products from "./Products";
import Services from "./Services";
import Technology from "./Technology/Technology";
import ReactHelmet from "../Shared/ReactHelmet/ReactHelmet";


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

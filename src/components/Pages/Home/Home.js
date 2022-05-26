import React from 'react';
import ManageReview from '../Dashboard/ManageReview';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import ContactUs from './ContactUs';
import Products from './Products';
import Services from './Services';


const Home = () => {
    return (
        <div>
           <Banner/>
        <Products/>
          <Services/>
           <BusinessSummery/>
           <ManageReview/>
           <ContactUs/>
        </div>
    );
};

export default Home;
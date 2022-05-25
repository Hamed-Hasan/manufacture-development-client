import React from 'react';
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
           <ContactUs/>
        </div>
    );
};

export default Home;
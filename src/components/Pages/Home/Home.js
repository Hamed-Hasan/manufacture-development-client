import React from 'react';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import ContactUs from './ContactUs';

const Home = () => {
    return (
        <div>
           <Banner/>
           <BusinessSummery/>
           <ContactUs/>
        </div>
    );
};

export default Home;
import React from 'react';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import ContactUs from './ContactUs';
import Services from './Services';


const Home = () => {
    return (
        <div>
           <Banner/>
        
          <Services/>
           <BusinessSummery/>
           <ContactUs/>
        </div>
    );
};

export default Home;
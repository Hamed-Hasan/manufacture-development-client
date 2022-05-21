import React from 'react';
import './Services.css'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
const Services = ({service}) => {
    return (
       
    <div className='mx-auto py-24 hidden md:block' style={{maxWidth: "1400px"}}>
        <h1 className='md:text-6xl text-center py-6'>The Best Technologies Catagories</h1>
             <Swiper
        slidesPerView={4}
        spaceBetween={20}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
                modules={[Autoplay, Pagination, Navigation]}

        pagination={{
          clickable: true,
        }}
    
        className="mySwiper"
      >
        <SwiperSlide>
        <div class="wrapper">
      <div class="card front-face">
         <img src="https://images.unsplash.com/photo-1602837385569-08ac19ec83af?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=326"/>
      </div>
      <div class="card back-face">
         <img src="https://images.unsplash.com/photo-1555617981-dac3880eac6e?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870"/>
         <div class="info">
            <div class="title">
            Acer
            </div>
            <p>
            Taiwan<br/>Aspire, Enduro, Extensa, Ferrari, Nitro, Predator, Swift, Spin, Switch, TravelMate
            </p>
         </div>

      </div>
   </div>
        </SwiperSlide>
        <SwiperSlide>  <div class="wrapper">
      <div class="card front-face">
         <img src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387"/>
      </div>
      <div class="card back-face">
         <img src="https://images.unsplash.com/photo-1555618565-9f2b0323a10d?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870"/>
         <div class="info">
            <div class="title">
            AGB Supreme Technology
            </div>
            <p>
            India <br/>	Octev Series, Tiara, Orion
            </p>
         </div>

      </div>
   </div></SwiperSlide>
        <SwiperSlide>  <div class="wrapper">
      <div class="card front-face">
         <img src="https://images.unsplash.com/photo-1551739440-5dd934d3a94a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464"/>
      </div>
      <div class="card back-face">
         <img src="https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870"/>
         <div class="info">
            <div class="title">
            Alienware
            </div>
            <p>
            United States<br/>X15, X16, M15, Area-51m R2, 13, 14, 15, 17, 18
            </p>
         </div>

      </div>
   </div></SwiperSlide>
        <SwiperSlide>  <div class="wrapper">
      <div class="card front-face">
         <img src="https://images.unsplash.com/photo-1563796021847-59711ad1dbd5?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387"/>
      </div>
      <div class="card back-face">
         <img src="https://images.unsplash.com/photo-1573053986275-840ffc7cc685?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387"/>
         <div class="info">
            <div class="title">
            Bmax
            </div>
            <p>
            China <br/>Nirvana, Excalibur
            </p>
         </div>

      </div>
   </div></SwiperSlide>
        <SwiperSlide>  <div class="wrapper">
      <div class="card front-face">
         <img src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464"/>
      </div>
      <div class="card back-face">
         <img src="https://images.unsplash.com/photo-1548092372-6fa982d00458?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870"/>
         <div class="info">
            <div class="title">
            Eluktronics
            </div>
            <p>
            United States<br/>Prometheus XVII, MAG-15, MAG-15R, MECH-15 G3, MAX-15, MAX-17
            </p>
         </div>

      </div>
   </div></SwiperSlide>
        <SwiperSlide>  <div class="wrapper">
      <div class="card front-face">
         <img src="https://images.unsplash.com/photo-1596697939537-bf55495f7630?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387"/>
      </div>
      <div class="card back-face">
         <img src="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435"/>
         <div class="info">
            <div class="title">
            Hyundai Technology	
            </div>
            <p>
            United States<br/>Flip, book, flipnote, thinnote
            </p>
         </div>

      </div>
   </div></SwiperSlide>
        
      </Swiper>
    
    </div>
    );
};

export default Services;
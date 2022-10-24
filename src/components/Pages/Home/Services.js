import React from "react";
import "./Services.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

import service1 from "../../assets/services/service1.png"
import service2 from "../../assets/services/service2.png"
import service3 from "../../assets/services/service3.png"
import service4 from "../../assets/services/service4.png"
import service5 from "../../assets/services/service5.png"
import service6 from "../../assets/services/service6.png"
import service7 from "../../assets/services/service7.png"
import service8 from "../../assets/services/service8.png"
import service9 from "../../assets/services/service9.png"
import service10 from "../../assets/services/service10.png"
import service11 from "../../assets/services/service11.png"
import service12 from "../../assets/services/service12.png"

const Services = ({ service }) => {
  return (
    <div
      className="mx-auto py-24 hidden md:block"
      style={{ maxWidth: "1400px" }}
    >
      <h1 className="md:text-6xl text-center py-6 mb-5" data-aos="fade-right"
     data-aos-duration="2000">
        The Best Technologies Catagories
      </h1>
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
        data-aos="zoom-in"
     data-aos-duration="3000"
      >
        <SwiperSlide>
          <div className="wrapper">
            <div className="card front-face">
              <img src={service1} />
            </div>
            <div className="card back-face">
              <img src={service2} />
              <div className="info">
                <div className="title">Acer</div>
                <p>
                  Taiwan
                  <br />
                  Aspire, Enduro, Extensa, Ferrari, Nitro, Predator, Swift,
                  Spin, Switch, TravelMate
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="wrapper">
            <div className="card front-face">
              <img src={service3} />
            </div>
            <div className="card back-face">
              <img src={service4} />
              <div className="info">
                <div className="title">AGB Supreme Technology</div>
                <p>
                  India <br /> Octev Series, Tiara, Orion
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="wrapper">
            <div className="card front-face">
              <img src={service5} />
            </div>
            <div className="card back-face">
              <img src={service6} />
              <div className="info">
                <div className="title">Alienware</div>
                <p>
                  United States
                  <br />
                  X15, X16, M15, Area-51m R2, 13, 14, 15, 17, 18
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="wrapper">
            <div className="card front-face">
              <img src={service7} />
            </div>
            <div className="card back-face">
              <img src={service8} />
              <div className="info">
                <div className="title">Bmax</div>
                <p>
                  China <br />
                  Nirvana, Excalibur
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="wrapper">
            <div className="card front-face">
              <img src={service9} />
            </div>
            <div className="card back-face">
              <img src={service10} />
              <div className="info">
                <div className="title">Eluktronics</div>
                <p>
                  United States
                  <br />
                  Prometheus XVII, MAG-15, MAG-15R, MECH-15 G3, MAX-15, MAX-17
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="wrapper">
            <div className="card front-face">
              <img src={service11} />
            </div>
            <div className="card back-face">
              <img src={service12} />
              <div className="info">
                <div className="title">Hyundai Technology</div>
                <p>
                  United States
                  <br />
                  Flip, book, flipnote, thinnote
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Services;

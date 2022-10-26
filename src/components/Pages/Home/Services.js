import React from "react";
import "./Services.css";
import { Swiper, SwiperSlide } from "swiper/react";
import 'lazysizes';
// import a plugin
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
import service1 from "../../assets/services/service1.webp"
import service2 from "../../assets/services/service2.webp"
import service3 from "../../assets/services/service3.webp"
import service4 from "../../assets/services/service4.webp"
import service5 from "../../assets/services/service5.webp"
import service6 from "../../assets/services/service6.webp"
import service7 from "../../assets/services/service7.webp"
import service8 from "../../assets/services/service8.webp"
import service9 from "../../assets/services/service9.webp"
import service10 from "../../assets/services/service10.webp"
import service11 from "../../assets/services/service11.webp"
import service12 from "../../assets/services/service12.webp"

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
              <img data-sizes="auto" data-src={service1} class="lazyload"  />
            </div>
            <div className="card back-face">
              <img data-sizes="auto" data-src={service2} class="lazyload" />
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
              <img data-sizes="auto" data-src={service3} class="lazyload"  />
            </div>
            <div className="card back-face">
              <img data-sizes="auto" data-src={service4} class="lazyload"  />
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
              <img data-sizes="auto" data-src={service5} class="lazyload"  />
            </div>
            <div className="card back-face">
              <img data-sizes="auto" data-src={service6} class="lazyload"  />
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
              <img data-sizes="auto" data-src={service7} class="lazyload"  />
            </div>
            <div className="card back-face">
              <img data-sizes="auto" data-src={service8} class="lazyload"  />
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
              <img data-sizes="auto" data-src={service9} class="lazyload"  />
            </div>
            <div className="card back-face">
              <img data-sizes="auto" data-src={service10} class="lazyload"  />
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
              <img data-sizes="auto" data-src={service11} class="lazyload"  />
            </div>
            <div className="card back-face">
              <img data-sizes="auto" data-src={service12} class="lazyload"  />
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

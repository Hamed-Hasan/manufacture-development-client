import React from "react";
import tech from "../../../assets/images/tech.webp"
const Technology = () => {
  return (
    <div class="py-16 bg-white">  
    <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div class="md:5/12 lg:w-5/12"data-aos="fade-right"
     data-aos-duration="1500" >
            <img src={tech} alt="image" loading="lazy"/>
          </div>
          <div class="md:7/12 lg:w-6/12" data-aos="fade-right"
     data-aos-duration="2000">
            <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">Nuxt development is carried out by passionate developers</h2>
            <p class="mt-6 text-gray-600">Converting these raw materials into something more useful adds value. This added value increases the price of finished products, making manufacturing a very profitable part of the business.!</p>
            <p class="mt-4 text-gray-600">  chain. Some people specialize in the skills required to manufacture goods, while others provide the funds that businesses need to purchase the tools and materials</p>
          </div>
        </div>
    </div>
  </div>
  );
};

export default Technology;

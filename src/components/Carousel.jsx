import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = () => (
  <div className="w-full h-[50vh] mx-auto overflow-hidden">
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      modules={[Navigation, Pagination, Autoplay]}
    >
      <SwiperSlide>
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Beauty/GW/Jupiter/KSD/PEA/Updated/Phase3/Phase3b/929712._CB542298789_.png"
          alt="Haircut 1"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/sthaneka/Alphonsa/GW/NOV/BAU/GW_HERO_PC_1_1x._CB542130280_.jpg"
          alt="Offer 2"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Media/BAU/PC_Hero_2x-toys_1._CB582765723_.jpg"
          alt="Offer 3"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
    </Swiper>
  </div>
);

export default Carousel;

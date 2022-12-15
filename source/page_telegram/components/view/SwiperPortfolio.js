import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow } from 'swiper';

import CardWebApp from "./CardWebApp";

import 'swiper/css';
import 'swiper/css/pagination';

export default function Gallery(props) {
  return (
    <Swiper
    autoHeight={true}
    slidesPerView={2}
    pagination={true}
    modules={[Pagination]}
    >
      <SwiperSlide><CardWebApp/></SwiperSlide>
      <SwiperSlide><CardWebApp/></SwiperSlide>
      <SwiperSlide><CardWebApp/></SwiperSlide>
      <SwiperSlide><CardWebApp/></SwiperSlide>

    </Swiper>
  );
}
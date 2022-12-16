import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow } from 'swiper';

import CardWebApp from "./CardWebApp";

import 'swiper/css';
import 'swiper/css/pagination';

export default function Gallery(props) {
  return (
    <Swiper
    effect={"coverflow"}
    autoHeight={true}
    centeredSlides={true}
    slidesPerView={"auto"}
    coverflowEffect={{
      rotate: 50,
      stretch: 700,
      depth: 300,
      modifier: 1,
      slideShadows: false,
    }}
    pagination={true}
    modules={[EffectCoverflow, Pagination]}
    >
      <SwiperSlide><CardWebApp/></SwiperSlide>
      <SwiperSlide><CardWebApp/></SwiperSlide>
      <SwiperSlide><CardWebApp/></SwiperSlide>
      <SwiperSlide><CardWebApp/></SwiperSlide>

    </Swiper>
  );
}
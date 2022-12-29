import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow } from 'swiper';

import CardWebApp from "./CardWebApp";

import 'swiper/css';
import 'swiper/css/pagination';

export default function Gallery() {

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="w-8 h-8 bg-sky-500 rounded-[5px] ' + className + '"></span>';
    },
  };
  return (
    <Swiper
    className={'hidden laptop:block'}
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
      pagination={pagination}
      modules={[EffectCoverflow, Pagination]}
    >
      <SwiperSlide><CardWebApp /></SwiperSlide>
      <SwiperSlide><CardWebApp /></SwiperSlide>
      <SwiperSlide><CardWebApp /></SwiperSlide>
      <SwiperSlide><CardWebApp /></SwiperSlide>

    </Swiper>
  );
}
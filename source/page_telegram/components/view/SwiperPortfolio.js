import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import CardWebApp from "./CardWebApp";

import 'swiper/css';
import 'swiper/css/pagination';

export default function Gallery() {

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="w-4 h-4 bg-sky-500 rounded-[2px] ' + className + '"></span>';
    },
  };

  return (

    <Swiper
      autoHeight={true}
      slidesPerView={1.5}
      spaceBetween={30}

      pagination={pagination}
      modules={[Pagination]}>

      <SwiperSlide><CardWebApp /></SwiperSlide>
      <SwiperSlide><CardWebApp /></SwiperSlide>
      <SwiperSlide><CardWebApp /></SwiperSlide>
      <SwiperSlide><CardWebApp /></SwiperSlide>

    </Swiper>
  );

}
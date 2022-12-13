import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

export default function Gallery(props) {
    return (
        <Swiper
        className="h-52"
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className="bg-sky-500">Slide 1</SwiperSlide>
      <SwiperSlide className="bg-sky-500">Slide 2</SwiperSlide>
      <SwiperSlide className="bg-sky-500">Slide 3</SwiperSlide>
      <SwiperSlide className="bg-sky-500">Slide 4</SwiperSlide>

    </Swiper>
    );
}
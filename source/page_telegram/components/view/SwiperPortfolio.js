import React from "react";

/**
 * Imports: Swiper library
 */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

/**
 * Imports: media
 */
import Symbol from '../../../common/components/view/Symbol';
import QrStub from '../../assets/media/web-app-one-qr.png'

/**
 * Imports: blocks
 */
import CardPortfolio from "./CardPortfolio";

function Gallery() {

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="w-8 h-8 bg-sky-500 rounded-[5px] ' + className + '"></span>';
    },
  };

  return (

    <Swiper
      breakpoints={{
        1550: {
          slidesPerView: 1.8,
        },
        1450: {
          slidesPerView: 1.65,
        },
        1350: {
          slidesPerView: 1.55,
        },
        1250: {
          slidesPerView: 1.45,
        },
        1024: {
          slidesPerView: 1.2,
        },
      }}
      autoHeight={true}
      slidesPerView={1.9}
      pagination={pagination}
      modules={[Pagination]}>

      <SwiperSlide>
        <CardPortfolio
          title='Бот-магазин'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
          budget={<span>100.000 <Symbol symbol='₽' /></span>}
          result={<span>100.000 <Symbol symbol='₽' /></span>}
          qr={QrStub} />
      </SwiperSlide>

      <SwiperSlide>
        <CardPortfolio
          title='Бот-магазин'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
          budget={<span>100.000 <Symbol symbol='₽' /></span>}
          result={<span>100.000 <Symbol symbol='₽' /></span>}
          qr={QrStub} />
      </SwiperSlide>

      <SwiperSlide>
        <CardPortfolio
          title='Бот-магазин'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
          budget={<span>100.000 <Symbol symbol='₽' /></span>}
          result={<span>100.000 <Symbol symbol='₽' /></span>}
          qr={QrStub} />
      </SwiperSlide>

      <SwiperSlide>
        <CardPortfolio
          title='Бот-магазин'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
          budget={<span>100.000 <Symbol symbol='₽' /></span>}
          result={<span>100.000 <Symbol symbol='₽' /></span>}
          qr={QrStub} />
      </SwiperSlide>
      <SwiperSlide>

        <div className="SWIPER_FIX_STUB w-[50px] h-[1px]">

        </div>
      </SwiperSlide>

    </Swiper>
  );

}

export default Gallery;
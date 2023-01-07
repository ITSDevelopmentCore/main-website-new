import React from "react";

/**
 * Imports: Swiper library
 */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/core';
import 'swiper/css';
import 'swiper/css/pagination';

/**
 * Imports: media
 */
import Symbol from '../../../common/components/view/Symbol';
import QrStub from '../../assets/media/web-app-one-qr.png'
import QrMoreThanWork from '../../assets/media/qr_moreThanWork.jpg';
import QrSoftWareShop from '../../assets/media/qr_softWareShop.jpg';
import QrSmm from '../../assets/media/qr_smm.jpg';
import QrAndy from '../../assets/media/qr_andy.jpg';
import QrBaksMan from '../../assets/media/qr_baksMan.jpg';

/**
 * Imports: blocks
 */
import CardPortfolio from "./CardPortfolio";
import MoreThenWork from "../../assets/media/screenshot_portfolio-moreThenWork_bot.png";
import Softwareshop from "../../assets/media/screenshot_portfolio-softwareshop_bot.png";
import SmmBot from "../../assets/media/screenshot_portfolio-smm_bot.png";
import Andy from "../../assets/media/screenshot_portfolio-Andy_bot.png";
import Banksman from "../../assets/media/screenshot_portfolio-Baksman_bot.png";



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
      slidesPerView={1.05}
      pagination={pagination}
      modules={[Pagination]}>

      <SwiperSlide>
        <CardPortfolio
          title='Больше, чем работа'
          description='
          Разработка бота для проекта "Больше, чем работа" для Ростуризм '
          budget={<span>100.000 <Symbol symbol='₽' /></span>}
          result={<span>100.000 <Symbol symbol='₽' /></span>}
          screenshot={MoreThenWork}
          qr={QrMoreThanWork} 
          link='https://t.me/Morethanjob_bot'/>
      </SwiperSlide>

      <SwiperSlide>
        <CardPortfolio
          title='Softwareshop'
          description='
          Бот - магазин программного обеспечения'
          budget={<span>100.000 <Symbol symbol='₽' /></span>}
          result={<span>100.000 <Symbol symbol='₽' /></span>}
          screenshot={Softwareshop}
          qr={QrSoftWareShop} 
          link='https://t.me/software_shop'/>
      </SwiperSlide>

      <SwiperSlide>
        <CardPortfolio
          title='SMM Бот'
          description='
          Бот для сервиса продвижений в социальных сетях'
          budget={<span>100.000 <Symbol symbol='₽' /></span>}
          result={<span>100.000 <Symbol symbol='₽' /></span>}
          screenshot={SmmBot}
          qr={QrSmm} 
          link='https://t.me/Nakrutka_Artemkabot'/>
      </SwiperSlide>

      <SwiperSlide>
        <CardPortfolio
          title='Andy'
          description='
          Бот для частной школы английского языка'
          budget={<span>100.000 <Symbol symbol='₽' /></span>}
          result={<span>100.000 <Symbol symbol='₽' /></span>}
          screenshot={Andy}
          qr={QrAndy} 
          link='https://t.me/AndyRobot'/>
      </SwiperSlide>

      <SwiperSlide>
        <CardPortfolio
          title='Banksman'
          description='
          Бот - для сервиса по безопасному обмену валют'
          budget={<span>100.000 <Symbol symbol='₽' /></span>}
          result={<span>100.000 <Symbol symbol='₽' /></span>}
          screenshot={Banksman}
          qr={QrBaksMan} 
          link='https://t.me/Baksman_wallet_bot?start=15221872981744'/>
      </SwiperSlide>


    </Swiper>
  );

}

export default Gallery;
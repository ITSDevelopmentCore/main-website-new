import React from "react";
import Arrow from '../../assets/media/Arrow_home.svg';
import CardImg from '../view/CardImg';


export default function BlockPreview() {

    return (
        <section>
            <h2 className="font-bold  text-6xl mb-[47px] flex">its.dev
                <img className="ml-[30px] mt-[15px]" src={Arrow} />
            </h2>
            <CardImg/>

            <div className="desktop:inline-flex  space-x-9 mt-[31px] 
            tablets:flex-row">
                <div className="w-[350px] h-[118px] border-2 rounded-[100px]">
                  <p className="text-xl font-bold pt-[45px] pb-[47px] pl-[63px]">
                  Работаем с 2019 года
                  </p>
                </div>
                <div className="w-[350px] h-[118px] border-2 rounded-[100px]">
                  <p className="text-xl font-bold pt-[32px] pb-[47px] pl-[78px] pr-[15%]">
                  Заказчики по всей России и Европе
                  </p>
                </div>
                <div className="w-[350px] h-[118px] border-2 rounded-[100px]">
                  <p className="text-xl font-bold pt-[46px] pb-[46px] pl-[46px] ">
                  50 завершенных проектов
                  </p>
                </div>
                <div className="w-[350px] leading-[23px] border-2 rounded-[100px]">
                  <p className=" font-bold text-center py-[24px] px-[34px]">
                  Самые высокие темпы развития среди Digital агенств по версии “Рейтинг рунета”
                  </p>
                </div>
            </div>


        </section>
    )


}
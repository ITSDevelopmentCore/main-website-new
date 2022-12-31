import React from "react";
import TimeworkLight from '../../assets/media/2019-img.png';
import PlanetLight from '../../assets/media/Rus&euro.png';
import ProjectsLight from '../../assets/media/50projects.png';
import DigitalLight from '../../assets/media/Digital.png';
import TimeworkDark from '../../assets/media/2019-imgDark.png';
import PlanetDark from '../../assets/media/Rus&euroDark.png';
import ProjectsDark from '../../assets/media/50projectsDark.png';
import DigitalDark from '../../assets/media/DigitalDark.png';
import { isTailwindDarkThemeEnabled } from "../../../common/scripts/themeScripts";


export default function CardImg() {

    return (
        <div className=" w-full flex flex-col flex-wrap items-center 
        laptop:items-center 
        desktop:inline-flex  desktop:space-x-9 
        large:space-x-7
        laptop:space-x-6
        tablets:space-x-1.5
    tablets:flex-row ">
            <div className="desktop:space-y-8 space-y-6 mb-[25px] 
            ">
                <div className="w-[343px] h-[350px]
               
           bg-white rounded-[50px] 
dark:bg-slate-800">
                    <img className={' pl-[46px] pt-[25%]'}
                        src={isTailwindDarkThemeEnabled() ? TimeworkDark : TimeworkLight} />
                </div>
                <div className="w-[343px] h-[118px] border-2 rounded-[100px] ">
                    <p className="text-xl font-bold pt-[45px] pb-[47px] pl-[63px]">
                        Работаем с 2019 года
                    </p>
                </div>
            </div>
            <div className="desktop:space-y-8 space-y-6 mb-[25px]">
                <div className=" h-[343px] 
                bg-white rounded-[50px]
dark:bg-slate-800">
                    <img className="pt-[15%] pl-[7px]"
                        src={isTailwindDarkThemeEnabled() ? PlanetDark : PlanetLight} />

                </div>
                <div className="w-[343px] h-[118px] border-2 rounded-[100px] ">
                    <p className="text-xl font-bold pt-[32px] pb-[47px] pl-[78px] pr-[15%]">
                        Заказчики по всей России и Европе
                    </p>
                </div>
            </div>
            <div className="desktop:space-y-8 space-y-6 mb-[25px]">
                <div className="w-[343px]  h-[343px] 
                bg-white rounded-[50px]
dark:bg-slate-800">
                    <img className="pt-[20%] pl-[15px]"
                        src={isTailwindDarkThemeEnabled() ? ProjectsDark : ProjectsLight} />
                </div>
                <div className="w-[343px] h-[118px]
                border-2 rounded-[100px] ">
                    <p className="text-xl font-bold pt-[46px] pb-[46px] pl-[46px] ">
                        50 завершенных проектов
                    </p>
                </div>
            </div>
            <div className="desktop:space-y-8 space-y-6 mb-[25px]">

                <div className="w-[343px] h-[343px] 
                 bg-white rounded-[50px]
dark:bg-slate-800">
                    <img className="p-[15%]"
                        src={isTailwindDarkThemeEnabled() ? DigitalDark : DigitalLight} />
                </div>
                <div className="w-[343px] leading-[19px] 
                border-2 rounded-[100px]">
                    <p className=" font-bold text-center py-[24px] px-[34px]">
                        Самые высокие темпы развития среди Digital агенств по версии “Рейтинг рунета”
                    </p>
                </div>
            </div>
        </div>
    )


}
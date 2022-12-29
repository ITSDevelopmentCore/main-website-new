import React from "react";
import TimeworkLight from '../../assets/media/2019-img.png';
import PlanetLight from '../../assets/media/Rus&euro.png';
import ProjectsLight from '../../assets/media/50projects.png';
import DigitalLight from '../../assets/media/Digital.png';
import TimeworkDark from '../../assets/media/2019-imgDark.png';
import PlanetDark from '../../assets/media/Rus&euroDark.png';
import ProjectsDark from '../../assets/media/50projectsDark.png';
import DigitalDark from '../../assets/media/DigitalDark.png';
import { isDarkThemeEnabled } from "../../../common/scripts/themeScripts";


export default function CardImg() {

    return (
        <div className="desktop:flex  desktop:space-x-9 
        large:flex
        large:space-x-7
        tablets:space-x-0 
    tablets:flex-row ">
            <div className="desktop:space-y-8 space-y-6 mb-[25px]">
                <div className="w-[350px] h-[350px]
           bg-white rounded-[50px] 
dark:bg-slate-800">
                    <img className={' pl-[46px] pt-[25%]'}
                        src={isDarkThemeEnabled() ? TimeworkDark : TimeworkLight} />
                </div>
                <div className="w-[350px] h-[118px] border-2 rounded-[100px] ">
                    <p className="text-xl font-bold pt-[45px] pb-[47px] pl-[63px]">
                        Работаем с 2019 года
                    </p>
                </div>
            </div>
            <div className="desktop:space-y-8 space-y-6 mb-[25px]">
                <div className="w-[350px] h-[350px] bg-white rounded-[50px]
dark:bg-slate-800">
                    <img className="pt-[15%] pl-[7px]"
                        src={isDarkThemeEnabled() ? PlanetDark : PlanetLight} />

                </div>
                <div className="w-[350px] h-[118px] border-2 rounded-[100px] ">
                    <p className="text-xl font-bold pt-[32px] pb-[47px] pl-[78px] pr-[15%]">
                        Заказчики по всей России и Европе
                    </p>
                </div>
            </div>
            <div className="desktop:space-y-8 space-y-6 mb-[25px]">
                <div className="w-[350px] h-[350px] bg-white rounded-[50px]
dark:bg-slate-800">
                    <img className="pt-[20%] pl-[15px]"
                        src={isDarkThemeEnabled() ? ProjectsDark : ProjectsLight} />
                </div>
                <div className="w-[350px] h-[118px] border-2 rounded-[100px] ">
                    <p className="text-xl font-bold pt-[46px] pb-[46px] pl-[46px] ">
                        50 завершенных проектов
                    </p>
                </div>
            </div>
            <div className="desktop:space-y-8 space-y-6 mb-[25px]">

                <div className="w-[350px] h-[350px] bg-white rounded-[50px]
dark:bg-slate-800">
                    <img className="p-[15%]"
                        src={isDarkThemeEnabled() ? DigitalDark : DigitalLight} />
                </div>
                <div className="w-[350px] leading-[23px] border-2 rounded-[100px]">
                    <p className=" font-bold text-center py-[24px] px-[34px]">
                        Самые высокие темпы развития среди Digital агенств по версии “Рейтинг рунета”
                    </p>
                </div>
            </div>
        </div>
    )


}
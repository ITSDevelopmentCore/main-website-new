import React from 'react';
import CardAdvantage from '../view/CardAdvantage';

/**
 * Imports: Media
 */
import { RiApps2Fill } from 'react-icons/ri';
import { BsGem } from 'react-icons/bs';
import { SiMusicbrainz } from 'react-icons/si';
import { RiServiceFill } from 'react-icons/ri';
import Award from '../../assets/media/award.svg'

/**
 * Imports: Components
 */
import Symbol from '../../../common/components/view/Symbol';

export default function BlockAdvantages() {


    return (
        <>
            <div className="mt-[85px]">

                <h2 className='text-title leading-title text-neutral-900 font-extrabold mb-12
                           dark:text-white'>
                    Преимущества
                </h2>

                <div className='hidden laptop:flex justify-between'>

                    <div className='basis-2/3 grid grid-cols-2 gap-11 mr-24 '>

                        <CardAdvantage
                            icon={<RiApps2Fill className='w-full h-full' />}
                            title={<span><span className='text-sky-500'>60<Symbol symbol='+' /></span><br />проектов</span>}
                            description={"Предприниматели по всей России и ближнему зарубежью доверяют нам."}>
                        </CardAdvantage>

                        <CardAdvantage
                            icon={<BsGem className='w-full h-full' />}
                            title={"Современное решение"}
                            description={"Telegram бот с приложением - современное бюджетное решение для любого бизнеса для вовлечения и увеличения конверсионности."}>
                        </CardAdvantage>

                        <CardAdvantage
                            icon={<SiMusicbrainz className='w-full h-full' />}
                            title={"Работа на результат"}
                            description={"Наша цель - оправдать все ожидания заказчика и дать ему преимущество на рынке."}>
                        </CardAdvantage>

                        <CardAdvantage
                            icon={<RiServiceFill className='w-full h-full' />}
                            title={"Безупречный сервис"}
                            description={"За годы мы отточили весь цикл разработки ПО, а наша поддержка работает как часы."}>
                        </CardAdvantage>

                    </div>

                    <div className={"grow award flex justify-center"}>
                        <p className='flex flex-col items-center w-1/2 text-center desktop:pt-[20%] laptop:scale-75 laptop:pt-[30%] desktop:scale-100'>
                            <span className='font-extrabold text-[100px] leading-[50px] text-sky-500'>4</span><br />
                            <span className='font-bold text-[30px] leading-[30px] text-sky-500'>место</span><br />
                            <span className='font-light text-[18px] leading-[18px] text-neutral-900 opacity-80'>в премии рунета «Digital Агентства»</span>
                        </p>
                    </div>

                </div>
            </div>

            <div className='laptop:hidden'>
                <div className="carousel p-4 space-x-4 bg-neutral rounded-box">
                    <div className="carousel-item">
                        <img src="https://placeimg.com/250/180/arch" className="rounded-box" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://placeimg.com/250/180/arch" className="rounded-box" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://placeimg.com/250/180/arch" className="rounded-box" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://placeimg.com/250/180/arch" className="rounded-box" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://placeimg.com/250/180/arch" className="rounded-box" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://placeimg.com/250/180/arch" className="rounded-box" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://placeimg.com/250/180/arch" className="rounded-box" />
                    </div>
                </div>
            </div>
        </>
    )
}


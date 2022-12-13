import React from 'react';
import CardAdvantage from '../view/CardAdvantage';

import { RiApps2Fill } from 'react-icons/ri';
import { BsGem } from 'react-icons/bs';
import { SiMusicbrainz } from 'react-icons/si';
import { RiServiceFill } from 'react-icons/ri';
import Symbol from '../../../common/components/Symbol';

import Award from '../../assets/media/award.svg'

export default function BlockAdvantages(props) {


    return (
        <div className="mt-[85px]">

            <h2 className='text-title leading-title text-neutral-900 font-extrabold mb-12
                           dark:text-white'>
                Преимущества
            </h2>

            <div className='flex justify-between'>

                <div className='grid grid-cols-2 gap-11 mr-[100px]'>
                    <CardAdvantage >
                        <RiApps2Fill className='text-sky-500 w-[58px] h-[58px] absolute top-[40px] right-[40px]' />
                        <h4 className='font-extrabold text-4xl leading-8 mb-6 text-neutral-900
                                     dark:text-white'>
                            <span className='text-sky-500'>60<Symbol symbol='+' /></span><br />проектов
                        </h4>
                        <p className='text-lg leading-6 opacity-60 text-neutral-900
                                      dark:text-white'>
                            Предприниматели по всей России и ближнему зарубежью доверяют нам.
                        </p>
                    </CardAdvantage>
                    <CardAdvantage >
                        <BsGem className='text-sky-500 w-[58px] h-[58px] absolute top-[40px] right-[40px]' />
                        <h4 className='font-extrabold text-4xl leading-8 mb-6 text-neutral-900
                                     dark:text-white'>
                            Современное решение
                        </h4>
                        <p className='text-lg leading-6 opacity-60 text-neutral-900
                                    dark:text-white'>
                            Telegram бот с приложением - современное бюджетное решение для любого бизнеса для вовлечения и увеличения конверсионности.
                        </p>
                    </CardAdvantage>
                    <CardAdvantage >
                        <SiMusicbrainz className='text-sky-500 w-[58px] h-[58px] absolute top-[40px] right-[40px]' />
                        <h4 className='font-extrabold text-4xl leading-8 mb-6 text-neutral-900
                                     dark:text-white'>
                            Работа на результат
                        </h4>
                        <p className='text-lg leading-6 opacity-60 text-neutral-900
                                    dark:text-white'>
                            Наша цель - оправдать все ожидания заказчика и дать ему преимущество на рынке.
                        </p>
                    </CardAdvantage>
                    <CardAdvantage >
                        <RiServiceFill className='text-sky-500 w-[58px] h-[58px] absolute top-[40px] right-[40px]' />
                        <h4 className='font-extrabold text-4xl leading-8 mb-6 text-neutral-900
                                     dark:text-white'>
                            Безупречный сервис
                        </h4>
                        <p className='text-lg leading-6 opacity-60 text-neutral-900
                                    dark:text-white'>
                            За годы мы отточили весь цикл разработки ПО, а наша поддержка работает как часы.
                        </p>
                    </CardAdvantage>
                </div>


                <div className={"grow h-[580px] award"}>
                    <div className='w-44 pt-11 mx-auto text-center'>
                        <span className='font-extrabold text-[108px] leading-[120px] text-sky-500'>4</span><br />
                        <span className='font-bold text-3xl leading-9 text-sky-500'>место</span><br />
                        <span className='font-light text-lg leading-6 text-neutral-900 opacity-80'>в премии рунета «Digital Агентства»</span>
                    </div>
                </div>

            </div>
        </div>
    )
}


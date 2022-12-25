import React from 'react';
import CardAdvantage from '../view/CardAdvantage';

/**
 * Imports: Media
 */
import { RiApps2Fill } from 'react-icons/ri';
import { BsGem } from 'react-icons/bs';
import { SiMusicbrainz } from 'react-icons/si';
import { RiServiceFill } from 'react-icons/ri';

/**
 * Imports: Components
 */
import Symbol from '../../../common/components/view/Symbol';

export default function BlockAdvantages() {


    return (
        <div className="mt-[85px]">

            <h2 className='text-title leading-title text-neutral-900 font-extrabold mb-12
                           dark:text-white'>
                Преимущества
            </h2>

            <div className='flex justify-between'>

                <div className='grid grid-cols-2 gap-11 mr-24 '>

                    <CardAdvantage
                        icon={<RiApps2Fill className='w-full h-full'/>}
                        title={<span><span className='text-sky-500'>60<Symbol symbol='+' /></span><br />проектов</span>}
                        description={"Предприниматели по всей России и ближнему зарубежью доверяют нам."}>
                    </CardAdvantage>

                    <CardAdvantage
                        icon={<BsGem className='w-full h-full'/>}
                        title={"Современное решение"}
                        description={"Telegram бот с приложением - современное бюджетное решение для любого бизнеса для вовлечения и увеличения конверсионности."}>
                    </CardAdvantage>
 
                    <CardAdvantage
                        icon={<SiMusicbrainz className='w-full h-full' />}
                        title={"Работа на результат"}
                        description={"Наша цель - оправдать все ожидания заказчика и дать ему преимущество на рынке."}>
                    </CardAdvantage>

                    <CardAdvantage
                        icon={<RiServiceFill className='w-full h-full'/>}
                        title={"Безупречный сервис"}
                        description={"За годы мы отточили весь цикл разработки ПО, а наша поддержка работает как часы."}>
                    </CardAdvantage>

                </div>

                <div className={"grow h-[580px] award "}>
                    <span className='font-extrabold text-[108px] leading-[120px] text-sky-500'>4</span><br />
                    <span className='font-bold text-3xl leading-9 text-sky-500'>место</span><br />
                    <span className='font-light text-lg leading-6 text-neutral-900 opacity-80'>в премии рунета «Digital Агентства»</span>
                </div>

            </div>
        </div>
    )
}


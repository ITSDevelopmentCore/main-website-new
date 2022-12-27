import React from 'react';
import { RiApps2Fill } from 'react-icons/ri';
import CardWebAppsMobile from '../view/CardWebAppsMobile';
import SwiperWebApps from '../view/SwiperWebApps'

export default function BlockAdvantages(props) {


    return (
        <section className="mt-[265px]">

            <h2 className={'mb-12 '
                + 'text-[28px] leading-[32px] text-neutral-900 font-extrabold text-center  '
                + 'laptop:text-left laptop:text-[46px] laptop:leading-[52px] '
                + 'large:text-[58px] large:leading-[62px] '
                + 'desktop:text-[64px] desktop:leading-[72px] '
                + 'dark:text-white'}>
                Telegram <span className='text-sky-500'>Web Apps</span>
            </h2>

            <p className={
                'w-full mb-16 text-center '
                + 'text-neutral-900 text-[18px] leading-8 opacity-60 '
                + 'laptop:w-[722px] laptop:text-left '
                + 'dark:text-white'}>
                Наши боты позволят колоссально снизить затраты на возвращение клиента и превращение его в постоянного.
                Мы автоматизируем процесс повторных конверсий для малого и среднего бизнеса путем
                добавления в Telegram всех Ваших клиентов наших ботов с приложениями.
                Имея уже готовое решение всегда под рукой - клиент даже не будет думать о заказе у Ваших конкурентов..
            </p>


            <SwiperWebApps />


            <div className='laptop:hidden'>
                <div className="carousel p-4 space-x-[29px] bg-neutral rounded-box">
                    <div className="carousel-item">
                        <CardWebAppsMobile
                            icon={<RiApps2Fill className='w-full h-full' />}
                            title={<span><span className='text-sky-500'>60<Symbol symbol='+' /></span><br />проектов</span>}
                            description={"Предприниматели по всей России и ближнему зарубежью доверяют нам."}>
                        </CardWebAppsMobile>
                    </div>
                    <div className="carousel-item">
                        <CardWebAppsMobile
                            icon={<RiApps2Fill className='w-full h-full' />}
                            title={<span><span className='text-sky-500'>60<Symbol symbol='+' /></span><br />проектов</span>}
                            description={"Предприниматели по всей России и ближнему зарубежью доверяют нам."}>
                        </CardWebAppsMobile>
                    </div>
                    <div className="carousel-item">
                        <CardWebAppsMobile
                            icon={<RiApps2Fill className='w-full h-full' />}
                            title={<span><span className='text-sky-500'>60<Symbol symbol='+' /></span><br />проектов</span>}
                            description={"Предприниматели по всей России и ближнему зарубежью доверяют нам."}>
                        </CardWebAppsMobile>
                    </div>
                    <div className="carousel-item">
                        <CardWebAppsMobile
                            icon={<RiApps2Fill className='w-full h-full' />}
                            title={<span><span className='text-sky-500'>60<Symbol symbol='+' /></span><br />проектов</span>}
                            description={"Предприниматели по всей России и ближнему зарубежью доверяют нам."}>
                        </CardWebAppsMobile>
                    </div>

                </div>
            </div>

        </section>
    )
}


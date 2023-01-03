/**
 * Imports : React
 */
import React from "react";
import CardService from "../view/CardService";

/**
 * Imports : Media
 */
import IllustrationServiceMobile from '../../assets/media/illustration_service-mobile.png';
import IllustrationServiceWeb from '../../assets/media/illustration_service-web.png';
import IllustrationServiceTelegram from '../../assets/media/illustration_service-telegram.png';
import IllustrationServiceMVP from '../../assets/media/illustration_service-mvp.png';


export default function BlockServices() {

    return (
        <section className={
            'mt-[145px] '
        }>

            <h2 className={
                'mb-[10px] '
                + 'text-[28px] leading-[42px] font-extrabold text-center '
                + 'laptop:text-[75px] laptop:leading-[85px] laptop:text-left '
                + 'desktop:text-[95px] desktop:leading-[105px]'}>
                Услуги
            </h2>

            <p className={
                'w-full mb-[50px] '
                + 'text-center text-[12px] leading-[16px] opacity-60 '
                + 'laptop:w-[722px] laptop:text-left '}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>

            <div className={'flex flex-col space-y-[15px] '}>

                <CardService
                    title={'Mobile разработка'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
                    image={IllustrationServiceMobile} />

                <CardService
                    title={'Web разработка'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
                    image={IllustrationServiceWeb} />

                <CardService
                    title={'Telegram разработка'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
                    image={IllustrationServiceTelegram} />

                <CardService
                    title={'Startup MVP'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
                    image={IllustrationServiceMVP} />

            </div>

        </section>
    )


}
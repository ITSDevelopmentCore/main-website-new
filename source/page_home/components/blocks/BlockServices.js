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
                + 'laptop:text-[46px] laptop:leading-[52px] laptop:text-left laptop:mb-[20px] laptop:w-[300px] '
                + 'large:text-[58px] large:leading-[66px] '
                + 'desktop:text-[64px] desktop:leading-[72px]'}>
                Услуги
            </h2>

            <p className={
                'mb-[50px] '
                + 'text-center opacity-60 '
                + 'laptop:text-left laptop:w-[300px] '}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>

            <div className={'flex flex-col space-y-[15px] '
        +'laptop:space-y-[40px]'}>

                <div className={
                    'flex flex-col laptop:flex-row laptop:justify-end laptop:space-x-[50px] laptop:space-y-0 space-y-[15px] '
                }>
                    <CardService
                        title={'Mobile разработка'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                        image={IllustrationServiceMobile} />

                    <CardService
                        title={'Web разработка'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                        image={IllustrationServiceWeb} />
                </div>

                <div className={
                    'flex flex-col laptop:flex-row laptop:justyfy-start laptop:space-x-[50px] laptop:space-y-0 space-y-[15px] '
                }>
                    <CardService
                        title={'Telegram разработка'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                        image={IllustrationServiceTelegram} />

                    <CardService
                        title={'Startup MVP'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                        image={IllustrationServiceMVP} />
                </div>

            </div>

        </section>
    )


}
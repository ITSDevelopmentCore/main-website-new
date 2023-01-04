/**
 * Imports : React
 */
import React from "react";
import CardNews from "../view/CardNews";

/**
 * Imports : media
 */
import STUB_news from '../../assets/media/STUB_news.png';
import STUB_blog from '../../assets/media/STUB_blog.png';
import IcYoutube from "../../assets/media/icons/IcYoutube";
import { AiFillPlayCircle } from 'react-icons/ai';

export default function BlockNews() {

    return (
        <section className={
            'my-[145px]'
        }>

            <h2 className={
                'mb-[20px] '
                + 'text-[28px] leading-[42px] font-extrabold text-center '
                + 'laptop:text-[75px] laptop:leading-[85px] laptop:text-left '
                + 'desktop:text-[95px] desktop:leading-[105px]'}>
                Новости
            </h2>

            <div className={
                'flex flex-col p-[25px] space-y-[20px] mb-[44px] '
                + 'bg-white rounded-[20px] '
                + 'dark:bg-card-surface dark:border dark:border-slate-800'}>

                <h4 className="flex justify-start items-center space-x-[10px]">
                    <IcYoutube />
                    <span className="text-[14px]">Видеоблог</span>
                </h4>

                <p className={'opacity-60'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </p>

                <div className="relative">
                    <img className=' w-full' src={STUB_blog} />
                    <div className="bg-white opacity-25 rounded-[10px] flex items-center justify-center absolute w-full h-full top-0 bottom-0 right-0 left-0">
                    </div>


                    <AiFillPlayCircle className="text-white w-[30px] h-[30px] z-20 absolute top-[45%] left-[45%] right-[45%] bottom-[45%]" />

                </div>

                <span className={'text-[12px] leading-[17px] opacity-60 '}>13.02.22</span>

            </div>

            <div className={'flex flex-col space-y-[15px] '}>

                <CardNews
                    img={STUB_news}
                    title={'Обновление сайта its.dev'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'}
                />

                <CardNews
                    img={STUB_news}
                    title={'Обновление сайта its.dev'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'}
                />

                <CardNews
                    img={STUB_news}
                    title={'Обновление сайта its.dev'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'}
                />

            </div>

        </section>
    )


}
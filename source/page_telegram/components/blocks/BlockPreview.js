import React from "react"

export default function BlockPreview() {

    return (
        <div className="flex items-center justify-between pt-24">

            <div className="flex flex-col relative basis-[728px]">

                <div className="font-extrabold text-[83px] leading-[95px] z-10 mb-11">
                    <span className="dark:text-white text-neutral-900">Разработка<br /></span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-sky-300 to-sky-500">Telegram-ботов</span>
                </div>

                <div className="font-extrabold text-[83px] leading-[95px] absolute top-1  
                                dark:invisible">
                    <span className="text-neutral-500 blur-sm">Разработка<br /></span>
                    <span className="text-neutral-500 blur-sm">Telegram-ботов</span>
                </div>

                <div className="text-neutral-900 text-[18px] leading-8
                            dark:text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                </div>

            </div>

            <div className="flex">

                <div className="mockup h-[666px] w-[333px]">

                </div>

                <div className="flex flex-col bg-white rounded-[50px] text-neutral-900 py-[44px] px-[22px] w-[195px] ml-20 my-auto
                dark:bg-[#1A232C] dark:text-white dark:border dark:border-slate-800">

                    <div className="text-[70px] leading-[76px] text-center">2</div>
                    <p className="font-base text-lg leading-6 opacity-60 text-center">Года на рынке</p>
                    <div className="h-[2px] w-full bg-neutral-900 opacity-10 my-10
                    dark:bg-white"></div>

                    <div className="text-[70px] leading-[76px] text-center">100</div>
                    <p className="font-base text-lg leading-6 opacity-60 text-center">Готовых проектов</p>
                    <div className="h-[2px] w-full bg-neutral-900 opacity-10 my-10
                    dark:bg-white"></div>

                    <div className="text-[70px] leading-[76px] text-center">20т</div>
                    <p className="font-base text-lg leading-6 opacity-60 text-center">Минимальный бюджет</p>
                </div>

            </div>

        </div>
    );

}
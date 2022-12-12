import React from "react"

export default function BlockPreview() {

    return (
        <div className="flex items-center">

            <div className="flex flex-col relative basis-[50%]">

                <div className="font-extrabold text-[83px] leading-[95px] z-10 mb-11">
                    <span className="dark:text-white text-neutral-900">Разработка<br /></span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-sky-300 to-sky-500">Telegram-ботов</span>
                </div>

                <div className="font-extrabold text-[83px] leading-[95px] absolute top-1  
                                dark:invisible">
                    <span className="text-neutral-500 blur-sm">Разработка<br /></span>
                    <span className="text-neutral-500 blur-sm">Telegram-ботов</span>
                </div>

                <div className="text-neutral-900 text-base leading-8
                            dark:text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                </div>

            </div>


            <div className="flex">
                <div className="mockup h-[600px] w-[300px]">

                </div>
            </div>

        </div>
    );

}
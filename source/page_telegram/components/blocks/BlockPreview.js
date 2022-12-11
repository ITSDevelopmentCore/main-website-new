import React from "react"

export default function Header() {

    return (
        <div className="flex relative">

            <div className="font-extrabold text-8xl z-10">
                <span className="dark:text-white text-neutral-900">Разработка<br/></span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-sky-300 to-sky-500">Telegram-ботов</span>
            </div>

            <div className="dark:invisible font-extrabold text-8xl absolute top-1">
                <span className="text-neutral-500 blur-sm">Разработка<br/></span>
                <span className="text-neutral-500 blur-sm">Telegram-ботов</span>
            </div>

        </div>
    );

}
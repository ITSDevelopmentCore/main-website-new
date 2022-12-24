import React from "react";

import { BsFillTelephoneFill } from 'react-icons/bs';
import IcMenuLight from '../../assets/icons/ic_menu-light.svg';
import IcMenuDark from '../../assets/icons/ic_menu-dark.svg';

import Symbol from '../view/Symbol';
import DropdownMenu from "../view/DropdownMenu";
import ThemeSwitcher from "../view/ThemeSwitcher";

/**
 * Imports: Scripts
 */
import { isDarkThemeEnabled } from "../../scripts/themeScripts";

export default function Header() {

    return (
        <header className="flex justify-between items-center py-[60px]">

            <div className="flex items-center">

                <div className={
                    'desktop:mr-28 laptop:mr-14 '
                    + 'font-bold text-3xl'}>
                    <span className="dark:text-white text-neutral-900">its.</span>
                    <span className="text-sky-500">dev</span>
                </div>

                <nav className={
                    'hidden '
                    + 'laptop:block'}>

                    <ul className="flex items-center">

                        <DropdownMenu
                            title="О компании"
                            items={[
                                {
                                    title: "О нас",
                                    link: "./development.html"
                                },
                                {
                                    title: "Вакансии и карьера",
                                    link: "./development.html"
                                }
                            ]} />
                        <DropdownMenu
                            title="Услуги"
                            items={[
                                {
                                    title: "Telegram",
                                    link: "./development.html"
                                },
                                {
                                    title: "Мобильная разработка",
                                    link: "./development.html"
                                }, 
                                {
                                    title: "Web разработка",
                                    link: "./development.html"
                                },
                                {
                                    title: "Startup MVP",
                                    link: "./development.html"
                                },
                            ]} />
                        <DropdownMenu
                            title="Решения"
                            items={[
                                {
                                    title: "Bot Systems",
                                    link: "./development.html"
                                }
                            ]} />
                    </ul>

                </nav>

            </div>


            <div className="flex">

                <div className={
                    'hidden laptop:flex laptop:items-center '
                    + 'font-bold'}>

                    <BsFillTelephoneFill className="text-sky-500 w-6 h-6 mr-2" />

                    <div className="mr-[52px] dark:text-white">
                        <Symbol symbol="+" />
                        7
                        <Symbol symbol=" " />
                        <Symbol symbol="(" />
                        999
                        <Symbol symbol=")" />
                        <Symbol symbol=" " />
                        999-99-99
                    </div>
                    <button class="text-[14px] laptop:text-[16px] large:text-[18px] btn btn-active rounded-lg bg-sky-500 text-white py-3 px-5 hover:bg-sky-400 border-none transition-all normal-case	">Связаться с нами</button>


                </div>


                <div className={'hidden large:flex items-center ml-[56px]'}>
                
                    <ThemeSwitcher/>

                    <img src={isDarkThemeEnabled() ? IcMenuDark : IcMenuLight} className={'laptop:hidden '} />

                </div>

            </div>

        </header>
    );

}
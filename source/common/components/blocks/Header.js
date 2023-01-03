import React from "react";

/**
 * Imports : Media
 */
import { BsFillTelephoneFill } from 'react-icons/bs';
import IcBurger from '../../assets/icons/IcBurger';

/**
 * Imports : View
 */
import Symbol from '../view/Symbol';
import DropdownMenu from "../view/DropdownMenu";
import ThemeSwitcher from "../view/ThemeSwitcher";
import DropdownMenuMobile from "../view/DropdownMenuMobile";


export default function Header() {

    return (
        <header className={
            'flex justify-between items-center py-[10px] relative '
            + 'laptop:py-[36px] '
            + 'desktop:py-[60px] '} >

            <div className="flex items-center">

                <div className={
                    'laptop:mr-14 '
                    + 'font-bold text-[30px] leading-[46px] '
                    + 'laptop:text-[32px] laptop:leading-[48px] '
                    + 'desktop:mr-28 '}>
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
                    <button className="text-[14px] laptop:text-[16px] large:text-[18px] btn btn-active rounded-lg bg-sky-500 text-white py-3 px-5 hover:bg-sky-400 border-none transition-all normal-case	">Связаться с нами</button>


                </div>

                <div className={'hidden large:flex items-center ml-[56px]'}>
                    <ThemeSwitcher />
                </div>

                <IcBurger />

                <DropdownMenuMobile/>


            </div>

        </ header>
    );

}
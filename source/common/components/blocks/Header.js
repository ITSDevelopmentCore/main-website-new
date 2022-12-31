import React, { useEffect } from "react";

/**
 * Imports : Media
 */
import { BsFillTelephoneFill } from 'react-icons/bs';
import IcMenuLight from '../../assets/icons/ic_menu-light.svg';
import IcMenuDark from '../../assets/icons/ic_menu-dark.svg';

/**
 * Imports : View
 */
import Symbol from '../view/Symbol';
import DropdownMenu from "../view/DropdownMenu";
import ThemeSwitcher from "../view/ThemeSwitcher";


export default function Header(props) {

    useEffect(() => {
        console.log(props.theme)
        })

    return (
        <header className={
            'flex justify-between items-center py-[10px] '
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
                    <button class="text-[14px] laptop:text-[16px] large:text-[18px] btn btn-active rounded-lg bg-sky-500 text-white py-3 px-5 hover:bg-sky-400 border-none transition-all normal-case	">Связаться с нами</button>


                </div>


                <div className={'hidden large:flex items-center ml-[56px]'}>

                    <ThemeSwitcher
                    theme = {props.theme}
                    changeThemeHandler = {props.changeThemeHandler }/>

                    <img src={props.theme == 'dark' ? IcMenuDark : IcMenuLight} className={'laptop:hidden '} />

                </div>


                <label class={
                    'swap swap-rotate '
                    + 'laptop:hidden '}>

                    <input type="checkbox" />

                    <svg class="swap-off" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
                        <path fill="#0ea5e9" d="M64,128 H448 V87 H64 Z" />
                        <path fill={props.theme === 'dark' ? 'text-white' : 'text-neutral-900'} d="M64,248 H448 V203 H64 Z" />
                        <path fill={props.theme === 'dark' ? 'text-white' : 'text-neutral-900'} d="M64,384 H448 V341 H64 Z" />
                    </svg>

                    <svg class="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

                </label>


            </div>

        </ header>
    );

}
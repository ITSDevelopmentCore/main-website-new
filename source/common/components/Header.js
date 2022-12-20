import React from "react";

import { TfiAngleDown } from 'react-icons/tfi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import IcMenuLight from '../assets/icons/ic_menu-light.svg';
import IcMenuDark from '../assets/icons/ic_menu-dark.svg';

import Symbol from './Symbol';
import ThemeSwitcher from "./ThemeSwitcher";

const classesMenuListItem = "cursor-pointer group flex items-center font-bold dark:text-white ";
const classesMenuIcon = "group-hover:-rotate-90 transition-all w-[14px] h-[10px] mt-[3px] text-sky-500 stroke-custom ml-2 mr-10 inline-block";

export default function Header(props) {

    return (
        <header className="flex justify-between items-center my-[60px]">

            <div className="flex items-center">

                <div className={
                    '-mt-2 laptop:mr-14 desktop:mr-28 '
                    + 'font-bold text-3xl'}>
                    <span className={'text-neutral-900 dark:text-white'}>its.</span>
                    <span className="text-sky-500">dev</span>
                </div>

                <nav className={'hidden laptop:block'}>

                    <ul className="flex items-center">
                        <li className={classesMenuListItem} key="О компании">
                            О компании
                            <TfiAngleDown className={classesMenuIcon} />
                        </li>

                        <li className={classesMenuListItem} key="услуги">
                            Услуги
                            <TfiAngleDown className={classesMenuIcon} />
                        </li>

                        <li className={classesMenuListItem} key="Решения">
                            Решения
                            <TfiAngleDown className={classesMenuIcon} />
                        </li>
                    </ul>

                </nav>

            </div>


            <div className="flex items-center font-bold space-x-[52px]">

                <div className={'hidden large:flex large:items-center '
                    + 'dark:text-white'}>
                    <BsFillTelephoneFill className="text-sky-500 w-6 h-6 mr-3" />
                    <Symbol symbol="+" />7&nbsp;<Symbol symbol="(" />999<Symbol symbol=")" />&nbsp;999-99-99
                </div>

                <button className={
                    'hidden py-3 px-5 laptop:block '
                    + 'rounded-[10px] bg-sky-500 text-white'}>Свяжитесь со мной</button>

                <ThemeSwitcher changeThemeHandler={props.changeThemeHandler} />

                <img
                    src={props.theme == 'light' ? IcMenuLight : IcMenuDark}
                    className={'laptop:hidden'} />

            </div>

        </header>
    );

}
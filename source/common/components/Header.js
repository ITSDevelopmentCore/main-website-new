import React from "react";

import { TfiAngleDown } from 'react-icons/tfi';
import { BsFillTelephoneFill, BsMoonStarsFill } from 'react-icons/bs';
import IcMenuLight from '../assets/icons/ic_menu-light.svg';
import IcMenuDark from '../assets/icons/ic_menu-dark.svg';
import ContextMenu from './dataComponents/ContextMenu';

import Symbol from './Symbol';

const classesMenuListItem = "cursor-pointer group dark:text-white flex flex-row items-center text-[18px] font-bold group";
const classesMenuIcon = "group-hover:-rotate-90 transition-all w-[14px] h-[10px] mt-[3px] text-sky-500 stroke-custom ml-2 mr-10 inline-block";

export default function Header(props) {

    return (
        <header className="flex justify-between items-center my-[60px]">

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
                        <li className={classesMenuListItem} key = "О компании">
                            О компании
                            <TfiAngleDown className={classesMenuIcon} />
                            <ContextMenu items={["Пункт 1", "Пункт 2", "Пункт 3"]} 
                            link={["https://itsdevelopment.ru/"]}/>
                        </li>
                    
                        <li className={classesMenuListItem} key = "услуги">
                            Услуги
                            <TfiAngleDown className={classesMenuIcon} />
                            <ContextMenu items={["Пункт 11111111", "Пункт 2", "Пункт 3"]} 
                            link={["https://tailwindcss.com/docs/background-color"]}/>
                        </li>
                        <li className={classesMenuListItem} key = "Решения">
                            Решения
                            <TfiAngleDown className={classesMenuIcon} />
                            <ContextMenu items={["Пункт 1", "Пункт 2", "Пункт 3"]} 
                            link={["https://vk.com/ads?act=office&union_id=1607011672"]}/>
                        </li>
                    </ul>

                </nav>

            </div>


            <div className="flex">

                <div className={
                    'hidden laptop:flex laptop:items-center '
                    + 'text-[18px] font-bold'}>

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

                    <button className="h-[53px] w-[213px] rounded-[10px] bg-sky-500 text-white mr-[56px]">Связаться с нами</button>

                </div>


                <div className={
                    'flex items-center'
                }>
                    <label className="inline-flex relative items-center cursor-pointer mr-3">
                        <input onClick={(e) => props.changeThemeHandler(e)} type="checkbox" value="" className="sr-only peer" />
                        <div className="w-11 h-6 bg-neutral-300 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-sky-500"></div>
                    </label>

                    <BsMoonStarsFill className="text-neutral-300 w-[19px] h-[19px] dark:text-sky-500  mr-9" />


                    <img src={props.theme == 'light' ? IcMenuLight : IcMenuDark} className={
                        'laptop:hidden '} />
                </div>

            </div>

        </header>
    );

}
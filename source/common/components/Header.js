import React from "react"

import { TfiAngleDown } from 'react-icons/tfi'
import { BsFillTelephoneFill, BsMoonStarsFill } from 'react-icons/bs'

const classesMenuListItem = "dark:text-white flex flex-row items-center text-[18px] font-bold";
const classesMenuIcon = "w-[14px] h-[10px] mt-[3px] text-sky-500 stroke-custom ml-2 mr-10";

export default function Header() {

    const darkThemeHandler = (darkModeSwitch) => {
        if (darkModeSwitch.target.checked) {
            document.documentElement.classList.add('dark')
        }
        else {
            document.documentElement.classList.remove('dark')

        }
    }

    return (
        <header className="container m-auto flex justify-between items-center mt-[61px]">

            <div className="flex items-center">

                <div className="mr-28 font-bold text-3xl">
                    <span className="dark:text-white text-neutral-900">its.</span>
                    <span className="text-sky-500">dev</span>
                </div>

                <nav>
                    <ul className="flex items-center">
                        <li className={classesMenuListItem}>
                            О компании
                            <TfiAngleDown className={classesMenuIcon} />
                        </li>
                        <li className={classesMenuListItem}>
                            Услуги
                            <TfiAngleDown className={classesMenuIcon} />
                        </li>
                        <li className={classesMenuListItem}>
                            Решения
                            <TfiAngleDown className={classesMenuIcon} />
                        </li>
                    </ul>
                </nav>
            </div>


            <div className="flex items-center text-[18px] font-bold">

                <BsFillTelephoneFill className="text-sky-500 w-6 h-6 mr-2" />

                <div className="mr-[52px] dark:text-white">{"7 912 248-61-36"}</div>

                <button className="h-[53px] w-[213px] rounded-[10px] bg-sky-500 text-white mr-[56px]">Связаться с нами</button>

                <label className="inline-flex relative items-center cursor-pointer mr-3">
                    <input onClick={(e) => darkThemeHandler(e)} type="checkbox" value="" className="sr-only peer" />
                    <div className="w-11 h-6 bg-neutral-300 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-sky-500"></div>
                </label>

                <BsMoonStarsFill className="text-neutral-300 w-[19px] h-[19px] dark:text-sky-500" />
            </div>

        </header>
    );

}
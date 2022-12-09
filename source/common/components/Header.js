import React from "react"

import { TfiAngleDown } from 'react-icons/tfi'

const classesMenuListItem = "text-xl leading-[27.29px] font-bold flex flex-row items-center";
const classesMenuIcon = "w-[14px] h-[10px] text-sky-500 stroke-custom ml-[6px]";


export default function Header() {

    return (
        <header className="container m-auto">

            <div className="flex">

                <div className="mr-28 font-bold text-3xl ">
                    <span className="text-neutral-900">its.</span>
                    <span className="text-sky-500">dev</span>
                </div>

                <ul className="flex">
                    <li className={"flex flex-row items-center text-xl font-bold"}>
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

            </div>
        </header>

    );


}
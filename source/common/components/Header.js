import React from "react"

import { TfiAngleDown } from 'react-icons/tfi'

const classesMenuListItem = "text-[18px] leading-[27.29px] font-bold flex flex-row items-center";
const classesMenuIcon = "w-[14px] h-[6px] text-sky-500 stroke-custom ml-[6px]";


export default function Header() {

    return (
        <header className="w-full h-[264px] bg-gray-100 px-[202px] py-[62px] m-auto">

            <div className="fixed flex">
                <div className="font-bold text-[32px]">
                    <span className="text-neutral-900">its.</span>
                    <span className="text-sky-500">dev</span>
                </div>

                <ul className="flex space-x-[52px] ml-[52px] pt-2">
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

            </div>
        </header>

    );


}
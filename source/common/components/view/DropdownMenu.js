import React from "react";
import { TfiAngleDown } from 'react-icons/tfi';

function DropdownMenu(props) {
    return (
        <div className="dropdown dropdown-hover group">
            <label tabindex="0" className="cursor-pointer dark:text-white items-center text-[18px] font-bold flex">
                {props.title}
                <TfiAngleDown className="group-hover:-rotate-90 transition-all w-[14px] h-[10px] mt-[3px] text-sky-500 stroke-custom ml-2 mr-10 inline-block" />
            </label>
            <div className="dropdown-content">
                <ul tabindex="0" class="mt-4 menu p-2 shadow bg-base-100 rounded-box w-52 dark:bg-card-surface dark:border-slate-800 dark:border">
                    {props.items.map(function (item) {
                        return <MenuItem link={item.link} title={item.title} />;
                    })}
                </ul>
            </div>
        </div>
    )
}

function MenuItem(props) {
    return (
        <li>
            <a href={props.link} className=''>
                {props.title}
            </a>
        </li>
    )
}

export default DropdownMenu;

import React from 'react';

export default function MenuItems(props) {

    return (
        <ul className='absolute group-hover:block top-[100px] bg-white
         dark:bg-slate-800 dark:text-white hidden
         transition-all duration-700'>

            {props.items.map(function (item) {
                return <MenuItem key={item} title={item} />;
            })}


        </ul>
    )

}

function MenuItem(props) {
    return (
        <li>
            <a href='#' className=''>
                {props.title}
            </a>
        </li>
    )

}
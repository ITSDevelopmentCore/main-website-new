import React from 'react';

export default function ContextMenu(props) {

    return (
        <ul className='absolute group-hover:block top-[100px] bg-white
         dark:bg-slate-800 dark:text-white hidden
         rounded-lg pt-[5px] pr-[50px] pl-[10px]'>

            {props.items.map(function (item) {
                return <MenuItem key={item} title={item}/>;

            })}
        </ul>
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
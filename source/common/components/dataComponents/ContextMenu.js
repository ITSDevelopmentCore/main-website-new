import React from 'react';

export default function ContextMenu(props) {

    return (
        <ul className='absolute group-hover:block top-24 bg-white
         dark:bg-slate-800 dark:text-white hidden
         rounded-lg pt-1 pr-12 pl-2.5'>

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
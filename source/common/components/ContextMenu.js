import React from 'react';

export default function ContextMenu(props) {

    return (
        <ul className={'absolute w-[200px] top-[120px] -ml-[40px] hidden group-hover:block p-6 '
        + 'bg-white rounded-lg hover:block  '
        + 'dark:bg-slate-800 dark:text-white'}>

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



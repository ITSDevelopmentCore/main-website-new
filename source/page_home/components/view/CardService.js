import React from 'react';

export default function CardService(props) {

    return (
        <section className={
            'h-[220px] p-[25px] relative flex flex-col justify-between overflow-hidden '
            + 'bg-white rounded-[50px] '
            + 'dark:bg-card-surface dark:border dark:border-slate-800'}>

            <h4 className={
                'text-[24px] leading-[26px] font-extrabold'}>
                <span className='text-sky-500'>{props.title.split(' ')[0]}</span>
                <br />
                <span>{props.title.split(' ')[1]}</span>
            </h4>

            <p className={
                'text-[10px] leading-[13px] opacity-60 w-2/3'}>
                {props.description}
            </p>

            <img
                className={'absolute top-0 right-0'}
                src={props.image} />

        </section>
    )
}
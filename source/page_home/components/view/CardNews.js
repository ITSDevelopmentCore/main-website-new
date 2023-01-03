import React from 'react';

export default function CardAdvantage(props) {

    return (
        <section className={
            'flex flex-col p-[30px] '
            + 'bg-white rounded-[20px] '
            + 'dark:bg-card-surface dark:border dark:border-slate-800'}>

            <img 
            className={'w-1/2 mb-[24px] '}
            src={props.img}/>
           
            <h4 className={
                'mb-[12px] '
                +'text-[16px] leading-[14px] font-bold '
            }>
                {props.title}
            </h4>

            <p className={
                'w-full '
                + 'text-[12px] leading-[17px] opacity-60 '
                + 'laptop:w-[722px] laptop:text-left '}>
                {props.description}
            </p>

        </section>
    )
}
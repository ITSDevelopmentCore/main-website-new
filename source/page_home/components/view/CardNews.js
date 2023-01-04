import React from 'react';

export default function CardAdvantage(props) {

    return (
        <section className={
            'flex flex-col card_primary'}>

            <img
                className={'w-1/2 mb-[24px] '}
                src={props.img} />

            <h4 className={
                'mb-[12px] text-[16px] font-bold '
            }>
                {props.title}
            </h4>

            <p className={
                'w-full '
                + 'opacity-60 '
                + 'laptop:w-[722px] laptop:text-left '}>
                {props.description}
            </p>

        </section>
    )
}
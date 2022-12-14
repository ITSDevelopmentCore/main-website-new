import React from 'react';

export default function CardAdvantage(props) {

    return (
        <section className='bg-white rounded-card w-[430px] h-[260px] relative px-12 pt-12
                            dark:bg-card-surface dark:border dark:border-slate-800'>
            {props.children}
        </section>
    )
}
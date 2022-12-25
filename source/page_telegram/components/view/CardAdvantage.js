import React from 'react';

export default function CardAdvantage(props) {

    return (
        <section className={
            'w-full h-[260px] relative px-[40px] pt-[40px] pb-[20px] '
            + 'bg-white rounded-card '
            + 'dark:bg-card-surface dark:border dark:border-slate-800'}>

            <div className={'flex justify-between'}>

                <h4 className={
                    'font-extrabold text-[35px] leading-[32px] mb-6 text-neutral-900 '
                    + 'laptop:text-[24px] leading-[21px] '
                    + 'large:text-[32px] leading-[29px] '
                    + 'desktop:text-[35px] leading-[32px] '
                    + 'dark:text-white'}>
                    {props.title}
                </h4>

                <span className={
                    'w-14 h-14 '
                    + 'laptop:w-[45px] laptop:h-[45px] '
                    + 'large:w-[55px] large:h-[55px] '
                    + 'desktop:w-[65px] desktop:h-[65px] '
                    + 'text-sky-500'}>
                    {props.icon}
                </span>

            </div>

            <p className={
                'opacity-60 text-neutral-900 '
                + 'laptop:text-[14px] '
                + 'large:text-[16px] '
                + 'desktop:text-[18px] '
                + 'dark:text-white'}>
                {props.description}
            </p>

        </section>
    )
}
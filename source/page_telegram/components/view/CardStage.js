import React from 'react';

export default function CardStage(props) {

    return (
        <section className={
            'w-full aspect-[3/2] relative'}>

            <span className={
                'align-text-top '
                + 'font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-sky-500 via-sky-400 to-sky-300 absolute '
                + 'laptop:text-[100px] laptop:leading-[100px] '
                + 'large:text-[100px] large:leading-[100px] '
                + 'desktop:text-[115px] desktop:leading-[115px] '}>
                {props.number == undefined ? 3 : props.number}
            </span>


            <div className={
                'absolute left-[10%] right-0 bottom-0 p-[10%] '
                + 'opacity-80 bg-white border '
                + 'laptop:rounded-[30px] laptop:top-[20%] laptop:p-[5%] '
                + 'large:rounded-[40px] large:top-[10%] large:p-[10%] '
                + 'desktop:rounded-[50px] '
                + 'dark:bg-card-surface dark:border-slate-800'}>

                <h3 className={
                    'font-extrabold mb-6 text-neutral-900 '
                    + 'laptop:text-[20px] '
                    + 'large:text-[24px] '
                    + 'desktop:text-[28px] '
                    + 'dark:text-white'}>
                    {props.title == undefined ? "Разработка" : props.title}
                </h3>

                <p className={
                    'opacity-60 text-neutral-900 '
                    + 'dark:text-white'}>
                    {props.description == undefined ? "Команда программистов высокой квалификации разрабатывает продукт согласно ТЗ." : props.description}
                </p>

            </div>

        </section>
    )
}
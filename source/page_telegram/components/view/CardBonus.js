import React from 'react';

/**
 * Imports : Icons
 */
import { RiApps2Fill } from 'react-icons/ri';

export default function CardBonus(props) {

    return (
        <section className={
            'w-full p-12 relative '
            + 'laptop:w-[717px] laptop:h-[289px]'
            + 'bg-white rounded-card '
            + 'dark:bg-card-surface dark:border dark:border-slate-800'}>

            <RiApps2Fill className='text-sky-500 w-14 h-14 absolute top-10 right-10' />

            <h4 className={
                'font-extrabold text-4xl leading-8 mb-6 text-neutral-900 '
                + 'dark:text-white'}>
                Аналитика работы
            </h4>

            <p className='w-[90%] text-lg leading-6 opacity-60 text-neutral-900
                                      dark:text-white'>
                Во время разработки мы предлагаем Заказчику,
                что можно поменять или улучшить в его видении для достижения максимальных показателей.
                Наша задача - масштабировать и развивать Ваш бизнес.
                После завершения проекта - бесплатно анализируем работу и предлагаем улучшения по истечению определенных периодов
            </p>

        </section>
    )
}
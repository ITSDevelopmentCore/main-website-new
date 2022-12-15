import React from 'react';

/**
 * Imports : Utils
 */
import Symbol from '../../../common/components/Symbol';

/**
 * Imports : Icons
 */
import { RiApps2Fill } from 'react-icons/ri';

export default function CardBonus(props) {

    return (
        <section className={
            'w-[717px] h-[289px] px-12 pt-12 relative '
            + 'bg-white rounded-card '
            + 'dark:bg-card-surface dark:border dark:border-slate-800'}>

            <RiApps2Fill className='text-sky-500 w-[58px] h-[58px] absolute top-[40px] right-[40px]' />

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
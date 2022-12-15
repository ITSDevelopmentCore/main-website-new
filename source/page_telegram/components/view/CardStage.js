import React from 'react';

/**
 * Imports : Utils
 */
import Symbol from '../../../common/components/Symbol';


export default function CardStage(props) {

    return (
        <section className={
            'w-[455px] h-[255px] mb-10 relative'}>

            <span className={
                'text-[115px] leading-[115px] align-text-top'
                + 'font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-sky-500 via-sky-400 to-sky-300 absolute'}>
                2
            </span>


            <div className={
                'w-[430px] h-[221px] top-[34px] left-[25px] p-12 absolute z-10 '
                + 'opacity-80 bg-white rounded-card '
                + 'dark:bg-card-surface dark:border dark:border-slate-800'}>

                <h3 className={
                    'font-extrabold text-4xl leading-8 mb-6 text-neutral-900 '
                    +'dark:text-white'
                }>
                    Составление Т<Symbol symbol="/"/>З
                </h3>

                <p className={
                    'text-lg leading-6 opacity-60 text-neutral-900 '
                    +'dark:text-white'
                }>
                    Готовим Т<Symbol symbol="/"/>З и предоставляем его Заказчику до полного утверждения.
                </p>

            </div>

        </section>
    )
}
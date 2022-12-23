import React from 'react'; 

/**
 * Imports : Project React components
 */
import CardStage from '../view/CardStage';
import CardBonus from '../view/CardBonus';

export default function BlockStages(props) {
  
    return (
        <section className="mt-[265px]">

            <h2 className={
                'mb-12 '
                + 'text-title leading-title text-neutral-900 font-extrabold '
                + 'dark:text-white'}>
                Процесс работы
            </h2>

            <div className={'grid grid-cols-3 gap-y-[15%] gap-x-[3%]'}>
                <CardStage />
                <CardStage />
                <CardStage />
                <CardStage />
                <CardStage />
                <CardStage />
            </div>

            <div className={'w-full flex justify-between mt-56'}>
                <CardBonus />
                <CardBonus />
            </div>

        </section>
    )
}


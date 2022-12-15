import React from 'react';

/**
 * Imports : Project React components
 */
import CardStage from '../view/CardStage';
import CardBonus from '../view/CardBonus';

export default function BlockStages(props) {

    return (
        <section className="mt-[265px]">

            <h2 className='text-title leading-title text-neutral-900 font-extrabold mb-12
                           dark:text-white'>
                Процесс работы
            </h2>

            <div className={
                'flex flex-wrap justify-between'
            }>            
                <CardStage />
                <CardStage />
                <CardStage />
                <CardStage />
                <CardStage />
                <CardStage />

                <div className={
                    'w-full flex justify-between mt-[224px]'
                }>
                    <CardBonus/>
                    <CardBonus/>
                </div>
            </div>


        </section>
    )
}


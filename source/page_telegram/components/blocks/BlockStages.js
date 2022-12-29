import React from 'react';

/**
 * Imports : Project React components
 */
import CardStage from '../view/CardStage';
import CardStageMobile from '../view/CardStageMobile';
import CardBonus from '../view/CardBonus';

export default function BlockStages(props) {

    return (
        <section className="mt-[265px]">

            <h2 className={'mb-12 '
                + 'text-[28px] leading-[32px] text-neutral-900 font-extrabold text-center  '
                + 'laptop:text-left laptop:text-[46px] laptop:leading-[52px] '
                + 'large:text-[58px] large:leading-[62px] '
                + 'desktop:text-[64px] desktop:leading-[72px] '
                + 'dark:text-white'}>
                Процесс работы
            </h2>

            <div className={
                'hidden '
                + 'laptop:grid laptop:grid-cols-3 laptop:gap-y-[15%] laptop:gap-x-[3%]'}>
                <CardStage />
                <CardStage />
                <CardStage />
                <CardStage />
                <CardStage />
                <CardStage />
            </div>

            <div className={
                'flex flex-col space-y-[16px] '
                + 'laptop:hidden'}>
                <CardStageMobile />
                <CardStageMobile />
                <CardStageMobile />
                <CardStageMobile />
                <CardStageMobile />
                <CardStageMobile />
            </div>

            <div className={'flex flex-col mt-56 space-y-[18px] '
                + 'laptop:flex-row laptop:justify-between'}>
                <CardBonus />
                <CardBonus />
            </div>

        </section>
    )
}


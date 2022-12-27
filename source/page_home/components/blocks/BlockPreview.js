import React from "react";

/**
 * Imports : Media
 */
import IllustrationPreview from '../../assets/media/illustration_preview.png'

export default function BlockPreview() {

    return (
        <section className={
            'flex flex-col '
            + 'laptop:flex-row '
        }>

            <div className={
                'flex flex-col justify-center '
                + 'laptop:basis-1/2'
            }>

                <h2 className={
                    'mb-[28px] '
                    + 'font-extrabold text-center text-[35px] leading-[45px]'
                    + 'laptop:text-[45px] laptop:leading-[55px] laptop:text-left '
                    + 'large:text-[75px] large:leading-[85px] '
                    + 'desktop:text-[95px] desktop:leading-[105px]'}>

                    <span className={
                        'text-neutral-900 '
                        + 'dark:text-white'}>its.</span>
                    <span className={'text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-sky-400 to-sky-500'}>dev</span>

                </h2>

                <h1 className={
                    'mb-[35px] '
                    + 'font-bold text-[26px] leading-[37px] '
                }>
                    Разработка качественного<br/> программного обеспечения
                </h1>

                <button className={
                    'p-5 px-11 w-max mx-auto '
                    + 'leading-[30px] font-bold text-white shadow-blue rounded-xl bg-gradient-to-t from-sky-500 to-sky-300 transition-all duration-200 hover:shadow-blue-extended '
                    + 'laptop:text-[19px] laptop:mx-0 '
                    + 'desktop:text-[22px] desktop:leading-[33px] '
                    + 'dark:to-sky-500'}>
                    Свяжитесь со мной
                </button>

            </div>

            <img
                className={
                    ''
                    + 'laptop:basis-1/2 max-w-[50%]'
                }
                src={IllustrationPreview}
            />




        </section>
    )


}
import React from "react";

import IllustrationPreview from '../../assets/media/illustration_preview.png'


export default function BlockPreview() {

    return (
        <section className={
            'flex flex-col items-center '
            + 'laptop:flex-row laptop:items-center '
        }>

            <div className={
                'flex flex-col justify-between '
                + 'laptop:basis-1/2'
            }>

                <h2 className={
                    'mb-[28px] text-[50px] leading-[57px] '
                    + 'font-extrabold text-center '
                    + 'laptop:text-[75px] laptop:leading-[85px] laptop:text-left '
                    + 'large:text-[75px] large:leading-[85px] '
                    + 'desktop:text-[95px] desktop:leading-[105px]'}>

                    <span className={
                        'text-neutral-900 '
                        + 'dark:text-white'}>its.</span>
                    <span className={'text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-sky-400 to-sky-500'}>dev</span>

                </h2>

                <h1 className={
                    'mb-[35px] '
                    + 'font-bold text-[16px] leading-[23px] text-center '
                    + 'laptop:text-[26px] leading-[37px] laptop:text-left '
                }>
                    Разработка качественного<br /> программного обеспечения
                </h1>

                <div className={
                    'flex flex-wrap mb-[35px] mx-auto '
                    +'laptop:w-[450px] laptop:mx-0 '
                }>

                    <span className={
                        'block mr-[13px] mb-[17px] '
                        + 'border border-[#D9D9D9] rounded-[10px] px-[18px] py-[12px] hover:scale-105 cursor-pointer transition-transform duration-200 '
                        + 'dark:border-white '
                    }>
                        Мобильная разработка
                    </span>

                    <span className={
                        'block mb-[17px] '
                        + 'border border-[#D9D9D9] rounded-[10px] px-[18px] py-[12px] hover:scale-105 cursor-pointer transition-transform duration-200 '
                        + 'dark:border-white '
                    }>
                        Web разработка
                    </span>

                    <span className={
                        'block mr-[13px] '
                        + 'border border-[#D9D9D9] rounded-[10px] px-[18px] py-[12px] hover:scale-105 cursor-pointer transition-transform duration-200 '
                        + 'dark:border-white '
                    }>
                        Telegram разработка
                    </span>

                    <span className={
                        'block '
                        + 'border border-[#D9D9D9] rounded-[10px] px-[18px] py-[12px] hover:scale-105 cursor-pointer transition-transform duration-200 '
                        + 'dark:border-white '
                    }>
                        Разработка MVP
                    </span>
                </div>

                <button className={
                    'p-5 px-11 w-fit m-auto '
                    + 'leading-[30px] font-bold text-white shadow-blue rounded-xl bg-gradient-to-t from-sky-500 to-sky-300 transition-all duration-200 hover:shadow-blue-extended '
                    + 'laptop:text-inherit laptop:px-[34px] laptop:py-[14px] mx-0 '
                    + 'large:text-[20px] large:px-[42px] large:py-[16px] '
                    + 'desktop:text-[22px] desktop:leading-[33px] desktop:px-[46px] desktop:py-[18px] '
                    + 'dark:to-sky-500'}>
                    Свяжитесь со мной
                </button>

            </div>

            <img
                className={
                    'w-full '
                    + 'laptop:basis-1/2 laptop:max-w-[50%]'
                }
                src={IllustrationPreview}
            />

        </section>
    )


}
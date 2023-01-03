import React, {useContext} from "react";
import {ThemeContext} from '../../../common/components/blocks/Page'

import IllustrationPreviewLight from '../../assets/media/illustration_preview-light.png';
import IllustrationPreviewDark from '../../assets/media/illustration_preview-dark.png';

export default function BlockPreview() {

    const { theme } = useContext(ThemeContext)

    return (
        <section className={
            'flex flex-col items-center mt-[50px] '
            + 'laptop:flex-row laptop:items-center '
        }>

            <div className={
                'flex flex-col justify-between items-center '
                + 'laptop:basis-1/2 '
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
                    'mb-[23px] '
                    + 'font-bold text-[16px] leading-[23px] text-center '
                    + 'laptop:text-[26px] laptop:leading-[37px] laptop:text-left '
                }>
                    Разработка качественного<br /> программного обеспечения
                </h1>


                <div className={'flex justify-center space-x-[10px] mb-[10px] text-[12px] '}>
                    <button className={
                        ' '
                        + 'border border-[#D9D9D9] rounded-[10px] px-[18px] py-[12px] hover:scale-105 cursor-pointer transition-transform duration-200 '
                        + 'dark:border-white '
                    }>
                        Мобильная разработка
                    </button>

                    <button className={
                        ' '
                        + 'border border-[#D9D9D9] rounded-[10px] px-[18px] py-[12px] hover:scale-105 cursor-pointer transition-transform duration-200 '
                        + 'dark:border-white '
                    }>
                        Web разработка
                    </button>
                </div>

                <div className={'flex justify-center space-x-[10px] mb-[50px] text-[12px] '}>
                    <button className={
                        '  '
                        + 'border border-[#D9D9D9] rounded-[10px] px-[18px] py-[12px] hover:scale-105 cursor-pointer transition-transform duration-200 '
                        + 'dark:border-white '
                    }>
                        Telegram боты
                    </button>

                    <button className={
                        ' '
                        + 'border border-[#D9D9D9] rounded-[10px] px-[18px] py-[12px] hover:scale-105 cursor-pointer transition-transform duration-200 '
                        + 'dark:border-white '
                    }>
                        Разработка MVP
                    </button>
                </div>

                <button className={
                    'w-[170px] p-[10px] mx-auto mb-[75px] '
                    + 'text-[14px] leading-[20px] font-bold text-white shadow-blue rounded-[6px] bg-gradient-to-t from-sky-500 to-sky-300 transition-all duration-200 hover:shadow-blue-extended '
                    + 'laptop:text-inherit laptop:px-[34px] laptop:py-[14px] mx-0 '
                    + 'large:text-[20px] large:px-[42px] large:py-[16px] '
                    + 'desktop:text-[22px] desktop:leading-[33px] desktop:px-[46px] desktop:py-[18px] '
                    + 'dark:to-sky-500'}>
                    Свяжитесь со мной
                </button>

            </div>

            <img
                className={
                    'h-[240px] '
                    + 'laptop:basis-1/2 laptop:max-w-[50%]'
                }
                src={theme == 'dark' ? IllustrationPreviewDark : IllustrationPreviewLight}
            />

        </section>
    )


}
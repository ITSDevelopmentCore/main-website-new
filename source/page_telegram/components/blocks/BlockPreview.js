import React from "react"

export default function BlockPreview() {

    const classesPreviewAdvantageDigit = "text-[70px] leading-[75px] text-center laptop:text-[60px] laptop:leading-[65px]";
    const classesPreviewAdvantageText = "font-base text-lg leading-6 opacity-60 text-center laptop:text-base laptop:leading-5";
    const classesPreviewAdvantageDividerLaptop = "h-[2px] w-full bg-neutral-900 opacity-10 my-10 dark:bg-white";
    const classesPreviewAdvantageDivider = "w-[2px] h-[150px] bg-neutral-900 opacity-10 my-10 dark:bg-white";


    return (
        <>
            <div className={'flex items-center justify-between py-24'}>

                <div className={'flex flex-col justify-center basis-1/2 space-y-[56px]'}>

                    <div className={'font-extrabold laptop:text-[75px] laptop:leading-[85px] large:text-[85px] large:leading-[95px] desktop:text-[95px] desktop:leading-[105px]'}>
                        <span className={'text-neutral-900 dark:text-white'}>Разработка<br /></span>
                        <span className={'text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-sky-400 to-sky-500'}>Telegram-ботов</span>
                    </div>

                    <div className={
                        'laptop:text-sm laptop:leading-7 large:text-base large:leading-8 desktop:text-lg desktop:leading-[34px] text-neutral-900 '
                        + 'dark:text-white'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </div>

                    <button className={
                        'p-5 px-11 w-max '
                        + 'desktop:text-[22px] desktop:leading-[33px] laptop:text-[19px] leading-[30px] font-bold text-white shadow-blue rounded-xl bg-gradient-to-t from-sky-500 to-sky-300 transition-all duration-200 hover:shadow-blue-extended '
                        + 'dark:to-sky-500'}>
                        Свяжитесь со мной
                    </button>

                </div>

                <div className={'flex items-center'}>

                    <div className={
                        'desktop:h-[666px] desktop:w-[333px] mockup '
                        + 'large:h-[550px] large:w-[275px]'
                        + 'laptop:h-[450px] laptop:w-[225px]'}>

                    </div>

                    <div className={
                        'py-[44px] px-[22px] ml-20 hidden laptop:w-[170px] laptop:flex laptop:flex-col desktop:w-[195px] '
                        + 'bg-white rounded-[50px] text-neutral-900 '
                        + 'dark:bg-[#1A232C] dark:text-white dark:border dark:border-slate-800'}>

                        <div className={classesPreviewAdvantageDigit}>2</div>
                        <p className={classesPreviewAdvantageText}>Года на рынке</p>
                        <div className={classesPreviewAdvantageDividerLaptop} />

                        <div className={classesPreviewAdvantageDigit}>100</div>
                        <p className={classesPreviewAdvantageText}>Готовых проектов</p>
                        <div className={classesPreviewAdvantageDividerLaptop} />

                        <div className={classesPreviewAdvantageDigit}>20т</div>
                        <p className={classesPreviewAdvantageText}>Минимальный бюджет</p>
                    </div>

                </div>

            </div>

            <div className={
                'flex justify-around items-center laptop:hidden '
                + 'bg-white rounded-[50px] text-neutral-900 '
                + 'dark:bg-[#1A232C] dark:text-white dark:border dark:border-slate-800'}>


                <div className="flex flex-col basis-[200px]">
                    <div className={classesPreviewAdvantageDigit}>2</div>
                    <p className={classesPreviewAdvantageText}>Года на рынке</p>
                </div>

                <div className={classesPreviewAdvantageDivider} />

                <div className="flex flex-col basis-[200px]">
                    <div className={classesPreviewAdvantageDigit}>100</div>
                    <p className={classesPreviewAdvantageText}>Готовых проектов</p>
                </div>

                <div className={classesPreviewAdvantageDivider} />

                <div className="flex flex-col basis-[200px]">
                    <div className={classesPreviewAdvantageDigit}>20т</div>
                    <p className={classesPreviewAdvantageText}>Минимальный бюджет</p>
                </div>

            </div>

        </>
    );

}
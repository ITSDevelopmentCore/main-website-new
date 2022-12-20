import React from "react"

export default function BlockPreview() {

    const classesPreviewAdvantageDigit = "text-center desktop:text-[70px] desktop:leading-[75px] large:text-[60px] large:leading-[65px] laptop:text-[50px] laptop:leading-[55px]";
    const classesPreviewAdvantageText = "font-base opacity-60 text-center";
    const classesPreviewAdvantageDividerLaptop = "h-[2px] w-full bg-neutral-900 opacity-10 my-10 dark:bg-white";
    const classesPreviewAdvantageDivider = "w-[2px] h-[150px] bg-neutral-900 opacity-10 my-10 dark:bg-white";


    return (
        <>
            <div className={'flex items-center justify-between py-24'}>

                <div className={'flex flex-col justify-center basis-1/2 space-y-[2.7em] large:min-w-[670px] laptop:min-w-[595px]'}>

                    <div className={'font-extrabold laptop:text-[75px] laptop:leading-[85px] large:text-[85px] large:leading-[95px] desktop:text-[95px] desktop:leading-[105px]'}>
                        <span className={'text-neutral-900 dark:text-white'}>Разработка<br /></span>
                        <span className={'text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-sky-400 to-sky-500'}>Telegram-ботов</span>
                    </div>

                    <div className={'text-neutral-900 dark:text-white'}>
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

                <div className={'mockup desktop:w-[330px] large:w-[300px] laptop:w-[270px] aspect-[1/2]'} />

                <div className={
                    'py-[50px] px-[22px] space-y-[2em] hidden flex-col laptop:flex desktop:w-[195px] large:w-[185px] laptop:w-[175px]'
                    + 'bg-white rounded-[50px] text-neutral-900 border '
                    + 'dark:bg-[#1A232C] dark:text-white dark:border-slate-800'}>

                    <div className="flex flex-col">
                        <div className={classesPreviewAdvantageDigit}>2</div>
                        <p className={classesPreviewAdvantageText}>Года<br/> на рынке</p>
                    </div>

                    <div className={classesPreviewAdvantageDividerLaptop} />

                    <div className="flex flex-col">
                        <div className={classesPreviewAdvantageDigit}>100</div>
                        <p className={classesPreviewAdvantageText}>Готовых<br/> проектов</p>
                    </div>

                    <div className={classesPreviewAdvantageDividerLaptop} />

                    <div className="flex flex-col">
                        <div className={classesPreviewAdvantageDigit}>20т</div>
                        <p className={classesPreviewAdvantageText}>Минимальный<br/> бюджет</p>
                    </div>

                </div>


            </div>

            <div className={
                'flex justify-around items-center laptop:hidden '
                + 'bg-white rounded-[50px] text-neutral-900 '
                + 'dark:bg-[#1A232C] dark:text-white dark:border dark:border-slate-800'}>


                <div className="flex flex-col basis-[200px]">
                    <div className={classesPreviewAdvantageDigit}>2</div>
                    <p className={classesPreviewAdvantageText}>Года<br />на рынке</p>
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
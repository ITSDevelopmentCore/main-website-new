import React from "react"

export default function BlockPreview() {

    const classesPreviewAdvantageDigitLaptop = "text-center desktop:text-[70px] desktop:leading-[75px] large:text-[60px] large:leading-[65px] laptop:text-[50px] laptop:leading-[55px]";
    const classesPreviewAdvantageTextLaptop = "font-base opacity-60 text-center";
    const classesPreviewAdvantageDividerLaptop = "h-[2px] w-full bg-neutral-900 opacity-10 my-10 dark:bg-white";
    const classesPreviewAdvantageDivider = "h-[2px] w-full bg-neutral-900 opacity-10 my-10 dark:bg-white";
    const classesPreviewAdvantageDigit = "basis-1/2 text-center text-[50px] leading-[50px]";
    const classesPreviewAdvantageText = "basis-1/2 text-[14px] font-base opacity-60";


    return (
        <section>
            <div className={
                'block py-24 '
                + 'laptop:flex laptop:items-center laptop:justify-between'}>

                <div className={'flex flex-col justify-center basis-1/2 space-y-[2.7em] large:min-w-[670px]'}>

                    <h1 className={
                        'font-extrabold text-center text-[35px] leading-[45px] '
                        + 'laptop:text-[45px] laptop:leading-[55px] laptop:text-left '
                        + 'large:text-[75px] large:leading-[85px] '
                        + 'desktop:text-[95px] desktop:leading-[105px]'}>

                        <span className={
                            'text-neutral-900 '
                            + 'dark:text-white'}>Разработка<br /></span>
                        <span className={'text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-sky-400 to-sky-500'}>Telegram-ботов</span>

                    </h1>

                    <p className={'text-neutral-900 dark:text-white leading-[28px] text-center '
                        + 'laptop:text-left '
                        + 'large:leading-[32px] '
                        + 'desktop:leading-[34px]'}>
                        Телеграм боты в 2023 году - самое эффективное средство автоматизации и цифрового маркетинга с небольшим бюджетом.
                        Мы реализуем уникальных ботов с веб интерфейсами, гарантирующих перевыполнение ожиданий заказчика и легкую интеграцию в ваш бизнес.
                    </p>

                    <button className={
                        'p-5 px-11 w-max mx-auto '
                        + 'leading-[30px] font-bold text-white shadow-blue rounded-xl bg-gradient-to-t from-sky-500 to-sky-300 transition-all duration-200 hover:shadow-blue-extended '
                        + 'laptop:text-[19px] laptop:mx-0 '
                        + 'desktop:text-[22px] desktop:leading-[33px] '
                        + 'dark:to-sky-500'}>
                        Свяжитесь со мной
                    </button>

                </div>

                <div className="hidden laptop:block mockup-phone desktop:w-[330px] large:w-[300px] laptop:w-[250px] aspect-[1/2] border-primary">
                    <div className="camera"></div>
                    <div className="display">
                        <div className="w-full h-full bg-white"></div>
                    </div>
                </div>

                <div className={
                    'py-[50px] px-[22px] space-y-[2em] hidden flex-col laptop:flex '
                    + 'bg-white rounded-[50px] text-neutral-900 border '
                    + 'laptop:w-[175px] '
                    + 'large:w-[185px] '
                    + 'desktop:w-[195px] '
                    + 'dark:bg-[#1A232C] dark:text-white dark:border-slate-800'}>

                    <div className="flex flex-col">
                        <div className={classesPreviewAdvantageDigitLaptop}>2</div>
                        <p className={classesPreviewAdvantageTextLaptop}>Года<br /> на рынке</p>
                    </div>

                    <div className={classesPreviewAdvantageDividerLaptop} />

                    <div className="flex flex-col">
                        <div className={classesPreviewAdvantageDigitLaptop}>100</div>
                        <p className={classesPreviewAdvantageTextLaptop}>Готовых<br /> проектов</p>
                    </div>

                    <div className={classesPreviewAdvantageDividerLaptop} />

                    <div className="flex flex-col">
                        <div className={classesPreviewAdvantageDigitLaptop}>20т</div>
                        <p className={classesPreviewAdvantageTextLaptop}>Минимальный<br /> бюджет</p>
                    </div>

                </div>


            </div>

            <div className={
                'flex flex-col p-4 '
                + 'laptop:hidden '
                + 'bg-white rounded-[25px] text-neutral-900 '
                + 'dark:bg-[#1A232C] dark:text-white dark:border dark:border-slate-800'}>


                <div className="flex justify-between items-center">
                    <div className={classesPreviewAdvantageDigit}>2</div>
                    <p className={classesPreviewAdvantageText}>Года<br />на рынке</p>
                </div>

                <div className={classesPreviewAdvantageDivider} />

                <div className="flex justify-between items-center">
                    <div className={classesPreviewAdvantageDigit}>100</div>
                    <p className={classesPreviewAdvantageText}>Готовых проектов</p>
                </div>

                <div className={classesPreviewAdvantageDivider} />

                <div className="flex justify-between items-center">
                    <div className={classesPreviewAdvantageDigit}>20т</div>
                    <p className={classesPreviewAdvantageText}>Минимальный бюджет</p>
                </div>

            </div>

        </section>
    );

}
import React from 'react';

function CardPortfolio(props) {

    return (
        <section className={
            'flex p-[45px] mb-[100px] w-[750px] justify-between '
            + 'bg-white rounded-[50px] '
            + 'dark:bg-card-surface'}>

            <div className={'flex flex-col justify-between max-w-[300px]'}>

                <h4 className={
                    'text-[35px] leading-[32px] '
                    +'font-bold'
                }>
                    {props.title}
                </h4>

                <p className={
                    'text-justify text-[16px] leading-6 opacity-60 '
                }>
                    {props.description}
                </p>

                <div>
                    <h4 className={
                        'mb-[20px] '
                        + 'text-[24px] leading-[22px] font-bold'
                    }>
                        Бюджет проекта:
                    </h4>

                    <p className={
                        'text-[32px] leading-[29px] text-sky-500 font-extrabold'
                    }>
                        {props.budget}
                    </p>
                </div>

                <div>
                    <h4 className={
                        'mb-[20px] '
                        + 'text-[24px] leading-[22px] font-bold'
                    }>
                        Затрачено:
                    </h4>

                    <p className={
                        'text-[32px] leading-[29px] text-sky-500 font-extrabold'
                    }>
                        {props.result}
                    </p>
                </div>

                <img
                    className={
                        'w-[140px] h-[140px] '
                        + 'rounded-[15px]'}
                    src={props.qr} />
            </div>

            <div className={'flex justify-center items-center'}>
                <div class="mockup-phone border-primary h-[595px] aspect-[1/2] ">
                    <div class="camera"></div>
                    <div class="display">
                        <div class="bg-white w-full h-full"></div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default CardPortfolio;
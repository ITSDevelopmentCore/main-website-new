import React from 'react';

import WebAppOne from '../../assets/media/web-app-one.png'
import WebAppOneQR from '../../assets/media/web-app-one-qr.png'


export default function CardWebApp(props) {

    return (
        <section className='mb-20 bg-white rounded-card w-[852px] h-[609px] p-14 flex justify-between dark:bg-card-surface dark:border dark:border-slate-800'>
            <div className='basis-[380px]'>
                <h3 className='font-bold text-[35px] leading-[32px] mb-10 dark:text-white'>&#9749; Кофейня</h3>
                <p className='text-justify text-sm leading-6 opacity-60 mb-20'>
                    Данный бот демонстрирует внешний вид Telegram Web Apps.
                    приложения в Telegram могут иметь множество страниц и выполнять все, что могут мовременные мобильные приложения и дажн больше.
                    Кроме того - они превосходно работают на персональных компьютерах. Мы занимаемся разработкой Telegram блотов с их появления на свете.
                    Наши боты действительно повышают конверсионность и лояльность каждого, кто с ним взаимодействует.
                </p>
                <div className='flex justify-between'>
                <img src={WebAppOneQR}/>
                    <p className='text-xs opacity-60 text-neutral-900 w-36 dark:text-white'>Сканируйте QR-код или перейтите по ссылке, чтобы ознакомиться с тестовым приложением</p>
                </div>
            </div>
            <img src={WebAppOne}/>
        </section>
    )
}
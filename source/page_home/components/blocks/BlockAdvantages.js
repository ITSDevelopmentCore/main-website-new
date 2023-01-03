/**
 * Imports : React
 */
import React from "react";

/**
 * Imports : Media
 */
import IllustrationAdvantagesYearLight from '../../assets/media/illustration_advantages-year-light.png';
import IllustrationAdvantagesYearDark from '../../assets/media/illustration_advantages-year-dark.png';
import IllustrationAdvantagesClientsLight from '../../assets/media/illustration_advantages-clients-light.png';
import IllustrationAdvantagesClientsDark from '../../assets/media/illustration_advantages-clients-dark.png';
import IllustrationAdvantagesProjectsLight from '../../assets/media/illustration_advantages-projects-light.png';
import IllustrationAdvantagesProjectsDark from '../../assets/media/illustration_advantages-projects-dark.png';
import IllustrationAdvantagesTempLight from '../../assets/media/illustration_advantages-temp-light.png';
import IllustrationAdvantagesTempDark from '../../assets/media/illustration_advantages-temp-dark.png';

import { FiArrowDownRight } from 'react-icons/fi';
import CardAdvantage from "../view/CardAdvantage";

export default function BlockAdvantages() {

    return (
        <section className={
            'mt-[185px] '
        }>

            <h2 className={
                'mb-[55px] '
                + 'text-[28px] leading-[32px] font-extrabold text-center '
                + 'laptop:text-[75px] laptop:leading-[85px] laptop:text-left '
                + 'desktop:text-[95px] desktop:leading-[105px]'}>
                its.dev
                <FiArrowDownRight className="text-sky-500 inline-block" />
            </h2>

            <div className={'flex flex-col space-y-[30px] '}>

                <CardAdvantage
                    imageLight={IllustrationAdvantagesYearLight}
                    imageDark={IllustrationAdvantagesYearDark}
                    title={'Работаем с 2019 года'} />
                <CardAdvantage
                    imageLight={IllustrationAdvantagesClientsLight}
                    imageDark={IllustrationAdvantagesClientsDark}
                    title={'Заказчики по всей России и Европе'} />
                <CardAdvantage
                    imageLight={IllustrationAdvantagesProjectsLight}
                    imageDark={IllustrationAdvantagesProjectsDark}
                    title={'50 завершенных проектов'} />
                <CardAdvantage
                    imageLight={IllustrationAdvantagesTempLight}
                    imageDark={IllustrationAdvantagesTempDark}
                    title={'Самые высокие темпы развития среди Digital агенств по версии “Рейтинг рунета”'} />

            </div>

        </section>
    )

}
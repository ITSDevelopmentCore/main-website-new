/**
 * Imports : React
 */
import React from 'react';

function CardBonus(props) {

    return (
        <article className={
            'p-12 relative '
            + 'card_primary '
            + 'laptop:basis-0 laptop:grow'}>

            {props.icon}

            <h4 className={
                'font-extrabold text-[28px] leading-[25px] mb-6 '}>
                {props.title}
            </h4>

            <p className='w-[90%] text-[18px] leading-[24px] opacity-60 '>
                {props.description}
            </p>

        </article>
    )
}

export default CardBonus;
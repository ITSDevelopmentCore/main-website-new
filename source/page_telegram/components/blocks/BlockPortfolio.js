import React from 'react';

import SwiperPortfolio from '../view/SwiperPortfolio'

export default function BlockPortfolio(props) {


    return (
        <section className="mt-52">

            <h2 className='text-title leading-title text-neutral-900 font-extrabold mb-12
                           dark:text-white'>
                Портфолио
            </h2>

            <SwiperPortfolio />

        </section>
    )
}


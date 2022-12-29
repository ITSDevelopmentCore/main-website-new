import React from "react";
import Arrow from '../../assets/media/Arrow_home.svg'
import CardImg from '../../components/view/CardImg'

export default function BlockAdvantages() {

    return (
        <section>
            <h2 className="font-bold  text-6xl mb-[47px] flex">its.dev
                <img className="ml-[30px] mt-[15px]" src={Arrow} />
            </h2>
            <CardImg/>
        </section>
    )

}
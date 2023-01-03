import React, { useContext } from 'react';
import { ThemeContext } from '../../../common/components/blocks/Page';

export default function CardAdvantage(props) {

    const {theme} = useContext(ThemeContext);

    return (
        <section className={'w-full '}>

                <div className={
                    'flex items-center justify-center h-[320px] mb-[30px] ' 
                    + 'bg-white rounded-[50px] '
                    +'dark:bg-card-surface dark:border dark:border-slate-800'}>
                        
                    <img src={theme == 'dark' ? props.imageDark : props.imageLight} />
                </div>

                <div className={
                    'h-[110px] px-[30px] flex justify-center items-center '
                    +'bg-white rounded-[90px] '
                    +'dark:bg-card-surface dark:border dark:border-slate-800'}>

                    <p className={'text-[16px] leading-[21px] font-bold text-center'}>
                        {props.title}                    
                    </p>
                </div>

        </section>
    )
}
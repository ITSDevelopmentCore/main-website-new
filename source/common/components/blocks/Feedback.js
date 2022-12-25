import React from "react";
import FeedbackForm from "./FeedbackForm";
import '../../../page_telegram/css/index.scss'


function Form() {

  return (

    <div className={'flex justify-between mt-[270px]'}>

      <div className={'basis-[40%]'}>

        <h3 className={
          'mb-[36px] '
          + 'font-extrabold text-[64px] leading-[73px] '
          + 'dark:text-white'}>
          Оставьте заявку<br/> и мы <span className="text-sky-500"> свяжемся <br />с вами </span>
        </h3>

        <p className={
          'w-[370px] h-[105px] mt-9 '
          + 'text-slate-500 leading-[36px]'}>
          Среднее время ожидания обратной связи от 1 до 10 минут. В случае приложения технического задания время отклика может составлять от 10 до 20 минут.
        </p>

      </div>

      <FeedbackForm />

    </div>

  );
}

export default Form;
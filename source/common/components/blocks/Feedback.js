import React from "react";
import FeedbackForm from "./FeedbackForm";
import '../../../page_telegram/css/index.scss'


function Form() {

  return (

    <section className={
      'mt-[100px] mb-[140px] '
      +'laptop:mt-[270px] '
      +'laptop:flex laptop:justify-between'}>

      <div className={
        'basis-[50%] '
        +'large:basis-[40%]'}>

        <h3 className={
          'mb-[15px] text-[28px] leading-[32px] '
          + 'font-extrabold text-center '
          + 'laptop:text-[52px] laptop:leading-[58px] laptop:text-left '
          + 'large:text-[58px] large:leading-[64px] '
          + 'desktop:text-[64px] desktop:leading-[70px] '
          + 'dark:text-white'}>
          Оставьте заявку<br/> и мы <span className="text-sky-500"> свяжемся <br />с вами </span>
        </h3>

        <p className={
          'w-full mb-[70px] '
          + 'text-slate-500 text-[12px] leading-[24px] text-center '
          + 'laptop:text-[18px] laptop:text-left laptop:w-[370px] laptop:mt-[20px] '}>
          Среднее время ожидания обратной связи от 1 до 10 минут. В случае приложения технического задания время отклика может составлять от 10 до 20 минут.
        </p>

      </div>

      <FeedbackForm />

    </section>

  );
}

export default Form;
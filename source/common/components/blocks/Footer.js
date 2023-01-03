import React from "react";

import IcDzen from '../../assets/icons/IcDzen'
import IcVK from '../../assets/icons/IcVK'
import IcTelegram from '../../assets/icons/IcTelegram'

import { AiOutlineArrowUp } from 'react-icons/ai'
import Symbol from '../view/Symbol';

function Footer(props) {

  const scrollButtonHandler = () => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }) };

  return (
    <footer className="pb-[40px]">

      <div className="flex justify-center laptop:justify-between">

        <div className="flex space-x-8">

          <a href="https://vk.com/itsdevelopmentru">
            <IcVK theme={props.theme} />
          </a>

          <a href="https://google.com/">
            <IcDzen theme={props.theme} />
          </a>

          <a href="https://t.me/+3ERzYQm6fUxhNjky">
            <IcTelegram theme={props.theme} />
          </a>

        </div>


        <div
          className={
            'p-[3px] w-16 h-16 hidden tablets:block '
            + 'bg-gradient-to-r from-sky-300 to-sky-500 p-[3px] border-cyan-400 rounded-xl cursor-pointer'}
          onClick={scrollButtonHandler}>

          <div className="text-sky-500 flex justify-center items-center rounded-xl bg-white w-full h-full dark:bg-[#191E25]">
            <AiOutlineArrowUp className="w-8 h-8" />
          </div>

        </div>

      </div>

      <div className={
        'flex flex-col items-center mt-9 space-y-2 tablets:items-start '
        + 'font-light text-base text-black '
        + 'dark:text-white'}>

        <p className="">
          ОГРНИП: 322665800197196
        </p>
        <p className="">
          Copyright <Symbol symbol="&copy;" /> 2022. All rights reserved
        </p>

      </div>

    </footer>
  );
}

export default Footer;
import React from "react";
import ic_vk from "../assets/icons/ic_vk.svg";
import ic_dzen from "../assets/icons/ic_dzen.svg";
import ic_telegram from "../assets/icons/ic_telegram.svg";

import { AiOutlineArrowUp } from 'react-icons/ai'

function Footer() {

  const scrollButtonHandler = () => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }) };

  return (
    <div className="w-full h-[264px] bg-gray-100 py-[3em] px-[202px] m-auto">

      <div className="flex justify-between">

        <div className="flex justify-between w-[250px]">

          <a href="https://vk.com/itsdevelopmentru">
            <img
              className="w-16 h-16 cursor-pointer"
              src={ic_vk}
              alt="" />
          </a>

          <a href="https://google.com/">
            <img
              className="w-16 h-16 cursor-pointer"
              src={ic_dzen}
              alt="" />
          </a>

          <a href="https://t.me/+3ERzYQm6fUxhNjky">
            <img
              className="w-16 h-16 cursor-pointer"
              src={ic_telegram}
              alt="" />
          </a>

        </div>


        <div
          className="w-16 h-16 bg-gradient-to-r from-sky-300 to-sky-500 p-[3px] border-cyan-400 rounded-xl cursor-pointer"
          onClick={scrollButtonHandler}>
            
          <div className="text-sky-500 flex justify-center items-center rounded-xl bg-white w-full h-full">
            <AiOutlineArrowUp className="w-8 h-8" />
          </div>

        </div>

      </div>

      <p className="font-light text-base mt-[48px] mb-[12px] text-black">
        ОГРНИП: 322665800197196
      </p>
      <p className="font-light text-base mb-[38px] text-black">
        Copyright &copy; 2022. All rights reserved
      </p>

    </div>
  );
}

export default Footer;
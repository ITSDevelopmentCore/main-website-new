import React from "react";
import vk from "../assets/icons/vk.svg";
import dzen from "../assets/icons/dzen.svg";
import telegram from "../assets/icons/telegram.svg";
import arrow from "../assets/icons/arrow.svg";

function Footer() {

  return (
    <div className="main-footer w-full h-[264px]  bg-gray-100 mt-[100%] pt-[3em] relative bottom-0">
      <div className="container">
        <div className="icons flex w-full h-[100px] ml-[197px]">
          <a href="https://vk.com/itsdevelopmentru">
            <img className="w-16 h-16 cursor-pointer" src={vk} alt="" />
          </a>
          <a href="https://itsdevelopment.ru/">
            <img className="w-16 h-16  ml-[26px] cursor-pointer" src={dzen} alt="" />
          </a>
          <a href="https://t.me/+3ERzYQm6fUxhNjky">
            <img className="w-16 h-16 ml-[26px] cursor-pointer" src={telegram} alt="" />
          </a>
          <button className="upBtn w-16 h-16 ml-[65%] border-2 border-cyan-400 rounded-xl cursor-pointer"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            }}
          >
            <img className="w-8 h-8 ml-[15px] border-cyan-400" src={arrow} alt="" />
          </button>

        </div>


        <div className="col">
          <h1 className="list-unstyled font-light text-base mt-[10px] mb-[12px] ml-[197px] text-black">
            <p>All rights reserved и ОГРНИП: 000000000000</p>
          </h1>
          <p className="col-sm  font-light text-base  ml-[197px] text-black">
            Copyright &copy;{new Date().getFullYear()} its.dev
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
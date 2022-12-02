import React from "react";
import btn from "../../common/components/btnUp";
import vk from "../assets/icons/vk.svg"; 
import dzen from "../assets/icons/dzen.svg"; 
import telegram from "../assets/icons/telegram.svg"; 
import arrow from "../assets/icons/arrow.svg"; 
import ScrollToTop from "react-scroll-to-top";

function Footer() {
  
  return (
    <div className="main-footer w-full h-[264px] bg-gray-100 mt-[100%] pt-[3em] relative bottom-0">
      <div className="container">
        <div className="icons flex w-full h-[100px] ml-[10%]">
        <a href="https://vk.com/itsdevelopmentru">
        <img  className="w-[66px] h-[66px] cursor-pointer"  src={vk} alt=""/>
        </a>
        <a href="https://itsdevelopment.ru/">
        <img className="w-[66px] h-[66px]  ml-[2%] cursor-pointer"  src={dzen} alt=""/>
        </a>
        <a href="https://t.me/+3ERzYQm6fUxhNjky">
        <img className="w-[66px] h-[66px] ml-[2%] cursor-pointer"  src={telegram} alt=""/>
        </a>
       <div className="upBtn w-[66px] h-[66px] ml-[70%] border-2 border-cyan-400 rounded-xl cursor-pointer" src={btn}>
       <img className="w-[66px] h-[66px] text-center justify-center border-cyan-400"  src={arrow} alt=""/>
       </div>

        </div>
          <div className="col">
            <h1 className="list-unstyled font-light text-base mt-[48px] mb-[12px] ml-[10%] text-black">
              <p>All rights reserved и ОГРНИП: 000000000000</p>
            </h1>
            <p className="col-sm font-light text-base mb-[38px] ml-[10%] text-black">
         Copyright &copy;{new Date().getFullYear()} its.dev
          </p>
          </div>
      </div>
    </div>
  );
}

export default Footer;
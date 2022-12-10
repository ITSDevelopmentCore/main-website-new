import React from "react";
import Techico from "../assets/icons/techTask.svg";

function Form() {

  return (
    <div className="w-full h-full ">
      <div className="w-full ml-[10%] ">
        <h1 className="font-extrabold text-[64px] dark:text-white " >Оставьте заявку</h1>
        <span className="font-extrabold text-[64px] dark:text-white">и мы</span>
        <span className="font-extrabold text-[64px] text-sky-500 ">  свяжемся</span>
        <p className="font-extrabold text-[64px] text-sky-500">с вами</p>
        <p className=" w-[370px] h-[105px] font-normal text-lg mt-9 dark:text-white">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className=" flex">

          <p className="font-normal text-lg dark:text-white mb-[14px]"> Номер телефона
          </p>
 
           <input className="w-[400px] h-[71px] rounded-lg bg-white pl-[25px] mt-[60px] relative mr-[300px]" type={"tel"} placeholder="+ 7 999 999 99 99"/>

          {/* <input className="w-[400px] h-[71px] ml-[55px] rounded-lg bg-white pl-[25px]" placeholder="my@gmail.com" />
           
          <p className="font-normal text-lg dark:text-white mb-[14px] mt-[24px]">Ваше имя
          <span className="ml-[362px]">Техическое задание</span>
          </p>
          <input className="w-[400px] h-[71px] rounded-lg bg-white pl-[25px]" placeholder="Иван"/>
          <p className="">Прикрепите техническое задание / описание проекта</p>  */}

{/*          
          <button className="ml-[50px] relative mb-[230px]"  >
          <img
              className="w-[71px] h-[71px] cursor-pointer"
              src={Techico}
              alt="" />
          </button>
           */}
        </div>

      </div>
    </div>

  );
}

export default Form;
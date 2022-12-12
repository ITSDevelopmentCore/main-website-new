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
        <div className="">

          <p className="font-normal text-lg dark:text-white mb-[14px] "> Номер телефона
          <span className="ml-[300px]">E-mail</span>
          </p>
 
           <input className="w-[400px] h-[71px] rounded-lg bg-white pl-[25px] border-2 focus:border-sky-500 " type={"tel"} 
           placeholder="+ 7 999 999 99 99"/>

         <input className="w-[400px] h-[71px] ml-[50px] rounded-lg bg-white pl-[25px]" placeholder="my@gmail.com" />
           
          <p className="font-normal text-lg dark:text-white mb-[14px] mt-[24px]">Ваше имя
          <span className="ml-[362px]">Техическое задание</span>
          </p>
          
          <input className="w-[400px] h-[71px] rounded-lg bg-white pl-[25px]" placeholder="Иван"/> 
          <label class="inline-block">
            <img className="w-[71px] h-[71px]  cursor-pointer ml-[50px] mb-[-50px]"
            src={Techico}
            alt="" />
            <input className="opacity-0" type="file" />
          </label>   
        
          <p className="font-normal text-lg dark:text-white mb-[14px] mt-[24px]">
          Подробное описание требуемого проекта
          </p>
             <input className="w-[855px] h-[142px] pl-[25px] pb-[89px] pt-[18px] rounded-lg" 
             placeholder="Или опишите Ваш проект" />
        </div>

        <button className="w-[280px] h-[71px] mt-[42px] rounded-lg text-xl text-white font-bold drop-shadow-xl shadow-xl bg-gradient-to-t from-sky-500 to-sky-300">
              Отправить
            </button>

      </div>
    </div>

  );
}

export default Form;
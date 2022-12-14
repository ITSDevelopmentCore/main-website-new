import React from "react";
import Techico from "../assets/icons/techTask.svg";
import Symbol from './Symbol'


function Form() {
  const borderChangeColor  = () => {style={ this:props.boxClicked === 1 ? color: blue }};

  return (
    <div className="w-full h-full ">
      <div className="w-full ml-[3%] flex">
        <div className="mr-[55px]">
        <h1 className="font-extrabold text-[64px] dark:text-white" >Оставьте заявку и мы
        <span className="text-sky-500"> свяжемся с вами
</span>

        </h1>
         <p className="w-[370px] h-[105px] font-normal text-lg mt-[36px] text-slate-500">
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
         nisi ut aliquip ex ea commodo consequat.
         </p>

        </div>
         <div className="">
          <p className="font-normal text-lg dark:text-white mb-[14px] "> Номер телефона
          <span className="ml-[300px]">E-mail</span>
          </p>
 
           <input className="w-[400px] h-[71px] rounded-lg bg-white pl-[25px] border-2 
           dark:bg-gradient-to-t from-gray-800 to-slate-800" 
          onClick={borderChangeColor}
            type={"tel"} 
           placeholder=" 7 999 999 99 99">
          
           </input>
         

         <input className="w-[400px] h-[71px] ml-[50px] rounded-lg bg-white pl-[25px] 
         dark:bg-gradient-to-t from-gray-800 to-slate-800 focus:border-sky-500 " placeholder="my@gmail.com" />
           
          <p className="font-normal text-lg dark:text-white mb-[14px] mt-[24px]">Ваше имя
          <span className="ml-[362px]">Техическое задание</span>
          </p>
          
          <input className="w-[400px] h-[71px] rounded-lg bg-white pl-[25px]
          dark:bg-gradient-to-t from-gray-800 to-slate-800" placeholder="Иван"/> 



          <label className="inline-block">
            <img className="w-[71px] h-[71px]  cursor-pointer ml-[50px] mb-[-50px]"
            src={Techico}
            alt="" />
            <input id="imgup1"  className="" type="file" name="imagefile" 
             onchange="document.getElementsByName('imgfn1')[0].value = document.getElementById('imgup1').value;"></input>
          </label>   
        
          <p className="font-normal text-lg dark:text-white mb-[14px] mt-[24px]">
          Подробное описание требуемого проекта
          </p>
             <input className="w-[855px] h-[142px] pl-[25px] pb-[89px] pt-[18px] rounded-lg
             dark:bg-gradient-to-t from-gray-800 to-slate-800" 
             placeholder="Или опишите Ваш проект" />
        
                   <div>
        <button className="mt-[42px] shadow-blue text-white rounded-lg text-xl font-bold w-[280px]  h-[71px] 
        bg-gradient-to-t  from-sky-500 to-sky-300 
                dark:to-sky-500 transition-all duration-200 hover:shadow-blue-extended
         ">
              Отправить
            </button>
            </div>
            </div>
      </div>
    </div>

  );
}

export default Form;
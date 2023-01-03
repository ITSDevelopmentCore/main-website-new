import React, { useState } from "react"

/**
 * Imports : Icons
 */
import IcTechTask from '../../assets/icons/ic_tech-task.svg'
import Symbol from '../view/Symbol';


export default function FeedbackForm() {

    function extractFileName(file) {
        var fileList = file.target.files;
        if (file.target.files.length != 0) {
            setFile(fileList[0].name)
        }
        alert(fileList[0].name)
    }

    const [file, setFile] = useState('Прикрепите техническое задание или описание проекта');

    return (
        <form className={'grow flex flex-col'}>

            <div className={'large:flex large:space-x-[50px] mb-[20px]'}>

                <div className="basis-1/2">

                    <p className={'mb-3.5 '}>
                        Номер телефона <span className="text-red-400"><Symbol symbol='*' /></span>
                    </p>

                    <input
                        className={
                            'w-full h-[70px] p-6 mb-6 '
                            + 'font-sans opacity-50 rounded-lg focus:outline-none focus:border-2 focus:border-sky-500 caret-sky-500 '
                            + 'laptop:font-semibold '
                            + 'dark:bg-slate-800 dark:text-white'}
                        type='tel'
                        placeholder='7 999 999 99 99'
                        name="number">
                    </input>

                    <p className={'mb-3.5 '}>
                        Как к Вам обращаться?
                    </p>

                    <input
                        className={
                            'w-full h-[70px] p-6 mb-6 '
                            + 'font-sans opacity-50 rounded-lg focus:outline-none focus:border-2 focus:border-sky-500 caret-sky-500 '
                            + 'laptop:font-semibold '
                            + 'dark:bg-slate-800'}
                        placeholder="Иван"
                        name="name" />

                </div>


                <div className="basis-1/2">

                    <p className={'mb-3.5 '}>
                        E-mail <span className="text-red-400"><Symbol symbol='*' /></span>
                    </p>

                    <input
                        className={
                            'w-full h-[70px] p-6 mb-6 '
                            + 'font-sans opacity-50 rounded-lg focus:outline-none focus:border-2 focus:border-sky-500 caret-sky-500 '
                            + 'laptop:font-semibold '
                            + 'dark:bg-slate-800'}
                        placeholder="my@gmail.com"
                        name="email" />

                    <p className={'mb-3.5 '}>
                        Техническое задание
                    </p>


                    <label
                        className="flex mb-5 items-center"
                        htmlFor='linkedByOuterLabel'>

                        <img className={
                            'w-[45px] h-[45px] mr-5 '
                            + 'cursor-pointer rounded-lg'}
                            src={IcTechTask}>
                        </img>

                        <input
                            className="hidden"
                            type="file"
                            id="linkedByOuterLabel"
                            accept=".doc, .txt, .pdf"
                            onChange={(e) => extractFileName(e)}
                            name="techtask" />

                        <div className="text-[14] leading-[16px] grow dark:text-white">{file}</div>

                    </label>

                </div>

            </div>

            <p className={'mb-3.5 '}>
                Подробное описание требуемого проекта
            </p>


            <textarea
                className={
                    'w-full h-[140px] pb-[90px] p-6 '
                    + 'font-sans rounded-lg opacity-50 focus:outline-none focus:border-2 focus:border-sky-500 caret-sky-500 scrollbar-hide '
                    + 'laptop:font-semibold '
                    + 'dark:bg-slate-800'}
                placeholder="Или опишите Ваш проект" />

            <button className={
                'mt-10 w-[170px] p-[10px] mx-auto '
                + 'text-white rounded-lg text-[14px] leading-[20px] font-bold shadow-blue bg-gradient-to-t from-sky-500 to-sky-300 dark:to-sky-500 transition-all duration-200 hover:shadow-blue-extended '
                + 'laptop:mx-0 laptop:w-[280px]'}>
                Отправить
            </button>

        </form>
    )
}
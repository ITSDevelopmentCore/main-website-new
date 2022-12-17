import React, { useState } from "react"

/**
 * Imports : Icons
 */
import IcTechTask from '../assets/icons/ic_tech-task.svg'


export default function FeedbackForm(props) {


    function extractFileName(file) {
        var fileList = file.target.files;
        if (file.target.files.length != 0) {
            setFile(fileList[0].name)
        }
        alert(fileList[0].name)
    }

    const [file, setFile] = useState('Прикрепите техническое задание или описание проекта');

    return (
        <form className={
            'flex flex-col'}>

            <div className={
                'flex space-x-[50px]'
            }>

                <div className="mb-5">

                    <p className={
                        'mb-3.5 '
                        + 'font-normal text-xl leading-[38px] '
                        + 'dark:text-white'}>
                        Номер телефона
                    </p>

                    <input
                        className={
                            'w-[400px] h-[70px] p-6 mb-6 '
                            + 'font-sans font-semibold rounded-lg focus:outline-none focus:border-2 focus:border-sky-500 caret-sky-500 text-lg '
                            + 'dark:bg-slate-800 dark:text-white'}
                        type='tel'
                        placeholder='7 999 999 99 99'>
                    </input>

                    <p className={
                        'mb-3.5 '
                        + 'font-normal text-xl leading-[38px] '
                        + 'dark:text-white'}>
                        Как к Вам обращаться?
                    </p>

                    <input
                        className={
                            'w-[400px] h-[70px] p-6 mb-6'
                            + 'font-sans font-semibold rounded-lg focus:outline-none focus:border-2 focus:border-sky-500 caret-sky-500 text-lg '
                            + 'dark:bg-slate-800'}
                        placeholder="Иван" />

                </div>


                <div>
                    <p className={
                        'mb-3.5 '
                        + 'font-normal text-xl leading-[38px] '
                        + 'dark:text-white'}>
                        E-mail
                    </p>

                    <input
                        className={
                            'w-[400px] h-[70px] p-6 mb-6 '
                            + 'font-sans font-semibold rounded-lg focus:outline-none focus:border-2 focus:border-sky-500 caret-sky-500 text-lg '
                            + 'dark:bg-slate-800'}
                        placeholder="my@gmail.com" />

                    <p className={
                        'mb-3.5 '
                        + 'font-normal text-xl leading-[38px] '
                        + 'dark:text-white'}>
                        Техническое задание
                    </p>


                    <div className="flex items-center">

                        <label className="inline-block w-[70px] h-[70px] mr-5"
                        for="linkedByOuterLabel">
                            <img className={
                                'w-full h-full flex justify-center items-center '
                                + 'cursor-pointer bg-gradient-to-t from-sky-500 to-sky-300 rounded-lg'}
                                src={IcTechTask}>
                            </img>
                            <input
                                className="hidden"
                                type="file"
                                id="linkedByOuterLabel"
                                name="linkedByOuterLabel"
                                accept=".doc, .txt, .pdf"
                                onChange={(e) => extractFileName(e)} />
                        </label>

                        <div className="w-[270px] dark:text-white">{file}</div>

                    </div>


                </div>

            </div>


            <p className={
                'mb-3.5 '
                + 'font-normal text-xl leading-[38px] '
                + 'dark:text-white'}>
                Подробное описание требуемого проекта
            </p>


            <input
                className={
                    'w-full h-[142px] pb-[90px] p-6 '
                    + 'font-sans font-semibold rounded-lg focus:outline-none focus:border-2 focus:border-sky-500 caret-sky-500 text-lg '
                    + 'dark:bg-slate-800'}
                placeholder="Или опишите Ваш проект" />

            <div>
                <button className="mt-10 shadow-blue text-white rounded-lg text-xl font-bold w-[280px]  h-[71px] bg-gradient-to-t  from-sky-500 to-sky-300 dark:to-sky-500 transition-all duration-200 hover:shadow-blue-extended">
                    Отправить
                </button>
            </div>

        </form>
    )
}
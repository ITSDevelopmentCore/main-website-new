import React, {useState} from "react"

/**
 * Imports : Icons
 */
import { AiOutlineDownload } from 'react-icons/ai'


export default function FeedbackForm(props) {

    const [file, setFile] = useState('');

    function workWithFile(file)
    {
        var fileList = file.target.files;
        console.log(fileList[0].name)
    }

    return (
        <form>
            <p className={
                'mb-3.5 '
                + 'font-normal text-lg '
                + 'dark:text-white'}>
                Номер телефона
            </p>

            <input
                className={
                    'w-[400px] h-[71px] p-6 '
                    + 'font-sans rounded-lg focus:outline-none focus:border-2 focus:border-sky-500 '
                    + 'dark:bg-slate-800'}
                type='tel'
                placeholder='7 999 999 99 99'>
            </input>

            <input
                className={
                    'w-[400px] h-[71px] ml-[50px] p-6 '
                    + 'font-sans rounded-lg focus:outline-none focus:border-2 focus:border-sky-500 '
                    + 'dark:bg-slate-800'}
                placeholder="my@gmail.com" />

            <p className="font-normal text-lg dark:text-white mb-3.5 mt-6">
                Ваше имя <span className="ml-[362px]">Техническое задание</span>
            </p>

            <input
                className={
                    'w-[400px] h-[71px] p-6 '
                    + 'font-sans rounded-lg focus:outline-none focus:border-2 focus:border-sky-500 '
                    + 'dark:bg-slate-800'}
                placeholder="Иван" />

            <label className="inline-block">
                <button className="w-[71px] h-[71px] cursor-pointer ml-[50px] mb-[-50px] bg-gradient-to-t  from-sky-500 to-sky-300 rounded-lg flex justify-center items-center">
                    <AiOutlineDownload className="w-1/2 h-1/2 text-white" />
                </button>
                <input
                    className="opacity-0"
                    type="file"
                    onChange={workWithFile} />
            </label>

            <p className="font-normal text-lg dark:text-white mb-3.5 mt-6">
                Подробное описание требуемого проекта
            </p>

            <input
                className={
                    'w-[400px] h-[71px] pb-[89px] p-6 '
                    + 'font-sans rounded-lg focus:outline-none focus:border-2 focus:border-sky-500 '
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
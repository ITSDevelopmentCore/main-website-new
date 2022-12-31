import React from 'react';

/**
 * Imports : Media
 */
import { BsMoonStarsFill } from 'react-icons/bs';

/**
 * Imports : Scripts
 */
import { applyTailwindDarkTheme } from "../../scripts/themeScripts";
import useCookies from 'react-cookie/cjs/useCookies';


function DarkThemeModal() {

    const [cookies, setCookie] = useCookies(["user"]);

    function positiveClick()
    {
        applyTailwindDarkTheme(true);
        setCookie('theme', 'dark');
    }

    function negativeClick()
    {
        applyTailwindDarkTheme(false);
        setCookie('theme', 'light');
    }

    return (
        
        <div id='modal-dark-theme' class={"modal-box hidden right-5 bottom-5 z-10 bg-card-surface border border-slate-800 text-white overflow-hidden"}>
            <BsMoonStarsFill className='text-blue-400 absolute h-full w-full -z-[1]'/>
            <h3 class="font-bold text-lg">За окном уже темно</h3>
            <p class="py-4">Включим ночную тему?</p>
            <div class="modal-action">
                <label for="my-modal" class="btn" onClick={() => positiveClick()}>Да</label>
                <label for="my-modal" class="btn" onClick={() => negativeClick()}>Нет</label>
            </div>
        </div>
    )
}
export default DarkThemeModal;
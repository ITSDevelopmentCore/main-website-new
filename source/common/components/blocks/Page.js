/**
 * Imports : React
 */
import React, { useEffect, useState } from "react"
import { useCookies } from "react-cookie";

/**
 * Imports : Scripts
 */
import { applyTailwindDarkTheme } from "../../scripts/themeScripts";
import { showDarkThemeModal } from "../../scripts/changeViewByIdScripts";


/**
 * Imports : Blocks
 */
import ModalDarkTheme from "../modals/ModalDarkTheme";
import Footer from "../blocks/Footer";
import Header from "../blocks/Header";

export const ThemeContext = React.createContext();

export default function Page(props) {

    const [cookies, setCookie] = useCookies();
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        workWithFirstVisit();
        workWithTheme();
    })

    return (
        <ThemeContext.Provider value={{ theme, changeThemeCallback }}>
            <Header />
            <ModalDarkTheme />
            <main>
                {props.children}
            </main>
            <Footer />
        </ThemeContext.Provider>
    )

    function changeThemeCallback(changedToDark) {
        if (changedToDark) {
            setCookie('theme', 'dark');
            applyTailwindDarkTheme(true);
            setTheme('dark');
        } else {
            setCookie('theme', 'light');
            applyTailwindDarkTheme(false);
            setTheme('light');
        }
    }

    function workWithFirstVisit() {
        if (cookies.firstVisit == undefined) {
            setTimeout(() => { showDarkThemeModal() }, 3000);
            setCookie('firstVisit', false);
        }
    }

    function workWithTheme() {
        if (cookies.theme == 'dark') {
            applyTailwindDarkTheme(true);
            setTheme('dark');
        }
        if (cookies.theme == 'light') {
            applyTailwindDarkTheme(false);
            setTheme('light')
        }
    }

}
/**
 * Imports : React
 */
import React, { useEffect, useState } from "react"
import { CookiesProvider, useCookies } from "react-cookie";

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
    const [cookies, setCookie] = useCookies(["user"]);
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        workWithFirstVisit();
        workWithTheme();
    })

    return (
        <CookiesProvider>
            <ThemeContext.Provider value={{ theme, changeThemeCallback }}>
                <Header />
                <ModalDarkTheme />
                <main>
                    {props.children}
                </main>
                <Footer />
            </ThemeContext.Provider>
        </CookiesProvider>
    )

    function changeThemeCallback(changedToDark) {
        if (changedToDark) {
            setCookie('theme', 'dark');
            setTheme('dark');
            applyTailwindDarkTheme(true);
        } else {
            setCookie('theme', 'light');
            setTheme('light');
            applyTailwindDarkTheme(false);
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
            setTheme('dark')
        }
    }

}
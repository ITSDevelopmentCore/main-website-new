import React, { useEffect, useState, createContext, useContext } from "react"
import * as ReactDOM from 'react-dom/client';

/**
 * Imports : Style
 */
import '../css/index.scss'

/**
 * Imports: Blocks
 */
import ModalDarkTheme from "../../common/components/modals/ModalDarkTheme";
import Footer from "../../common/components/blocks/Footer";
import Header from "../../common/components/blocks/Header";
import Feedback from "../../common/components/blocks/Feedback";
import Preview from "../components/blocks/BlockPreview";
import BlockAdvantages from "../components/blocks/BlockAdvantages";
import BlockWebApps from "../components/blocks/BlockWebApps";
import BlockStages from "../components/blocks/BlockStages";
import BlockPortfolio from "../components/blocks/BlockPortfolio";

import { CookiesProvider, useCookies } from "react-cookie";
import { applyTailwindDarkTheme } from "../../common/scripts/themeScripts";
import { showDarkThemeModal } from "../../common/scripts/changeViewByIdScripts";

let root = document.getElementById("root");
let reactDom = ReactDOM.createRoot(root)
reactDom.render(
    <CookiesProvider>
        <App />
    </CookiesProvider>
)

function App() {
    const [cookies, setCookie] = useCookies(["user"]);
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        workWithFirstVisit();
        workWithTheme();
    })

    return (
        <ThemeContext.Provider value={{theme, changeThemeCallback}}>
            <Header />
            <main>
                <ModalDarkTheme />
                <Preview />
                <BlockAdvantages />
                <BlockWebApps />
                <BlockStages />
                <BlockPortfolio />
                <Feedback />
            </main>
            <Footer />
        </ThemeContext.Provider>
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

export const ThemeContext = React.createContext();

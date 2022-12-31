import React, { useEffect, useState, createContext } from "react"
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
import { applyTailwindDarkTheme, isTailwindDarkThemeEnabled } from "../../common/scripts/themeScripts";
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

    const callbacks = {
        callbackThemeChange: callbackChangeThemeImpl,
    }

    useEffect(() => {
        workWithFirstVisit();
        workWithTheme();
    })

    return (
        <>
            <Header
                theme={theme}
                callbackThemeChange={callbackChangeThemeImpl} />
            <main>
                <ModalDarkTheme
                    theme={theme}
                    callbackThemeChange={callbackChangeThemeImpl} />
                <Preview />
                <BlockAdvantages />
                <BlockWebApps />
                <BlockStages />
                <BlockPortfolio />
                <Feedback />
            </main>
            <Footer />
        </>
    )

    function workWithFirstVisit() {
        if (cookies.firstVisit == undefined) {
            const timer = setTimeout(() => {
                showDarkThemeModal();
            }, 3000);
            setCookie('firstVisit', false);
        }
    }

    function workWithTheme() {
        if (cookies.theme == 'dark') {
            applyTailwindDarkTheme(true);
            setTheme('dark')
        }
    }

    function callbackChangeThemeImpl(toDarkMode) {
        if (toDarkMode) {
            applyTailwindDarkTheme(true);
            setCookie('theme', 'dark');
            setTheme('dark');
        } else {
            applyTailwindDarkTheme(false);
            setCookie('theme', 'light');
            setTheme('light');
        }
    }

}




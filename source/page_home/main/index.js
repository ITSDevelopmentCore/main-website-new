import React, {useEffect} from "react"
import * as ReactDOM from 'react-dom/client';

/**
 * Imports : Style
 */
import '../css/index.scss'

import ModalDarkTheme from "../../common/components/modals/ModalDarkTheme";
import Footer from "../../common/components/blocks/Footer";
import Header from "../../common/components/blocks/Header";
import Feedback from "../../common/components/blocks/Feedback";
import BlockPreview from "../components/blocks/BlockPreview";
import BlockAdvantages from "../components/blocks/BlockAdvantages";
import BlockServices from "../components/blocks/BlockServices";
import BlockNews from "../components/blocks/BlockNews";

import { CookiesProvider, useCookies } from "react-cookie";
import { applyTailwindDarkTheme } from "../../common/scripts/themeScripts";
import { showDarkThemeModal } from "../../common/scripts/changeViewByIdScripts";


function App() {
    const [cookies, setCookie] = useCookies(["user"]);

    useEffect(() => {
        if (cookies.theme == 'dark') {
            applyTailwindDarkTheme(true);
        }
        else {
            applyTailwindDarkTheme(false);
        }

        if (cookies.firstVisit == undefined) {
            const timer = setTimeout(() => {
                showDarkThemeModal();
            }, 3000);
            setCookie('firstVisit', false);
        }
    })

    return (
        <main>
            <ModalDarkTheme />
            <Header />
            <BlockPreview />
            <BlockAdvantages/>
            <BlockServices />
            <BlockNews/>
            <Feedback />
            <Footer />
        </main>)
}

initialize();

function initialize() {
    let root = document.getElementById("root");
    let reactDom = ReactDOM.createRoot(root)
    reactDom.render(
        <CookiesProvider>
            <App />
        </CookiesProvider>
    )
}

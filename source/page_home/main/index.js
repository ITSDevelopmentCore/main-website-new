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
import Preview from "../components/blocks/BlockPreview";
import AboutCompany from "../components/blocks/BlockAboutCompany";
import Services from "../components/blocks/BlockServices";
import News from "../components/blocks/BlockNews";

import { CookiesProvider, useCookies } from "react-cookie";
import { setDarkTheme } from "../../common/scripts/themeScripts";
import { showDarkThemeModal } from "../../common/scripts/changeViewByIdScripts";


function App() {
    const [cookies, setCookie] = useCookies(["user"]);

    useEffect(() => {
        if (cookies.theme == 'dark') {
            setDarkTheme(true);
        }
        else {
            setDarkTheme(false);
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
            <Preview />
            <AboutCompany/>
            <Services />
            <News/>
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

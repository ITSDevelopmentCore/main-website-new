import React from "react"
import * as ReactDOM from 'react-dom/client';

/**
 * Imports : Style
 */
import '../css/index.scss'

/**
 * Imports: Blocks
 */
import Footer           from "../../common/components/Footer";
import Header           from "../../common/components/Header";
import Feedback         from "../../common/components/Feedback";
import Preview          from "../components/blocks/BlockPreview";
import BlockAdvantages  from "../components/blocks/BlockAdvantages";
import BlockWebApps     from "../components/blocks/BlockWebApps";
import BlockStages      from "../components/blocks/BlockStages";
import BlockPortfolio   from "../components/blocks/BlockPortfolio";


initialize();


function initialize() {
    let root = document.getElementById("root");
    let reactDom = ReactDOM.createRoot(root)
    reactDom.render(
        <main>
            <Header />
            <Preview />
            <BlockAdvantages />
            <BlockWebApps />
            <BlockStages />
            <BlockPortfolio />
            <Feedback />
            <Footer />
        </main>
    )
}

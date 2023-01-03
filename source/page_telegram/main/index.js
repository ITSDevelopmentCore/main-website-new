import React from "react"
import * as ReactDOM from 'react-dom/client';

/**
 * Imports : Style
 */
import '../css/index.scss'

/**
 * Imports: Blocks
 */

import Feedback from "../../common/components/blocks/Feedback";
import Preview from "../components/blocks/BlockPreview";
import BlockAdvantages from "../components/blocks/BlockAdvantages";
import BlockWebApps from "../components/blocks/BlockWebApps";
import BlockStages from "../components/blocks/BlockStages";
import BlockPortfolio from "../components/blocks/BlockPortfolio";
import Page from "../../common/components/blocks/Page";


let root = document.getElementById("root");
let reactDom = ReactDOM.createRoot(root)
reactDom.render(
    <Page>
        <Preview />
        <BlockAdvantages />
        <BlockWebApps />
        <BlockStages />
        <BlockPortfolio />
        <Feedback />
    </Page>
)


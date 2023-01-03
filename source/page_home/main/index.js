import React from "react"
import * as ReactDOM from 'react-dom/client';

/**
 * Imports : Style
 */
import '../css/index.scss'

import Feedback from "../../common/components/blocks/Feedback";
import BlockPreview from "../components/blocks/BlockPreview";
import BlockAdvantages from "../components/blocks/BlockAdvantages";
import BlockServices from "../components/blocks/BlockServices";
import BlockNews from "../components/blocks/BlockNews";
import Page from "../../common/components/blocks/Page";


let root = document.getElementById("root");
let reactDom = ReactDOM.createRoot(root)
reactDom.render(
    <Page>
        <BlockPreview />
        <BlockAdvantages />
        <BlockServices />
        <BlockNews />
        <Feedback />
    </Page>
)




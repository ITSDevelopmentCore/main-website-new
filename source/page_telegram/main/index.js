import React from "react"
import * as ReactDOM from 'react-dom/client';

import style from '../css/index.scss'


const reactRootHeader = "react-root-header";

function initialize() 
{
    initializeHeader();
}

function initializeHeader()
{
    let root = document.getElementById(reactRootHeader);
    root.resiza
    let reactDom = ReactDOM.createRoot(root)
    reactDom.render(
        <Header/>
    )
}
import React from "react"
import * as ReactDOM from 'react-dom/client';
import style from '../css/index.scss'

import Footer from "../../common/components/Footer";
import Header from "../../common/components/Header";

const reactRootHeader = "react-root-header";
const reactRootFooter = "react-root-footer";

initialize();

function initialize() 
{
     initializeHeader();
}

function initializeFooter()
{
    let root = document.getElementById(reactRootFooter);
    let reactDom = ReactDOM.createRoot(root)
    reactDom.render(
        <Footer/>
    )
}

function initializeHeader()
{
    let root = document.getElementById(reactRootHeader);
    let reactDom = ReactDOM.createRoot(root)
    reactDom.render(
        <Header/>
    )
}
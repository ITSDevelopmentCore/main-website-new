import React from "react"
import * as ReactDOM from 'react-dom/client';
import style from '../css/index.scss'

import Footer from "../../common/components/Footer";
import Header from "../../common/components/Header";
import Preview from "../components/blocks/BlockPreview";


const reactRootHeader = "react-root-header";
const reactRootFooter = "react-root-footer";
const reactRootPreview = "react-root-preview";


initialize();

function initialize() 
{
     initializeHeader();
     initializePreview();
}

function initializeFooter()
{
    let root = document.getElementById(reactRootFooter);
    let reactDom = ReactDOM.createRoot(root)
    reactDom.render(
        <Footer/>
    )
}


function initializePreview()
{
    let root = document.getElementById(reactRootPreview);
    let reactDom = ReactDOM.createRoot(root)
    reactDom.render(
        <Preview/>
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
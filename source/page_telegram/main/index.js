import React from "react"
import * as ReactDOM from 'react-dom/client';
import style from '../css/index.scss'

import Footer from "../../common/components/Footer";
import Header from "../../common/components/Header";
import Preview from "../components/blocks/BlockPreview";
import BlockAdvantages from "../components/blocks/BlockAdvantages";
import BlockWebApps from "../components/blocks/BlockWebApps";


import Form from "../../common/components/feedBackForm";


const reactRootHeader = "react-root-header";
const reactRootFooter = "react-root-footer";
const reactRootForm = "react-root-form";

const reactRootPreview = "react-root-preview";
const reactRootAdvantages = "react-root-advantages";
const reactRootWebApps = "react-root-webapps";


initialize();

initialize3();


function initialize() 
{
     initializeHeader();
     initializePreview();
     initializeAdvantages();
     initializeWebApps();
}

function initializeWebApps()
{
    let root = document.getElementById(reactRootWebApps);
    let reactDom = ReactDOM.createRoot(root)
    reactDom.render(
        <BlockWebApps/>
    )
}

function initialize3() 
{
     initializefeedBackForm();
}


function initializeFooter()
{
    let root = document.getElementById(reactRootFooter);
    let reactDom = ReactDOM.createRoot(root)
    reactDom.render(
        <Footer/>
    )
}

function initializefeedBackForm()
{
    let root = document.getElementById(reactRootForm);
    let reactDom = ReactDOM.createRoot(root)
    reactDom.render(
        <Form/>
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

function initializeAdvantages()
{
    let root = document.getElementById(reactRootAdvantages);
    let reactDom = ReactDOM.createRoot(root);
    reactDom.render(
        <BlockAdvantages/>
    )
}
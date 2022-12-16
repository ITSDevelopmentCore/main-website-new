import React from "react"
import * as ReactDOM from 'react-dom/client';
import style from '../css/index.scss'

import Footer from "../../common/components/Footer";
import Header from "../../common/components/Header";
import Preview from "../components/blocks/BlockPreview";
import BlockAdvantages from "../components/blocks/BlockAdvantages";
import BlockWebApps from "../components/blocks/BlockWebApps";
import BlockStages from "../components/blocks/BlockStages";
import BlockPortfolio from "../components/blocks/BlockPortfolio";
import Form from "../../common/components/feedBackForm";



const reactRootHeader = "react-root-header";
const reactRootFooter = "react-root-footer";
const reactRootPreview = "react-root-preview";
const reactRootAdvantages = "react-root-advantages";
const reactRootWebApps = "react-root-webapps";
const reactRootStages = "react-root-stages";
const reactRootPortfolio = "react-root-portfolio";
const reactRootForm = "react-root-form";



initialize();

initialize3();


function initialize() 
{
     initializeHeader();
     initializePreview();
     initializeAdvantages();
     initializeWebApps();
     initializeStages();
     initializePortfolio();
     initializefeedBackForm();
     
}

function initializeWebApps()
{
    let root = document.getElementById(reactRootWebApps);
    let reactDom = ReactDOM.createRoot(root)
    reactDom.render(
        <BlockWebApps/>
    )
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

function initializefeedBackForm()
{
    let root = document.getElementById(reactRootForm);
    let reactDom = ReactDOM.createRoot(root)
    reactDom.render(
        <Form/>
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

function initializeStages()
{
    let root = document.getElementById(reactRootStages);
    let reactDom = ReactDOM.createRoot(root);
    reactDom.render(
        <BlockStages/>
    )
}

function initializePortfolio()
{
    let root = document.getElementById(reactRootPortfolio);
    let reactDom = ReactDOM.createRoot(root);
    reactDom.render(
        <BlockPortfolio/>
    )
}



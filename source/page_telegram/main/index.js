import React from "react"
import * as ReactDOM from 'react-dom/client';
import style from '../css/index.scss'

import Footer from "../../common/components/Footer";
import Header from "../../common/components/Header";
import Form from "../../common/components/feedBackForm";


const reactRootHeader = "react-root-header";
const reactRootFooter = "react-root-footer";
const reactRootForm = "react-root-form";


initialize();

initialize3();


function initialize() 
{
     initializeHeader();
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

function initializeHeader()
{
    let root = document.getElementById(reactRootHeader);
    let reactDom = ReactDOM.createRoot(root)
    reactDom.render(
        <Header/>
    )
}
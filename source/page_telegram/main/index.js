import React from "react"
import * as ReactDOM from 'react-dom/client';
import style from '../css/index.scss'
import Footer from "../../common/components/Footer";

const reactRootFooter = "react-root-footer";

// const reactRootHeader = "react-root-header";
// initialize();
initialize2();

// function initialize() 
// {
//     initializeHeader();
// }

// function initializeHeader()
// {
//     let root = document.getElementById(reactRootHeader);
//     let reactDom = ReactDOM.createRoot(root)
//     reactDom.render(
//         <Header/>
//     )
// }


function initialize2() 
{
    initializeFooter();
}

function initializeFooter()
{
    let root = document.getElementById(reactRootFooter);
    let reactDom = ReactDOM.createRoot(root)
    reactDom.render(
        <Footer/>
    )
}
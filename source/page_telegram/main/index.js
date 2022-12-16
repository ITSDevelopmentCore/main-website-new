import React from "react"
import * as ReactDOM from 'react-dom/client';

/**
 * Imports : Style
 */
import '../css/index.scss'

/**
 * Imports: Blocks
 */
import Footer from "../../common/components/Footer";
import Header from "../../common/components/Header";
import Feedback from "../../common/components/Feedback";
import Preview from "../components/blocks/BlockPreview";
import BlockAdvantages from "../components/blocks/BlockAdvantages";
import BlockWebApps from "../components/blocks/BlockWebApps";
import BlockStages from "../components/blocks/BlockStages";
import BlockPortfolio from "../components/blocks/BlockPortfolio";

class App extends React.Component {
    
    state = {
        theme : 'light',
    }

    darkThemeHandler(darkModeSwitch){
        if (darkModeSwitch.target.checked) {
            document.documentElement.classList.add('dark')
            this.setState({theme : 'dark'});
        }
        else {
            document.documentElement.classList.remove('dark')
            this.setState({theme : 'light'});
        }
    }

    constructor(props) {
        super(props)
    }

    render() {
        return(
        <main>
            <Header theme={this.state.theme} changeThemeHandler={this.darkThemeHandler.bind(this)}/>
            <Preview />
            <BlockAdvantages />
            <BlockWebApps />
            <BlockStages />
            <BlockPortfolio />
            <Feedback />
            <Footer />
        </main>)
    }
}

initialize();

function initialize() {
    let root = document.getElementById("root");
    let reactDom = ReactDOM.createRoot(root)
    reactDom.render(
        <App />
    )
}

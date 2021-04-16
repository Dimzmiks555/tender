import React from 'react';
import Header from './header/header.js';
import Page from "./page/page.js";
import Sidebar from './sidebar/sidebar.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <div className="wrapper">
            <Router>
                <Header/>
                <Page />
                <Sidebar />
            </Router>
        </div>
    )
}

export default App;
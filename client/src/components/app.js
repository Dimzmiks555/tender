import React from 'react';
import Header from './header/header.js';
import Page from "./page/page.js";
import Sidebar from './sidebar/sidebar.js'


export default class App extends React.Component {
    render(){
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
}
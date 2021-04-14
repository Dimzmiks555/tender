import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Header from './components/header/header.js';
import Page from "./components/page/page.js";
import Sidebar from "./components/sidebar/sidebar.js"

// CSS
import './index.css';



ReactDOM.render(
    <div className="wrapper">
        <Router>
            <Header/>
            <Page />
            <Sidebar />
        </Router>
    </div>
    ,
    document.getElementById('root')
  );
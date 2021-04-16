import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Header from './components/header/header.js';
import Page from "./components/page/page.js";
import Sidebar from './components/sidebar/sidebar.js'
// CSS
import './index.css';

const stores = {
    mainStore,
    optionsStore,
    ButtonStore : mainStore.ButtonStore,    
    FioStore : mainStore.FioStore,
    EmailStore : mainStore.EmailStore
};

ReactDOM.render(
    <Provider {...stores}>
        <App />
    </Provider>
    ,
    document.getElementById('root')
  );
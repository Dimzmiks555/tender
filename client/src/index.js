import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header/header.js';
import Tenders from './components/tenders/tenders.js';



ReactDOM.render(
    <Router>
        <Header />
        <Switch>
            <Route exact path="/" component={Header} />
            <Route path="/tenders" component={Tenders} />
        </Switch>
    </Router>,
    document.getElementById('root')
  );
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from '../main/main.js';
import TenderSearch from '../tenders/tendersearch.js';
import "./page.css";
 
export default class Page extends React.Component{
    render(){
        return (<div className="page">
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/tendersearch" component={TenderSearch} />
            </Switch>
        </div>)
            
        
    }
}


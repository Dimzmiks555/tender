import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from '../main/main.js';
import TenderSearch from '../tenders/tendersearch.js';
import TenderOverview from '../tenders/tenderoverview.js';
import MyTenders from '../mytenders/mytenders.js'
import "./page.css";
 
export default class Page extends React.Component{
    render(){
        return (<div className="page">
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/tendersearch" component={TenderSearch} />
                <Route path="/tenderoverview/:company_id/:id" component={TenderOverview} />
                <Route path="/mytenders" component={MyTenders} />
            </Switch>
        </div>)
            
        
    }
}


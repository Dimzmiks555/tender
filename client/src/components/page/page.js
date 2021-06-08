import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Main from './main/main.js';
import TenderSearch from '../tenders/tendersearch.js';
import TenderOverview from '../tenders/tenderoverview.js';
import MyTenders from './mytenders/mytenders.js'
import "./page.css";
import TenderOverviewPositions from '../tenders/tenderoverviewpositions.js';
import TenderOverviewDocs from '../tenders/tenderoverviewdocs.js'
import MyTenders_Overview from './mytenders/mytenders_overview.js'
import Contragents from './contragents/contragents.js';
 
export default class Page extends React.Component{
    render(){
        return (<div className="page">
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/tendersearch" component={TenderSearch} />
                <Route path="/tenderoverview/:company_id/:id" component={TenderOverview} />
                <Route path="/mytenders" component={MyTenders} />
                <Route path="/positions/:company_id/:id" component={TenderOverviewPositions} />
                <Route path="/docs/:company_id/:id" component={TenderOverviewDocs} />
                <Route path="/mytenders_overview/:id" component={MyTenders_Overview} />
                <Route path="/contragents" component={Contragents} />
            </Switch>
        </div>)
            
        
    }
}


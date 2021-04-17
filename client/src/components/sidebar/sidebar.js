import React from 'react';
import {NavLink, BrowserRouter}  from 'react-router-dom';
import TenderOverviewStore from '../../stores/tenderoverviewStore.js'
import SidebarStore from '../../stores/sidebarStore.js'
import { observer } from 'mobx-react-lite';
import './sidebar.css'



const Sidebar = observer( () => {
    return (
        <div className="sidebar" style={{display: SidebarStore.props.display}}>
            <h2></h2>
            <NavLink exact to={`/tenderoverview/${TenderOverviewStore.props.company_id}/${TenderOverviewStore.props.id}`} activeClassName="active">Информация</NavLink> 
            <NavLink to={`/positions/${TenderOverviewStore.props.company_id}/${TenderOverviewStore.props.id}`} activeClassName="active">Позиции</NavLink> 
            <NavLink to={`/docs/${TenderOverviewStore.props.company_id}/${TenderOverviewStore.props.id}`} activeClassName="active">Документы</NavLink> 
        </div>
    )
 } 
)
export default Sidebar;
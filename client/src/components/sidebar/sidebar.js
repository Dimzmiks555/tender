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
            <NavLink exact to="./" activeClassName="active">Информация</NavLink> 
            <NavLink to={`tenderoverview/files/${TenderOverviewStore.props.id}`} activeClassName="active">Файлы</NavLink> 
            <NavLink to="/" activeClassName="active">Информация</NavLink> 
            <NavLink to="/" activeClassName="active">Информация</NavLink> 
        </div>
    )
 } 
)
export default Sidebar;
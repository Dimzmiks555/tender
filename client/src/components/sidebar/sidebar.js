import React from 'react';
import {NavLink, BrowserRouter}  from 'react-router-dom';
import TenderOverview from '../tenders/tenderoverview.js'
import './sidebar.css'


export default class Sidebar extends React.Component {
    render(){
        return (
            <div className="sidebar">
                <NavLink exact to="./" activeClassName="active">Информация</NavLink> 
                <NavLink to="/files" activeClassName="active">Файлы</NavLink> 
                <NavLink to="/" activeClassName="active">Информация</NavLink> 
                <NavLink to="/" activeClassName="active">Информация</NavLink> 
            </div>
        )
    }
}
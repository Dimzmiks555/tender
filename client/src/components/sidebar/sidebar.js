import React from 'react';
import {NavLink, BrowserRouter}  from 'react-router-dom';
import TenderOverview from '../tenders/tenderoverview.js'
import './sidebar.css'


export default class Sidebar extends React.Component {
    render(){
        return (
            <div className="sidebar">
                <h2>Главная</h2>
                <p>Match: {console.log(TenderOverview)}</p>
                <p>Location {this.props.location}</p>
                <NavLink exact to="/:id" activeClassName="active">Информация</NavLink> 
                <NavLink to="/files" activeClassName="active">Файлы</NavLink> 
                <NavLink to="/" activeClassName="active">Информация</NavLink> 
                <NavLink to="/" activeClassName="active">Информация</NavLink> 
            </div>
        )
    }
}
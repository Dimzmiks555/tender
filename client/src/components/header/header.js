import React from 'react';
import {NavLink, BrowserRouter}  from 'react-router-dom';
import "./header.css";
 
export default class Header extends React.Component{

    

    render(){
        return (
                <div className="header">
                    <div className="logo">
                        <h1>СТРОИТЕЛЬ</h1>
                        <h3>Тендерная система</h3>
                    </div>
                    <div className="navbar">
                        <NavLink exact to="/" activeClassName="active">Сводка</NavLink> 
                        <NavLink to="/tendersearch" activeClassName="active">Поиск тендеров</NavLink>
                        <NavLink to="/mytenders" activeClassName="active">Мои тендеры</NavLink>
                        <NavLink to="/contragents" activeClassName="active">Поставщики</NavLink>
                    </div>
                </div>
              );
    }
}
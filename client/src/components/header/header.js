import React from 'react';
import {Link, BrowserRouter}  from 'react-router-dom';
import "./header.css";
 
export default class Header extends React.Component{

    

    render(){
        return <div className="header">
                <Link to="/">Главная</Link> 
                <Link to="/tendersearch">Поиск тендеров</Link>
                <Link to="/mytenders">Мои тендеры</Link>
              </div>;
    }
}
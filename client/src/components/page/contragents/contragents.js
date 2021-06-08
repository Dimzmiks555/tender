import React from 'react';
import './contragents.css'

export default class Contragents extends React.Component{
    render(){
        return (
            <div>
                <h1>Поставщики</h1>
                <div className="contr__type">
                    <a href="#">По компании</a>
                    <a href="#">По категориям</a>
                </div>
                <div>

                </div>
            </div>
        )
    }
}
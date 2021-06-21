import React from 'react';
import { Link } from 'react-router-dom';
import './MainDocs.css'
import documentInput from './documentInput.svg'
import documentOutput from './documentOutput.svg'
import dashboard from './dashboard.svg'
export default class MainDocs extends React.Component{

    constructor(props){
        super(props);
        
      }



    render(){

        return (
            <div>
            <h1>Документы</h1>
            <div className="mainDocs">
                <Link to="/" className="mainDocs__item">
                    <a >   
                        <img src={documentOutput}></img>
                        <p>Входящие документы</p>
                    </a>
                </Link>
                <Link to='/output_docs/' className="mainDocs__item">
                    <a >
                        <img src={documentInput}></img>
                        <p>Исходящие документы</p>
                    </a>
                </Link>
                <Link to="/" className="mainDocs__item">
                    <a>
                        <img src={dashboard}></img>
                        <p>Сводки</p>
                    </a>
                </Link>
            </div>
            </div>

        )
    }
}
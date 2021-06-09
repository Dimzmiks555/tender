import React from 'react';
import crypt from './crypt.png'
import stamp from './stamp.jpg'
import logo from './LOGO.jpg'
import './DocKP.css'

export default class DocKP extends React.Component{
    render(){

        let date = new Date().toLocaleDateString();

        return (
            <div className="document">
                <div className="pagea4">
                    <div className="pagea4__header">
                        <img src={logo}></img>
                        <div className="pagea4__req">
                            <p>Российская Федерация Воронежской область, Лискинский район, город Лиски</p>
                            <p> ИП Аветикян Липарит Ашотович </p>
                            <p>ИНН 365233175954 , ОГРН 309365205600058</p>
                            <p>Юридический адрес: 397909, Воронежская область,</p>
                            <p>Российская Федерация Воронежской область, Лискинский район, город Лиски</p>
                            <p>Лискинский район, г. Лиски, ул. Горная, д.59</p>		
                            <p>БИК 04200768, р/сч 40802810113000022883</p>	
                            <p>в Центрально-Черноземном банке ПАО Сбербанк г. Воронеж</p>	
                            <p> e-mail :masnagetto@gmail.com,stroitel.office@gmail.com</p>	
                            <p>т. +7(908)1450292</p>		
                        </div>
                    </div>
                    <div className="pagea4__title">
                        <p>Исх. №34 от {date}</p>
                        <div className="pagea4__gifter">
                            <p>Открытому акционерному обществу</p>
                            <p>"Группа Черкизово"</p>
                        </div>
                    </div>
                    <div className="pagea4__maintitle">
                        <h2>КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ</h2>
                    </div>
                    <table border="1" cellpadding="5px">
                        <tr>
                            <td>№</td> 
                            <td>Наименование </td> 
                            <td>Ед. изм</td>
                            <td>Кол-во</td>
                            <td>Стоимость единицы, руб. без НДС</td>
                            <td>Сроки поставки (к.д.)</td>
                            <td>Комментарий к позиции</td>
                            <td>Общая стоимость, руб. без НДС</td>
                        </tr>
                        <tr>
                            <td>1</td> 
                            <td>Насос типа АНС-130 с электрическим приводом АНС-130 </td> 
                            <td>шт</td>
                            <td>1</td>
                            <td>224.76</td>
                            <td>30</td>
                            <td>Комментарий к позиции</td>
                            <td>15058.92</td>
                        </tr>
                    </table>
                    <div className="pagea4__footer">
                        <div className="pagea4__info">
                            <p>Срок поставки 30 дней.</p>
                            <p>Отсрочка платежа 30 дней.</p>
                        </div>
                        <div className="pagea4__crypt">
                            Подпись <img src={crypt}></img>
                        </div>
                        <div className="pagea4__stamp">
                            М.П <img src={stamp}></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
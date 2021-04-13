import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from '../main/main.js';
import TenderSearch from '../tenders/tendersearch.js';
import "./tenders.css";
 
export default class TenderOverview extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          data: []
        };
      }
    componentDidMount() {
        Promise.all([
            fetch(`http://www.tender.pro/api/_tender.info.json?_key=1732ede4de680a0c93d81f01d7bac7d1&company_id=${this.props.match.params.company_id}&id=${this.props.match.params.id}`).then(r => r.json()),
            fetch(`http://www.tender.pro/api/_tender.item.json?_key=1732ede4de680a0c93d81f01d7bac7d1&company_id=${this.props.match.params.company_id}&id=${this.props.match.params.id}`).then(r => r.json()),
        ])
        .then(
        (result) => {
            this.setState({
            isLoaded: true,
            dataInfo: result[0].result.data,
            dataItem: result[1].result.data
            });
        },
        (error) => {
            this.setState({
            isLoaded: true,
            error
            });
        }
        )
    
    
        
    }
    getData() {
        const {error, isLoaded, dataInfo } = this.state;
        if (error) {
          return <div>Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Загрузка...</div>;
        } else {
          return (
            <div className="tenderoverview">
                <div>
                </div>
                <div className="info">
                    <div>
                        <h1>Тендер  {this.props.match.params.id}</h1>
                    </div>
                    <div className="close_date">
                        {dataInfo.close_date}
                    </div>
                </div>
                <div className="type_name">
                    {dataInfo.type_name}
                </div>
                <div className="title">
                    {dataInfo.title}
                </div>
                
                
                <div className="winners_list">
                    {dataInfo.winners_list}
                </div>
                <div className="face_name">
                    {dataInfo.face_name}
                </div>
                <div className="face_phone">
                    {dataInfo.face_phone}
                </div>
                <div className="anno" dangerouslySetInnerHTML={{ __html: dataInfo.anno }}>
                </div>
            </div>
          );
        }
      }
    render(){
        return (<div className="tender_overview">
                {this.getData()}
      </div>)
            
        
    }
}

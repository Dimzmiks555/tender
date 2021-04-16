import React from 'react';
import {observer} from 'mobx-react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from '../page/main/main.js';
import TenderoverviewStore from '../../stores/tenderoverviewStore.js';
import SidebarStore from '../../stores/sidebarStore.js'
import "./tenders.css"; 

// const company_id = this.props.match.params.company_id;
// const tender_id = this.props.match.params.id
// TenderoverviewStore.PostID(tender_id,company_id);
// SidebarStore.showSideBar();

const TenderOverview = observer(
     class TenderOverview extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
                error: null,
                isLoaded: false,
                dataInfo: [],
                dataItem: []
            };
        }
        
        componentDidMount() {
            TenderoverviewStore.GetIds(this.props.match.params.company_id,this.props.match.params.id);
            SidebarStore.showSideBar();
            Promise.all([
                fetch(`http://www.tender.pro/api/_tender.info.json?_key=1732ede4de680a0c93d81f01d7bac7d1&company_id=${this.props.match.params.company_id}&id=${this.props.match.params.id}`).then(r => r.json()),
                fetch(`http://www.tender.pro/api/_tender.item.json?_key=1732ede4de680a0c93d81f01d7bac7d1&company_id=${this.props.match.params.company_id}&id=${this.props.match.params.id}`).then(r => r.json()),
            ])
            .then(
            (result) => {
                if (!result[0].result) {
                    this.setState({
                        isLoaded: true,
                        error: result[0].error.message
                    });
                } else {
                    this.setState({
                        isLoaded: true,
                        dataInfo: result[0].result.data,
                        dataItem: result[1].result.data
                    });
                }    
            },
            (error) => {
                this.setState({
                isLoaded: true,
                error
                });
            }
            )
        
        
            
        }
        componentWillUnmount() {
            SidebarStore.hideSideBar();
        }
        getData() {
            let tender_id = this.props.match.params.id;
            const {error, isLoaded, dataInfo, dataItem} = this.state;
            if (error) {
            return <h2>Ошибка: {error}</h2>;
            } else if (!isLoaded) {
            return <h2>Загрузка...</h2>;
            } else {
            return (
                <div className="tenderoverview">
                    <div className="info">
                        <div>
                            <h1>Тендер  {tender_id}</h1>
                        </div>
                        <div className="close_date">
                            {dataInfo.close_date}
                        </div>
                    </div>
                    <div className="type_name">
                        {dataInfo.type_name}
                    </div>
                    {/* <div>
                        {dataItem.map(item => (
                            <div>{item.name}</div>
                            )
                        )}
                    </div> */}
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
                    <div>
                    </div>
                    <div className="anno" dangerouslySetInnerHTML={{ __html: dataInfo.anno }}>
                    </div>
                </div>
            );
            }
        }
        render(){
            return (
                <div className="tender_overview">
                    <div>
                        {this.getData()}
                    </div>
                </div>
            )
        }
})
export default TenderOverview;
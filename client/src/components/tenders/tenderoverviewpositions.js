import React from 'react'
import SidebarStore from '../../stores/sidebarStore.js'

export default class TenderOverviewPositions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: []
        };
    }
    componentDidMount() {
        SidebarStore.showSideBar();
        fetch(`http://www.tender.pro/api/_tender.item.json?_key=1732ede4de680a0c93d81f01d7bac7d1&company_id=${this.props.match.params.company_id}&id=${this.props.match.params.id}`).then(r => r.json())
        .then(
            (result) => {
                if (!result.result) {
                    this.setState({
                        isLoaded: true,
                        error: result?.error.message
                    });
                } else {
                    this.setState({
                        isLoaded: true,
                        data: result?.result.data
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
        
        console.log(this.state);
        const {error, isLoaded, data } = this.state;
        if (error) {
          return <div>Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
          return <h2>Загрузка...</h2>;
        } else if (Array.isArray(data)){
        
          return (
            <div className="tenderpositions">
              { 
                data.map(item => (
                <div className="tenderpositions_item" key={item.id}>
                    <div className="tenderpositions_number">{item.number}</div>
                    <div className="tenderpositions_info">
                        <div className="tenderpositions_header">
                            <div className="tenderpositions_name">{item.name}</div>
                            <div className="tenderpositions_amount">{item.amount}</div>
                            <div className="tenderpositions_unit_name">{item.unit_name}</div>
                        </div>
                        <div className="tenderpositions_description">{item.description}</div>
                    </div>
                </div>
              ))
              }
            </div>
          );
        } else {
          return (
              <h2>Нет доступа к API.....</h2>
            )
        }
    }
    render() {
        return(
            <div>
                <h1>Позиции</h1>
                {this.getData()}
            </div>
            
        )
    }
}
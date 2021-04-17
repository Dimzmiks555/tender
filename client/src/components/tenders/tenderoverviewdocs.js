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
        const URL = `http://www.tender.pro/api/_tender.file_info.json?_key=1732ede4de680a0c93d81f01d7bac7d1&company_id=${this.props.match.params.company_id}&id=${this.props.match.params.id}`
        console.log(URL);
        fetch(URL).then(r => r.json())
        .then(
            (result) => {
                
                console.log(result);
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
          return <div>Ошибка: {error}</div>;
        } else if (!isLoaded) {
          return <h2>Загрузка...</h2>;
        } else if (Array.isArray(data)){
        
          return (
            <div>
                <a href={`www.tender.pro/cgi-bin/file.pl`}>{data.name}</a>
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
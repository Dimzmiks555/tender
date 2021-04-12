import React from 'react';
import './tendersearch.css'
 
export default class TenderSearch extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        data: []
      };
    }
  
    componentDidMount() {
      fetch("http://www.tender.pro/api/_info.tenderlist_by_set.json?_key=1732ede4de680a0c93d81f01d7bac7d1&set_type_id=2&set_id=7964&max_rows=100&open_only=t")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              data: result.result.data
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
      const {error, isLoaded, data } = this.state;
      if (error) {
        return <div>Ошибка: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Загрузка...</div>;
      } else {
        return (
          <div className="tendersearch">
            {data.map(tender => (
              <div className="tenderlist_item" key={tender.id}>
                <div className="title">
                  {tender.title}
                </div>
                <div className="close_date">
                  {tender.close_date}
                </div>
                <div className="company_name">
                  {tender.company_name}
                </div>
              </div>
            ))}
          </div>
        );
      }
    }
    render() {
      return (
        <div>
          <h1>Поиск тендеров</h1>
          {this.getData()}
        </div>
      )
      
    }
  }
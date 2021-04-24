import React from 'react';
import './tenders.css';
import {Link, BrowserRouter}  from 'react-router-dom';
import Filter from './filter/filter.js'
import Loading from '../loading/loading';

    


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
            try {
              this.setState({
                isLoaded: true,
                data: result.result.data
              });
            } catch (error) {
              <h2>Нет доступа к API</h2>
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
    
    getData() {
      const {error, isLoaded, data } = this.state;

      function calcStage (title) {
        if (title.includes('2-й этап')) {
          return <h2>2</h2>
        } 
        else if (title.includes('3-й этап')) {
          return <h2>3</h2>
        }
        else if (title.includes('4-й этап')) {
          return <h2>4</h2>
        }
        else if (title.includes('5-й этап')) {
          return <h2>5</h2>
        }
        else if (title.includes('6-й этап')) {
          return <h2>6</h2>
        }
        else {
          return <h2>1</h2>
        }
      }
      
      function calcTypeString(type) {
        if (type == 1) {
          return {
            color: '#c33'
          }
        }
        else if (type == 2) {
          return {
            color: '#55d'
          }
        }
        else if (type == 3) {
          return {
            color: '#ffdb58'
          }
        }
        else if (type == 4) {
          return {
            color: 'gray'
          }
        }
        else {
          return {
            color: 'black'
          }
        }
      } 

      function calcType(type) {
        if (type == 1) {
          return {
            background: '#c33',
            boxShadow: '#c33 0 0 7px'
          }
        }
        else if (type == 2) {
          return {
            background: '#55d',
            boxShadow: '#55d 0 0 7px'
          }
        }
        else if (type == 3) {
          return {
            background: '#ffdb58',
            boxShadow: '#ffdb58 0 0 7px'
          }
        }
        else if (type == 4) {
          return {
            background: 'gray',
            boxShadow: 'gray 0 0 7px'
          }
        }
        else {
          return {
            background: 'black',
            boxShadow: 'black 0 0 7px'
          }
        }
      }

      if (error) {
        return <div>Ошибка: {error.message}</div>;
      } else if (!isLoaded) {
        return <Loading />
      } else if (Array.isArray(data)){
                
        return (
          <div className="tendersearch">
            <Filter />
            <h1>Результат</h1>
            { 
              data.map(tender => (
              <div className="tenderlist_item" key={tender.id}>
                <div>
                  <div className="title">
                    <Link to={`/tenderoverview/${tender.company_id}/${tender.id}/#info`}>{tender.title}</Link>
                  </div>
                  <div className="info">
                    <div className="id">
                      ID {tender.id}
                    </div>
                    <div className="close_date">
                      {tender.close_date}
                    </div>
                    <div className="type_name" style={calcTypeString(tender.type_id)}>
                      {tender.type_name}
                    </div>
                    <div className="company_name">
                      {tender.company_name}
                    </div>
                  </div>
                </div>
                <div className="stage" style={calcType(tender.type_id)}>
                    {
                      calcStage(tender.title)
                    }
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
      return (
        <div>
          <h1>Поиск тендеров</h1>
          {this.getData()}
        </div>
      )
      
    }
  }
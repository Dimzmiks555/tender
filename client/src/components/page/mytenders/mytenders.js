import React from 'react';
export default class MyTenders extends React.Component {

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
    
    getData(){
        return <h1>hh</h1>
    }

    render(){
        return(
            <div>
                <h1>Мои тендеры</h1>
                {this.getData()}
            </div>
        )
    }
}
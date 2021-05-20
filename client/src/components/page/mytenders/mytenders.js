import React from 'react';
import {Link} from 'react-router-dom';
import Loading from '../../loading/loading';
import './mytenders.css';

export default class MyTenders extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        data: []
      }
    }

    componentDidMount() {
        fetch("http://127.0.0.1:5000/api/tenders")
          .then(res => res.json())
          .then(
            (result) => {
              try {
                this.setState({
                  isLoaded: true,
                  data: result
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

        function calcStage (title) {
          if (title?.includes('2-й этап')) {
            return <h2>2</h2>
          } 
          else if (title?.includes('3-й этап')) {
            return <h2>3</h2>
          }
          else if (title?.includes('4-й этап')) {
            return <h2>4</h2>
          }
          else if (title?.includes('5-й этап')) {
            return <h2>5</h2>
          }
          else if (title?.includes('6-й этап')) {
            return <h2>6</h2>
          }
          else {
            return <h2>1</h2>
          }
        }


        const {isLoaded, data} = this.state;
        console.log(data);
        if (!isLoaded) {
          return <Loading />
        } else {
            data.reverse();
            return (
              <div>
                {
                  data.map(item => (
                    <div className="tenderlist_item" key={item.id}>
                      <div>
                        <div className="title">
                          {item.data?.title ? <Link to={`/mytenders_overview/${item.id}/`}>{item.data?.title}</Link> : <Link to={`/mytenders_overview/${item.id}/`}>Закрытый тендер</Link>}
                        </div>
                        <div className="info">
                          <div className="id">
                            ID {item.id}
                          </div>
                          <div className="close_date">
                            {item.data?.close_date}
                          </div>
                          <div className="type_name">
                            {item.data?.type_name}
                          </div>
                          <div className="company_name">
                            {item.data?.company_name}
                          </div>
                        </div>
                      </div>
                      <div className="stage">
                          {
                            calcStage(item.data?.title)
                          }
                      </div>
                    </div>
                  ))
                }
              </div>
            )
          }
        }
    async _handleSubmit(e) {
      e.preventDefault();
      const data = new FormData();
      const id = this.companyInput;
      data.append('file', this.uploadInput.files[0]);
      data.append('filename', 'this.fileName.value');
      console.log(data.entries());
      await fetch('http://127.0.0.1:5000/api/upload', {
        method: 'POST',
        body: data
      }).then()
      .catch(error => {
        console.log(error);
      })

    }
    

    render(){
        return(
            <div className="mytenders">
                <h1>Мои тендеры</h1>
                <form onSubmit={(e)=>this._handleSubmit(e)}>
                  <input id="input__file" name="file" type="file" ref={(ref) => { this.uploadInput = ref; }}></input>
                  <label for="input__file" id="upload_button">Выберите файл</label>
                  <button type="submit" id="input_submit" onClick={(e)=>this._handleSubmit(e)}>Отправить</button>
                </form>
                {this.getData()}
            </div>
        )
    }
}
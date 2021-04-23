import React from 'react';
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
        const {isLoaded, data} = this.state;
        console.log(data);
        if (!isLoaded) {
          return <h2>Загрузка...</h2>
        } else {
            return (
              <div>
                {
                  data.map(item => (
                    <div>
                      {item.id}
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
            <div>
                <h1>Мои тендеры</h1>
                <form onSubmit={(e)=>this._handleSubmit(e)}>
                  <input name="company_id" ref={(ref) => { this.companyInput = ref; }}></input>
                  <input name="file" type="file" ref={(ref) => { this.uploadInput = ref; }}></input>
                  <button type="submit" onClick={(e)=>this._handleSubmit(e)}>Отправить</button>
                </form>
                {this.getData()}
            </div>
        )
    }
}
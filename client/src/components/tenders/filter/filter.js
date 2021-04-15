import React from 'react';


import './filter.css'
export default class Filter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'coconut'};
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    render() {
      return (
        <div className="tendersearch_filter">
            <h2>Фильтр</h2>
            <form onSubmit={this.handleSubmit} >
            <label>
                <select value={this.state.value} onChange={this.handleChange}>
                <option value="210033">ПАО Группа Черкизово</option>
                <option value="lime">РУСАЛ</option>
                <option value="coconut">ГК ЛокоТех</option>
                <option value="mango">Русская медная компания</option>
                </select>
            </label>
            </form>
        </div>
        
      );
    }
  }
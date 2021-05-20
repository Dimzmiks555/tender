import React from 'react';
import './mytenders.css';
import Position from './position/mytenders_position';


export default class MyTenders_overview extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          data: {},
          rating: {},
          buy_price: '0',
          percent: null,
          analog_name: ''
        }
        this.handleChangeP = this.handleChangeP.bind(this);
      }


    componentDidMount() {
        fetch(`http://127.0.0.1:5000/api/tenders/${this.props.match.params.id}`)
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
    handleChangeP(e){
        this.setState({percent: e.target.value})
    }
    _HandlerSubmit(e) {
        e.preventDefault();
        // let data = {
        // };
        // await fetch('http://127.0.0.1:5000/api/tenderedit', {
        //     method: 'POST',
        //     body: data
        // }).then()
        // .catch(error => {
        //     console.log(error);
        // })
    }
    getData(){
        const {error, isLoaded, data} = this.state;
        if (error) {
        return <h2>Ошибка: {error}</h2>;
        } else if (!isLoaded) {
        return <h2>Загрузка...</h2>;
        } else {
            return (
                <div className="tenderoverview">
                <div className="info" id="info">
                    <h1>Тендер № {this.state.data.id}</h1>
                    <div className="close_date">
                        {this.state.data.data?.close_date}
                    </div>
                </div>
                <div className="type_name">
                    {data.data?.type_name}
                </div>
                {/* <div>
                    {dataItem.map(item => (
                        <div>{item.name}</div>
                        )
                    )}
                </div> */}
                <div className="title">
                    {this.state.data?.data?.title}
                </div>
                <div className="winners_list">
                    {this.state.data.data?.winners_list}
                </div>
                <div className="face_name">
                    {this.state.data.data?.face_name}
                </div>
                <div className="face_phone">
                    {this.state.data.data?.face_phone}
                </div>
                <div>
                </div>
                <form onSubmit={(e)=>this._HandlerSubmit(e)}> 
                    
                    <button type="submit" className="mytenders_button" onSubmit={(e)=>this._HandlerSubmit(e)}>Сохранить</button>
                    <div className="tenderlist">
                        <div className="tenderpositions_item" >
                            <div className="tenderpositions_number">№</div>
                            <div className="tenderpositions_info">
                                <div className="tenderpositions_header head">
                                    <div className="tenderpositions_name">Наименование</div>
                                    <div className="tenderpositions_amount">Кол-во</div>
                                    <div className="tenderpositions_unit_name">Ед. изм</div>
                                    <div className="tenderpositions_buy-summ">Цена</div>
                                    <div className="tenderpositions_buy-summ">Сумма</div>
                                    <input className="tenderpositions_buy-percent" placeholder="0" type="number" value={this.state.percent} onChange={this.handleChangeP}></input><span>%</span>
                                </div>
                            </div>
                        </div>
                        {console.log(data)}
                        {data.pos.map((item, index) => (
                            <Position item={item} index={index} rating={this.state.rating} percent={this.state.percent} tender_id={this.state.data.id}></Position>
                        ))}
                    </div>
                </form>
                </div>
                
            )
        }
        
    }


    render() {
        return (
            <div className="mytenders">
                {this.getData()}
            </div>
        )
    }
}
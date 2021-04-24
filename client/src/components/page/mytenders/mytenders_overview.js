import React from 'react';
import './mytenders.css';


export default class MyTenders_overview extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          data: {},
          buy_price: '0',
          percent: null,
          analog_name: ''
        }

        this.handleChangeBP = this.handleChangeBP.bind(this);
        this.handleChangeP = this.handleChangeP.bind(this);
        this.handleChangeAN = this.handleChangeAN.bind(this);
      }

    async handleChangeBP(event) {
        this.setState({buy_price: event.target.buy_price});
        let data = this.buy_price;
        console.log(data);
        await fetch('http://127.0.0.1:5000/api/tenderedit', {
            method: 'POST',
            body: data
        }).then()
        .catch(error => {
            console.log(error);
        })
    }
    async handleChangeP(event) {
        this.setState({percent: event.target.percent});
        let data = this.buy_price;
        await fetch('http://127.0.0.1:5000/api/tenderedit', {
            method: 'POST',
            body: data
        }).then()
        .catch(error => {
            console.log(error);
        })
    }
    async handleChangeAN(event) {
        this.setState({analog_name: event.target.analog_name});
        let data = this.buy_price;
        await fetch('http://127.0.0.1:5000/api/tenderedit', {
            method: 'POST',
            body: data
        }).then()
        .catch(error => {
            console.log(error);
        })
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
                        {this.state.data.data.close_date}
                    </div>
                </div>
                <div className="type_name">
                    {data.data.type_name}
                </div>
                {/* <div>
                    {dataItem.map(item => (
                        <div>{item.name}</div>
                        )
                    )}
                </div> */}
                <div className="title">
                    {this.state.data.data.title}
                </div>
                <div className="winners_list">
                    {this.state.data.data.winners_list}
                </div>
                <div className="face_name">
                    {this.state.data.data.face_name}
                </div>
                <div className="face_phone">
                    {this.state.data.data.face_phone}
                </div>
                <div>
                </div>
                <div className="tenderlist">
                    <div className="tenderpositions_item" >
                        <div className="tenderpositions_number">№</div>
                        <div className="tenderpositions_info">
                            <div className="tenderpositions_header">
                                <div className="tenderpositions_name">Наименование</div>
                                <div className="tenderpositions_amount">Кол-во</div>
                                <div className="tenderpositions_unit_name">Ед. изм</div>
                                <div className="tenderpositions_buy-summ">Цена</div>
                                <div className="tenderpositions_buy-summ">Сумма</div>
                                <input className="tenderpositions_buy-percent" placeholder="0" type="number" value={this.state.percent} onChange={this.handleChangeP}></input><span>%</span>
                            </div>
                        </div>
                    </div>
                    {data.pos.map((item, index) => (
                        <div className="tenderpositions_item" key={item.id}>
                            <div className="tenderpositions_number">{item.number}</div>
                            <div className="tenderpositions_info">
                                <div className="tenderpositions_header">
                                    <div className="tenderpositions_name">{item.title}</div>
                                    <div className="tenderpositions_amount">{item.amount}</div>
                                    <div className="tenderpositions_unit_name">{item.edism}</div>
                                    <input className="tenderpositions_buy-price" placeholder="Цена..." onChange={data.pos[index].buy_price = this.value}></input>
                                    <div className="tenderpositions_buy-summ">0</div>
                                </div>
                                <div className="tenderpositions_footer">
                                    <input className="tenderpositions_name-end" placeholder="Введите наименование предложения..."></input>
                                    <div className="tenderpositions_amount"></div>
                                    <div className="tenderpositions_unit_name"></div>
                                    <div className="tenderpositions_sell-price">0</div>
                                    <div className="tenderpositions_buy-summ">0</div>
                                </div>
                                <div className="tenderpositions_description">{item.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
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
import React from 'react'
import { observer } from 'mobx-react';
import PositionStore from './PositionStore.js';


const Position = observer( 
    class Position extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                rating: this.props.rating,
                err: null,
                params: [],
                amount: this.props.item.amount,
                total: []
            }
        }
        componentDidMount() {
            const item = this.props.item;
            const index = this.props.index; 
            PositionStore.setInitialProps(item.buy_price,item.analog_name, index)
            let t = new Date();
            let myT =
            t.getFullYear() + '-' +
            ('0' + (t.getMonth() + 1)).slice(-2) + '-' +
            ('0' + t.getDate()).slice(-2)+ " " +
            ('0' + t.getHours()).slice(-2) + ":" +
            ('0' + t.getMinutes()).slice(-2) + ":" +
            ('0' + t.getSeconds()).slice(-2);
            const params = {
                method: 'POST',
                body: `{"id":77,"jsonrpc":"2.0","method":"tender.offer.rating","sid":4844352,"lang":"ru","params":{"id": ${this.props.tender_id},"companyid":343375,"ti": "${myT}"},"debug":{}}`,
                headers: {
                    'Accept': 'application/json, text/javascript, */*; q=0.01',
                    'Content-Type': 'application/json'
                }
            }
            fetch(`https://www2.tender.pro/api/`, params)
            .then(res => res.json())
            .then(
                (result) => {
                    try {
                        let rate = result.result.data[0].offer_rating.split(';');
                        
                        this.setState({
                            rating: rate
                        });
                    } catch (error) {
                        <h2>Нет доступа к API</h2>
                    }
                    },
                    (error) => {
                    this.setState({
                        error
                    });
                    }
                )
        }
        render() {
            const item = this.props.item;
            const index = this.props.index; 
            let rating = this.state.rating[index];
            let func = (rating, i) => {
                if (rating != undefined) {
                    let tt = rating.slice(0, rating.length - 3).slice(3);
                    tt = tt.split(',');
                    return tt[i].toString()
                }
            }

            let numb = func(rating, 1);
            let bg = func(rating, 5);

            PositionStore.getBS((Number(this.state.amount) * PositionStore.props.tenderPos[index]?.start_price).toFixed(2), index)
            PositionStore.getSS((PositionStore.props.tenderPos[index]?.sell_price * Number(this.state.amount)).toFixed(2), index)

            return (
                <div className="tenderpositions_item" key={item.id} style={{filter: PositionStore.completed(index)}}>
                    <div className="tenderpositions_number">{item.number}</div>
                    <div className="tenderpositions_info">
                        <div className="tenderpositions_header">
                            <div className="tenderpositions_name">{item.title}</div>
                            <div className="tenderpositions_amount" >{Number(item.amount) }</div>
                            <div className="tenderpositions_unit_name">{item.edism}</div>
                            <input className="tenderpositions_buy-price" ref={(el) => this.buy_price = el} placeholder="Цена..." onChange={e => { PositionStore.handleBP(e, index, this.props.tender_id) }} value={PositionStore.props.tenderPos[index]?.start_price}></input>
                            <div className="tenderpositions_buy-summ" onChange={e => PositionStore.getBS(e.target.value, index)}>{!PositionStore.props.tenderPos[index]?.start_price ? '0' : (Number(this.state.amount) * PositionStore.props.tenderPos[index]?.start_price).toFixed(2)}</div>
                        </div>
                        <div className="tenderpositions_footer">
                            <input className="tenderpositions_name-end" placeholder="Введите комментарий к позиции..." value={PositionStore.props.tenderPos[index]?.analog_name} onChange={e => {PositionStore.handleComm(e, index, this.props.tender_id)}}></input>
                            <div className="tenderpositions_amount"></div>
                            <div className="tenderpositions_unit_name"></div>
                            {PositionStore.handleSP((this.props.percent / 100 + 1) * Number(this.buy_price?.value), index, this.props.tender_id)}
                            <div className="tenderpositions_sell-price" ref={el => this.sell_price = el}>{NaN ? '0' : ((this.props.percent / 100 + 1) * this.buy_price?.value).toFixed(2)}</div>
                            <div className="tenderpositions_buy-summ" onChange={e => PositionStore.getSS(e.target.value, index)}>{(PositionStore.props.tenderPos[index]?.sell_price * Number(this.state.amount)).toFixed(2)}</div>
                        </div>
                        <div className="tenderpositions_description">{item.description}</div>
                    </div>
                    
                    <div className="rating" style={{background: bg}} >{numb}</div>
                </div>
            )
        }
    }

)
export default Position;
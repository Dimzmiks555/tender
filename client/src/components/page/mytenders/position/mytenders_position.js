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
                params: []
            }
        }
        componentDidMount() {
            const params = {
                method: 'POST',
                body: '{"id":77,"jsonrpc":"2.0","method":"tender.offer.rating","sid":2349383,"lang":"ru","params":{"id":509868,"companyid":343375,"ti":"2021-04-30 15:00:00"},"debug":{}}',
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
                    console.log(tt);
                    return tt[i]
                }
            }
            let numb = func(rating, 1);
            let bg = func(rating, 5);
            // this.setState({params: func()});
            // 
            // console.log(this.state.params);
            

            // const tt = rating.substring(0, rating.length - 3).substring(3);
            return (
                <div className="tenderpositions_item" key={item.id}>
                    <div className="tenderpositions_number">{item.number}</div>
                    <div className="tenderpositions_info">
                        <div className="tenderpositions_header">
                            <div className="tenderpositions_name">{item.title}</div>
                            <div className="tenderpositions_amount">{item.amount}</div>
                            <div className="tenderpositions_unit_name">{item.edism}</div>
                            <input className="tenderpositions_buy-price" placeholder="Цена..." onChange={e => { PositionStore.handleBP(e, index) }} value={PositionStore.props.tenderPos[index]?.start_price}></input>
                            <div className="tenderpositions_buy-summ">0</div>
                        </div>
                        <div className="tenderpositions_footer">
                            <input className="tenderpositions_name-end" placeholder="Введите наименование предложения..."></input>
                            <div className="tenderpositions_amount"></div>
                            <div className="tenderpositions_unit_name"></div>
                            <div className="tenderpositions_sell-price">{PositionStore.props.tenderPos[index]?.start_price}</div>
                            <div className="tenderpositions_buy-summ">0</div>
                        </div>
                        <div className="tenderpositions_description">{item.description}</div>
                    </div>
                    
                    <div className="rating" style={`{background: "${bg}}"`} >{numb}</div>
                </div>
            )
        }
    }

)
export default Position;
import React from 'react'
import { observer } from 'mobx-react';
import PositionStore from './PositionStore.js';


const Position = observer( 
    class Position extends React.Component {

        render() {
            const item = this.props.item;
            const index = this.props.index;
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
                </div>
            )
        }
    }

)
export default Position;
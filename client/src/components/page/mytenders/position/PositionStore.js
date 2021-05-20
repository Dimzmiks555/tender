import {makeAutoObservable} from 'mobx';

class PositionStore {
    props = {
        tenderPos: {},
        total: []
    }
    constructor() {
        makeAutoObservable(this);
    }
    calcTotal(price) {
        this.props.total += price
    }
    handleSP(price,index){
        if (!this.props.tenderPos[index]) {
            this.props.tenderPos[index] = {};
        }
        this.props.tenderPos[index].sell_price = price;
    }
    handleBP(e, index) {
        if (!this.props.tenderPos[index]) {
            this.props.tenderPos[index] = {};
        }
        this.props.tenderPos[index].start_price = e.target.value;
    }

}

export default new PositionStore();
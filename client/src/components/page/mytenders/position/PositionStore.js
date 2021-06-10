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


    setInitialProps(price, analog_name, index) {
        if (!this.props.tenderPos[index]) {
            this.props.tenderPos[index] = {};
        }
        this.props.tenderPos[index].start_price = price;
        this.props.tenderPos[index].analog_name = analog_name;
    }

    getBuyTotal() {
        
        let buySumm = 0

        for (var key in this.props.tenderPos) {
                buySumm += Number(this.props.tenderPos[key].buy_summ)
            }
        return buySumm
    }
    getSellTotal() {
        
        let sell_summ = 0

        for (var key in this.props.tenderPos) {
                sell_summ += Number(this.props.tenderPos[key].sell_summ)
            }
        return sell_summ
    }
    getBS(e, index) {
        if (!this.props.tenderPos[index]) {
            this.props.tenderPos[index] = {};
        }
        this.props.tenderPos[index].buy_summ = e;
    }
    getSS(e, index) {
        if (!this.props.tenderPos[index]) {
            this.props.tenderPos[index] = {};
        }
        this.props.tenderPos[index].sell_summ = e;
    }
    handleSP(price, index, tender_id){
        fetch(`http://127.0.0.1:5000/api/tenders/${tender_id}`, {
            method: "PUT",
            headers: { "Accept": "application/json", "Content-Type": "application/json" },
            body: JSON.stringify({
                index: index,
                tender_id: tender_id,
                sell_price: price.toString()
            })
        });


        if (!this.props.tenderPos[index]) {
            this.props.tenderPos[index] = {};
        }
        this.props.tenderPos[index].sell_price = price;
    }
    handleComm(e, index, tender_id) {

        fetch(`http://127.0.0.1:5000/api/tenders/${tender_id}`, {
            method: "PUT",
            headers: { "Accept": "application/json", "Content-Type": "application/json" },
            body: JSON.stringify({
                index: index,
                tender_id: tender_id,
                analog_name: e.target.value
            })
        });

        this.props.tenderPos[index].analog_name = e.target.value;
    }
    handleBP(e, index, tender_id) {
        let price = e.target.value.replace(/,/g, '.').replace(/ /g, "");

        fetch(`http://127.0.0.1:5000/api/tenders/${tender_id}`, {
            method: "PUT",
            headers: { "Accept": "application/json", "Content-Type": "application/json" },
            body: JSON.stringify({
                index: index,
                tender_id: tender_id,
                buy_price: price
            })
        });

        if (!this.props.tenderPos[index]) {
            this.props.tenderPos[index] = {};
        }
        
        this.props.tenderPos[index].start_price = price;
    }

    completed(index) {
        if (this.props.tenderPos[index].start_price != 0 && this.props.tenderPos[index].analog_name != '') {
            return 'hue-rotate(180deg)'
        }
    }

}   

export default new PositionStore();
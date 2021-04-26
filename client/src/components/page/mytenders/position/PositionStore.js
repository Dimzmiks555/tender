import {makeAutoObservable} from 'mobx';

class PositionStore {
    props = {
        display : 'none',
        tenderPos: {}
    }
    constructor() {
        makeAutoObservable(this);
    }
    handleBP(e, index) {
        this.props.tenderPos[index] = {};
        this.props.tenderPos[index].start_price = e.target.value;
        console.log(this.props.tenderPos)
        // await fetch('http://127.0.0.1:5000/api/', {
        //     method: 'POST',
        //     body: data
        // }).then()
        // .catch(error => {
        //     console.log(error);
        // })
    }
    showSideBar() {
        this.props.display = 'block'
    }
    hideSideBar() {
        this.props.display = 'none'
    }

}

export default new PositionStore();
import {makeAutoObservable} from 'mobx';

class TenderoverviewStore {
    props = {
        id : null,
        company_id: null
    }

    constructor() {
        makeAutoObservable(this);
    }
    GetIds(cid,id) {
        this.props.id = id;
        this.props.company_id = cid
    }


}

export default new TenderoverviewStore();
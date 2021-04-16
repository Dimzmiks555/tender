import {makeAutoObservable} from 'mobx';

class SidebarStore {
    props = {
        display : 'none'
    }
    constructor() {
        makeAutoObservable(this);
    }

    showSideBar() {
        this.props.display = 'block'
    }
    hideSideBar() {
        this.props.display = 'none'
    }

}

export default new SidebarStore();
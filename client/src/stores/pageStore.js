import { makeAutoObservable } from 'mobx'

class PageStore {
    constructor(){
        makeAutoObservable(this);
    }
}
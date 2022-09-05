import { DataPersister } from "./dataPersister.js";

export class LocalDataPersister extends DataPersister{
    getData(key) {
        return JSON.parse(localStorage.getItem(key));
    }
    
    setData(key,value) {
        localStorage.setItem(key,JSON.stringify(value));
    }
}
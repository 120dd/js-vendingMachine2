import { LocalDataPersister } from "./localDataPersister.js";
import { Product } from "../models/product.js";
import { Coin } from "../models/coin.js";

export class VendingMachinePersister extends LocalDataPersister{
    constructor() {
        super();
        this.productData = super.getData('products');
        this.machineCoinsData = super.getData('machineCoins');
        this.userBalanceData = super.getData('userBalance');
    }
    
    convertListToProductObj = (list) => {
        if (list === null){
            return [];
        }
        return  list.map(item => new Product({
            name: item.name,
            price: item.price,
            quantity: item.quantity,
        }))
    }
    
    convertListToCoinsObj = (list) => {
        const coins = [
            new Coin({value:500,currency:'원',quantity:0}),
            new Coin({value:100,currency:'원',quantity:0}),
            new Coin({value:50,currency:'원',quantity:0}),
            new Coin({value:10,currency:'원',quantity:0}),
        ]
        if (list === null){
            return coins;
        }
        list.map(item=>{
            coins.find(coin => coin.value === item.value).quantity = item.quantity;
        })
        return coins;
    }
    
    convertListToUserBalanceObj = (list) => {
        const userBalance = {
            quantity:0,
            currency:'원'
        }
        if (list === null){
            return userBalance;
        }
        userBalance.quantity = list.quantity;
        return userBalance;
    }
    
    getVendingMachineData(){
        return {
            products: this.convertListToProductObj(this.productData),
            machineCoins: this.convertListToCoinsObj(this.machineCoinsData),
            userBalance: this.convertListToUserBalanceObj(this.userBalanceData)
        }
    }
}
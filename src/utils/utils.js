import { Product } from "../models/product.js";
import { Coin } from "../models/coin.js";

export const $ = selector => document.querySelector(selector);

export const pickRandomNumberInList = (list) => MissionUtils.Random.pickNumberInList(list);

export const convertListToProductObj = (list) => {
    if (list === null){
        return [];
    }
    return  list.map(item => new Product({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
    }))
};

export const convertListToCoinsObj = (list) => {
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

export const convertListToUserBalanceObj = (list) => {
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
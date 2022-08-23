import { pickRandomNumberInList } from "../utils/utils.js";

export class VendingMachine {
    constructor(productList = []) {
        this.products = [...productList];
        this.returnCoins = {
            'COIN_500': 0,
            'COIN_100': 0,
            'COIN_50': 0,
            'COIN_10': 0,
        }
    }
    
    addProduct(product) {
        this.products.push(product);
    }
    
    addReturnCoin(balance) {
        let remainBalance = balance;
        while (remainBalance > 0) {
            const newCoin = pickRandomNumberInList([10, 50, 100, 500]);
            if (newCoin > remainBalance) {
                continue;
            }
            remainBalance -= newCoin;
            this.returnCoins[ `COIN_${newCoin}` ] += 1;
        }
    }
}
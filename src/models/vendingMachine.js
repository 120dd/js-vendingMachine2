import { pickRandomNumberInList } from "../utils/utils.js";

export class VendingMachine {
    constructor(productList = []) {
        if (VendingMachine.instance) {
            return VendingMachine.instance
        }
        this.products = [...productList];
        VendingMachine.instance = this;
        this.returnCoins = {
            'COIN_500': 0,
            'COIN_100': 0,
            'COIN_50': 0,
            'COIN_10': 0,
        }
        this.userBalance = { amount: 0, currency: '원' };
    }
    
    addProduct(product) {
        const newProducts = [...this.products, product];
        this.setProducts(newProducts);
    }
    
    addReturnCoin(balance) {
        let remainBalance = balance;
        const newCoins = { ...this.returnCoins };
        while (remainBalance > 0) {
            const newCoin = pickRandomNumberInList([10, 50, 100, 500]);
            if (newCoin > remainBalance) {
                continue;
            }
            remainBalance -= newCoin;
            newCoins[ `COIN_${newCoin}` ] += 1;
        }
        this.setReturnCoins(newCoins)
    }
    
    addUserBalance(balance) {
        const newBalance = { ...this.userBalance };
        newBalance.amount += balance;
        this.setUserBalance(newBalance);
    }
    
    setReturnCoins(newCoins) {
        this.returnCoins = newCoins;
    }
    
    setProducts(newProducts) {
        this.products = newProducts;
    }
    
    setUserBalance(newBalance) {
        this.userBalance = newBalance
    }
}
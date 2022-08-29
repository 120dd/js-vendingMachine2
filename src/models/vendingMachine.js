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
    
    purchaseProduct(idx) {
        const { price } = this.products[ idx ];
        const newUserBalance = { ...this.userBalance };
        newUserBalance.amount -= price;
        this.setUserBalance(newUserBalance);
        const newProducts = [...this.products];
        newProducts[ idx ].quantity -= 1;
        this.setProducts(newProducts);
    }
    
    getReturnedCoins() {
        const returned500 = this.getReturnedCoin(this.userBalance.amount, 500);
        this.userBalance.amount -= returned500 * 500;
        const returned100 = this.getReturnedCoin(this.userBalance.amount, 100);
        this.userBalance.amount -= returned100 * 100;
        const returned50 = this.getReturnedCoin(this.userBalance.amount, 50);
        this.userBalance.amount -= returned50 * 50;
        const returned10 = this.getReturnedCoin(this.userBalance.amount, 10);
        this.userBalance.amount -= returned10 * 10;
        return {
            'COIN_500': returned500,
            'COIN_100': returned100,
            'COIN_50': returned50,
            'COIN_10': returned10,
        }
    }
    
    getReturnedCoin(balance, faceValue) {
        return Math.min(Math.floor(balance / faceValue), this.returnCoins[ `COIN_${faceValue}` ]);
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
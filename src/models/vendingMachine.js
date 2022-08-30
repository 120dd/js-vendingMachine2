import { pickRandomNumberInList } from "../utils/utils.js";
import { COINS } from "../constans/constans.js";
import { MachineCoins } from "./machineCoins.js";

export class VendingMachine {
    constructor(initialData) {
        if (VendingMachine.instance) {
            return VendingMachine.instance
        }
        this.products = initialData.products;
        VendingMachine.instance = this;
        this.machineCoins = new MachineCoins(initialData.machineCoins);
        this.userBalance = { amount: 0, currency: '원' };
    }
    
    addProduct(product) {
        const newProducts = [...this.products, product];
        this.setProducts(newProducts);
    }
    
    addReturnCoin(balance) {
        let remainBalance = balance;
        while (remainBalance > 0) {
            const newCoin = pickRandomNumberInList([10, 50, 100, 500]);
            if (newCoin > remainBalance) {
                continue;
            }
            remainBalance -= newCoin;
            this.machineCoins.changeCoin(newCoin,1);
        }
    }
    
    addUserBalance(balance) {
        const newBalance = { ...this.userBalance, amount: this.userBalance.amount + balance };
        this.setUserBalance(newBalance);
    }
    
    purchaseProduct(idx) {
        const { price } = this.products[ idx ];
        const newBalance = { ...this.userBalance, amount: this.userBalance.amount - price };
        this.setUserBalance(newBalance);
        const newProducts = [...this.products];
        newProducts[ idx ].quantity -= 1;
        this.setProducts(newProducts);
    }
    
    getReturnedCoins() {
        let remainBalance = this.userBalance.amount;
        const returnedCoin = {
            'COIN_500': 0,
            'COIN_100': 0,
            'COIN_50': 0,
            'COIN_10': 0,
        }
        COINS.map(coin => {
            returnedCoin[`COIN_${coin}`] = this.getReturnedCoin(remainBalance,coin);
            remainBalance -= returnedCoin[`COIN_${coin}`] * coin;
        })
        const newBalance = { ...this.userBalance, amount: remainBalance };
        this.setUserBalance(newBalance);
        return returnedCoin;
    }
    
    getReturnedCoin(balance, faceValue) {
        return Math.min(Math.floor(balance / faceValue), this.returnCoins[ `COIN_${faceValue}` ]);
    }
    
    setReturnCoins(newCoins) {
        this.machineCoins = newCoins;
    }
    
    setProducts(newProducts) {
        this.products = newProducts;
    }
    
    setUserBalance(newBalance) {
        this.userBalance = newBalance
    }
}
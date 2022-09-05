import { pickRandomNumberInList } from "../utils/utils.js";
import { Coin } from "./coin.js";

export class VendingMachine {
    #userBalance;
    
    #products;
    
    #machineCoins;
    
    #returnCoins;
    
    constructor(initialData) {
        if (VendingMachine.instance) {
            return VendingMachine.instance;
        }
        this.#setProducts(initialData.products);
        VendingMachine.instance = this;
        this.#machineCoins = initialData.machineCoins;
        this.#userBalance = initialData.userBalance;
        this.#returnCoins = [
            new Coin({ value: 500, currency: '원', quantity: 0 }),
            new Coin({ value: 100, currency: '원', quantity: 0 }),
            new Coin({ value: 50, currency: '원', quantity: 0 }),
            new Coin({ value: 10, currency: '원', quantity: 0 }),
        ]
    }
    
    addProduct(product) {
        const newProducts = [...this.#products, product];
        this.#setProducts(newProducts);
    }
    
    addMachineCoin(balance) {
        let remainBalance = balance;
        while (remainBalance > 0) {
            const newCoin = pickRandomNumberInList([10, 50, 100, 500]);
            if (newCoin > remainBalance) {
                continue;
            }
            remainBalance -= newCoin;
            this.#changeMachineCoinQuantity(newCoin, 1);
        }
    }
    
    #changeMachineCoinQuantity(value, quantity) {
        const idx = this.#machineCoins.findIndex(coin => coin.getValue() === value);
        this.#machineCoins[ idx ].addQuantity(quantity);
    }
    
    getMachineCoinQuantity(value) {
        const idx = this.#machineCoins.findIndex(coin => coin.getValue() === value);
        return this.#machineCoins[ idx ].getQuantity();
    }
    
    addUserBalance(balance) {
        this.changeUserBalance(balance);
    }
    
    purchaseProduct(idx) {
        const { price } = this.#products[ idx ];
        this.changeUserBalance(- price);
        const newProducts = [...this.#products];
        newProducts[ idx ].quantity -= 1;
        this.#setProducts(newProducts);
    }
    
    returnCoins() {
        let remainBalance = this.#userBalance.quantity;
        this.#returnCoins.forEach((coin) => {
            coin.addQuantity(this.#getReturnedCoin(remainBalance, coin.getValue()));
            remainBalance -= coin.getQuantity() * coin.getValue();
            this.#changeMachineCoinQuantity(coin.getValue(), - coin.getQuantity());
        });
        this.setUserBalance(remainBalance);
    }
    
    getProducts = () => this.#products;
    
    getProduct = (idx) => this.#products[ idx ];
    
    getMachineCoins = () => this.#machineCoins;
    
    getUserBalance = () => this.#userBalance;
    
    #getReturnedCoin(balance, faceValue) {
        return Math.min(Math.floor(balance / faceValue), this.getMachineCoinQuantity(faceValue));
    }
    
    #setProducts(newProducts) {
        this.#products = newProducts;
    }
    
    setUserBalance(quantity) {
        this.#userBalance.quantity = quantity;
    }
    
    changeUserBalance(balance) {
        this.#userBalance.quantity += balance;
    }
    
    getUserBalanceQuantity() {
        return this.#userBalance.quantity;
    }
    
    getReturnCoins = () => this.#returnCoins;
    
    resetReturnCoins() {
        this.#returnCoins.forEach(coin => {
            coin.setQuantity(0);
        })
    }
}
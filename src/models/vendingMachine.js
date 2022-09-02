import { pickRandomNumberInList } from "../utils/utils.js";
import { COINS } from "../constans/constans.js";
import { MachineCoins } from "./machineCoins.js";

export class VendingMachine {
    #userBalance;
    
    #products;
    
    #machineCoins
    
    constructor(initialData) {
        if (VendingMachine.instance) {
            return VendingMachine.instance
        }
        this.#products = initialData.products;
        VendingMachine.instance = this;
        this.#machineCoins = initialData.machineCoins;
        this.#userBalance = initialData.userBalance;
        // this.returnedCoin = new MachineCoins();
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
            this.#chargeMachineCoin(newCoin,1);
        }
    }
    
    #chargeMachineCoin(value,quantity){
        const idx = this.#machineCoins.findIndex(coin=> coin.getValue() === value);
        this.#machineCoins[idx].changeQuantity(quantity);
    }
    
    addUserBalance(balance) {
        this.changeUserBalance(balance);
    }
    
    purchaseProduct(idx) {
        const { price } = this.#products[ idx ];
        this.changeUserBalance(-price);
        const newProducts = [...this.#products];
        newProducts[ idx ].quantity -= 1;
        this.#setProducts(newProducts);
    }
    
    returnCoins() {
        let remainBalance = this.#userBalance.quantity;
        COINS.map(coin => {
            this.returnedCoin.changeCoin(coin,this.#getReturnedCoin(remainBalance,coin))
            remainBalance -= this.returnedCoin[`coinQuantity${coin}`] * coin;
            this.#machineCoins.changeCoin(coin,-this.returnedCoin[`coinQuantity${coin}`]);
        })
        this.setUserBalance(remainBalance,'원');
    }
    
    getProducts = () => this.#products;
    
    getMachineCoins = () => this.#machineCoins;
    
    #getReturnedCoin(balance, faceValue) {
        return Math.min(Math.floor(balance / faceValue), this.#machineCoins[ `coinQuantity${faceValue}` ]);
    }
    
    #setProducts(newProducts) {
        this.#products = newProducts;
    }
    
    setUserBalance(quantity,currency){
        this.#userBalance.quantity = quantity;
        this.#userBalance.currency = currency;
    }
    
    changeUserBalance(balance){
        this.#userBalance.quantity += balance;
    }
    
    getUserBalanceQuantity(){
        return this.#userBalance.quantity;
    }
}
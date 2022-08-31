import { pickRandomNumberInList } from "../utils/utils.js";
import { COINS } from "../constans/constans.js";
import { MachineCoins } from "./machineCoins.js";
import { UserBalance } from "./userBalance.js";

export class VendingMachine {
    constructor(initialData) {
        if (VendingMachine.instance) {
            return VendingMachine.instance
        }
        this.products = initialData.products;
        VendingMachine.instance = this;
        this.machineCoins = new MachineCoins(initialData.machineCoins);
        this.userBalance = new UserBalance(initialData.userBalance);
        this.returnedCoin = new MachineCoins()
    }
    
    addProduct(product) {
        const newProducts = [...this.products, product];
        this.setProducts(newProducts);
    }
    
    addMachineCoin(balance) {
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
        this.userBalance.changeQuantity(balance);
    }
    
    purchaseProduct(idx) {
        const { price } = this.products[ idx ];
        this.userBalance.changeQuantity(-price);
        const newProducts = [...this.products];
        newProducts[ idx ].quantity -= 1;
        this.setProducts(newProducts);
    }
    
    returnCoins() {
        let remainBalance = this.userBalance.quantity;
        COINS.map(coin => {
            this.returnedCoin.changeCoin(coin,this.getReturnedCoin(remainBalance,coin))
            remainBalance -= this.returnedCoin[`coinQuantity${coin}`] * coin;
            this.machineCoins.changeCoin(coin,-this.returnedCoin[`coinQuantity${coin}`]);
        })
        this.userBalance.setNewQuantity(remainBalance);
    }
    
    getReturnedCoin(balance, faceValue) {
        return Math.min(Math.floor(balance / faceValue), this.machineCoins[ `coinQuantity${faceValue}` ]);
    }
    
    setProducts(newProducts) {
        this.products = newProducts;
    }
}
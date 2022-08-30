import { View } from "./view/view.js";
import { VendingMachine } from "./models/vendingMachine.js";

export class VendingMachineHandler {
    constructor(initialData) {
        this.vendingMachine = new VendingMachine(initialData);
        this.view = new View();
        this.view.registerProductPageButtonHandler(this.requestAddProduct);
        this.view.registerCoinChargePageButtonHandler(this.requestChargeCoin);
        this.view.registerPurchasePageButtonHandler(
            this.requestChargeBalance,
            this.requestPurchaseProduct,
            this.requestReturnCoin,
        );
    }
    
    requestReturnCoin = () => {
        const returnedCoins = this.vendingMachine.getReturnedCoins();
        const newReturnCoins = {
            'COIN_500': this.vendingMachine.returnCoins.COIN_500 - returnedCoins.COIN_500,
            'COIN_100': this.vendingMachine.returnCoins.COIN_100 - returnedCoins.COIN_100,
            'COIN_50': this.vendingMachine.returnCoins.COIN_50 - returnedCoins.COIN_50,
            'COIN_10': this.vendingMachine.returnCoins.COIN_10 - returnedCoins.COIN_10,
        }
        this.vendingMachine.setReturnCoins(newReturnCoins);
        this.view.renderReturnedCoins(returnedCoins);
        this.view.renderUserBalance(this.vendingMachine.userBalance.amount);
    }
    
    requestAddProduct = (product) => {
        this.vendingMachine.addProduct(product);
    }
    
    requestChargeCoin = (balance) => {
        this.vendingMachine.addReturnCoin(balance);
    }
    
    requestChargeBalance = (balance) => {
        this.vendingMachine.addUserBalance(balance);
    }
    
    requestPurchaseProduct = (idx) => {
        this.vendingMachine.purchaseProduct(idx);
        this.view.renderUserBalance(this.vendingMachine.userBalance.amount);
        this.view.renderPurchaseProductList(this.vendingMachine.products);
        this.view.registerPurchaseButtonHandler(this.requestPurchaseProduct);
    }
}
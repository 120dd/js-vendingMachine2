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
        this.vendingMachine.returnCoins();
        this.view.renderReturnedCoins(this.vendingMachine.returnedCoin);
        this.view.renderUserBalance(this.vendingMachine.getUserBalanceQuantity());
        this.vendingMachine.returnedCoin.resetCoins();
    }
    
    requestAddProduct = (product) => {
        this.vendingMachine.addProduct(product);
    }
    
    requestChargeCoin = (balance) => {
        this.vendingMachine.addMachineCoin(balance);
    }
    
    requestChargeBalance = (balance) => {
        this.vendingMachine.addUserBalance(balance);
    }
    
    requestPurchaseProduct = (idx) => {
        this.vendingMachine.purchaseProduct(idx);
        this.view.renderUserBalance(this.vendingMachine.getUserBalanceQuantity());
        this.view.renderPurchaseProductList(this.vendingMachine.getProducts());
        this.view.registerPurchaseButtonHandler(this.requestPurchaseProduct);
    }
}
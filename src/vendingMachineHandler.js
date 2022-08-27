import { View } from "./view/view.js";
import { VendingMachine } from "./models/vendingMachine.js";

export class VendingMachineHandler {
    constructor(isDevelop, mockdata) {
        if (isDevelop) {
            this.vendingMachine = new VendingMachine(mockdata.products);
        }
        this.vendingMachine = new VendingMachine();
        this.view = new View();
        this.view.registerProductPageButtonHandler(this.requestAddProduct);
        this.view.registerCoinChargePageButtonHandler(this.requestChargeCoin);
        this.view.registerPurchasePageButtonHandler(this.requestChargeBalance, this.requestPurchaseProduct);
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
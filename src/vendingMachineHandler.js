import { View } from "./view/view.js";
import { VendingMachine } from "./models/vendingMachine.js";
import { Product } from "./models/product.js";

export class VendingMachineHandler {
    constructor(isDevelop) {
        this.mockData = [
            new Product({ name: '콜라', price: 1200, quantity: 20 }),
            new Product({ name: '환타', price: 1000, quantity: 10 }),
        ];
        if (isDevelop) {
            this.vendingMachine = new VendingMachine(this.mockData);
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
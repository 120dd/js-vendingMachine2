import { View } from "./view/view.js";
import { VendingMachine } from "./models/vendingMachine.js";
import { Product } from "./models/product.js";

export class VendingmachineHandler {
    constructor() {
        this.mockData = [new Product({ name: '콜라', price: 1200, quantity: 20 })];
        this.vendingMachine = new VendingMachine(this.mockData);
        this.view = new View();
        this.view.registerProductPageButtonHandler(this.requestAddProduct);
        this.view.registerCoinChargePageButtonHandler(this.requestChargeCoin);
        this.view.registerPurchasePageButtonHandler(this.requestChargeBalance);
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
}
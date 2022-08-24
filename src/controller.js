import { View } from "./view/view.js";
import { VendingMachine } from "./models/vendingMachine.js";

export class Controller {
    constructor() {
        this.view = new View();
        this.vendingMachine = new VendingMachine();
        this.view.registerProductPageButtonHandler(this.requestAddProduct)
    }
    
    requestAddProduct = (product) => {
        this.vendingMachine.addProduct(product);
        this.view.renderProductList(this.vendingMachine.products);
    }
}
import { View } from "./view/view.js";
import { VendingMachine } from "./models/vendingMachine.js";

export class Controller {
    constructor() {
        this.view = View.factory();
        this.vendingMachine = VendingMachine.factory();
        this.view.initUi();
        this.handlers = {
            addProduct: this.requestAddProduct
        }
        this.view.initHandlers(this.handlers);
    }
    
    static factory() {
        return new Controller();
    }
    
    requestAddProduct = (product) => {
        this.vendingMachine.addProduct(product);
        console.log(this.vendingMachine);
    }
}
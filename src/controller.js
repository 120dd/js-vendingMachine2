import { View } from "./view/view.js";
import { VendingMachine } from "./models/vendingMachine.js";
import { Product } from "./models/product.js";

export class Controller {
    constructor() {
        this.view = View.factory();
        const mockProductList = [new Product('콜라', 1200, 20)]
        this.vendingMachine = new VendingMachine(mockProductList);
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